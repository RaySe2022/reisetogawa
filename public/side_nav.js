var toc = document.querySelector('.side_nav');
var tocPath = document.querySelector('.toc-marker path');
var tocItems;

// Factor of screen size that the element must cross
// before it's considered visible
var TOP_MARGIN = 0.1,
    BOTTOM_MARGIN = 0.2;

var pathLength;

var lastPathStart,
    lastPathEnd;

window.addEventListener('resize', function() {
    checkProcessVisibility();
    drawPath();
}, false);

window.addEventListener('scroll', function() {
    checkProcessVisibility();
    sync();
}, false);

drawPath();
checkProcessVisibility(); // Initial call to set up the visibility

function checkProcessVisibility() {
    console.log("checkProcess Running")
    var processSection = document.getElementById('process');

    if (!processSection) {
        return; // Process section not found
    }

    var processRect = processSection.getBoundingClientRect();
    var sideNav = document.querySelector('.side_nav');

    // Hide .side_nav when the bottom of #process section is at or above the top of the viewport
    if (processRect.bottom <= 0) {
        sideNav.style.display = 'block';
    } else {
        sideNav.style.display = 'none';
    }
}

function drawPath() {
    console.log("Draw Path Running")
    // Select all the <a> tags directly preceding the .section-link
    tocItems = [].slice.call(toc.querySelectorAll('a + .section-link'));

    // Cache element references and measurements
    tocItems = tocItems.map(function(sectionLink) {
        var anchor = sectionLink.previousElementSibling;
        var target = document.getElementById(anchor.getAttribute('href').slice(1));

        return {
            sectionLink: sectionLink,
            anchor: anchor,
            target: target
        };
    });

    // Remove missing targets
    tocItems = tocItems.filter(function(item) {
        return !!item.target;
    });

    var path = [];
    var pathIndent;

    tocItems.forEach(function(item, i) {
        var x = item.anchor.offsetLeft - 5,
            y = item.anchor.offsetTop,
            height = item.anchor.offsetHeight;

        if (i === 0) {
            path.push('M', x, y, 'L', x, y + height);
            item.pathStart = 0;
        } else {
            if (pathIndent !== x) path.push('L', pathIndent, y);
            path.push('L', x, y);
            tocPath.setAttribute('d', path.join(' '));
            item.pathStart = tocPath.getTotalLength() || 0;
            path.push('L', x, y + height);
        }
        pathIndent = x;
        tocPath.setAttribute('d', path.join(' '));
        item.pathEnd = tocPath.getTotalLength();
    });

    pathLength = tocPath.getTotalLength();
    sync();
}

function sync() {
    console.log("Running Sync");
    var windowHeight = window.innerHeight;

    // Remove 'side_nav_active' class from all anchor elements
    document.querySelectorAll('.side_nav a').forEach(function(anchor) {
        anchor.classList.remove('side_nav_active');
    });

    // Iterate through tocItems to determine visibility
    tocItems.forEach(function(item) {
        var targetBounds = item.target.getBoundingClientRect();
        console.log("Target Bounds:", targetBounds);

        // Check if this section is in the viewport
        if (targetBounds.bottom > windowHeight * TOP_MARGIN && targetBounds.top < windowHeight * (1 - BOTTOM_MARGIN)) {
            console.log("Section is in viewport:", item.target);
            item.anchor.classList.add('side_nav_active'); // Add active class to the main anchor
            return; // Exit the loop if section is visible
        }
    });

    var pathStart = pathLength,
        pathEnd = 0;
    var visibleItems = 0;

    // Iterate through tocItems to determine visible path
    tocItems.forEach(function(item) {
        var targetBounds = item.target.getBoundingClientRect();

        if (targetBounds.bottom > windowHeight * TOP_MARGIN && targetBounds.top < windowHeight * (1 - BOTTOM_MARGIN)) {
            pathStart = Math.min(item.pathStart, pathStart);
            pathEnd = Math.max(item.pathEnd, pathEnd);
            visibleItems += 1;

            item.sectionLink.classList.add('visible');
            item.anchor.classList.add('side_nav_active'); // Add active class to the main anchor

            // Add 'active' class to all child anchors
            var childAnchors = item.sectionLink.querySelectorAll('a');
            childAnchors.forEach(function(anchor) {
                anchor.classList.add('side_nav_active');
            });
        } else {
            item.sectionLink.classList.remove('visible');
            item.anchor.classList.remove('side_nav_active'); // Remove active class from the main anchor

            // Remove 'active' class from all child anchors
            var childAnchors = item.sectionLink.querySelectorAll('a');
            childAnchors.forEach(function(anchor) {
                anchor.classList.remove('side_nav_active');
            });
        }
    });

    // Specify the visible path or hide the path altogether
    // if there are no visible items
    if (visibleItems > 0 && pathStart < pathEnd) {
        tocPath.setAttribute('stroke-dashoffset', '1');
        tocPath.setAttribute('stroke-dasharray', '1, ' + pathStart + ', ' + (pathEnd - pathStart) + ', ' + pathLength);
        tocPath.setAttribute('opacity', 1);
    } else {
        tocPath.setAttribute('opacity', 0);
    }

    lastPathStart = pathStart;
    lastPathEnd = pathEnd;

    console.log("sync done");
}
