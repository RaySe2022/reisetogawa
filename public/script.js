document.addEventListener("DOMContentLoaded", function() {
    typeWriter();
    document.addEventListener("click", displayAllContent); // Add this line
});

let i = 0;
let textIndex = 0;
let typingInProgress = true; // Flag to check if typing is in progress
const texts = [
    "Hi, I'm", 
    "REI SETOGAWA",
    "UX DESIGNER",
    "I am a passionate UX designer who finds joy in crafting remarkable digital experiences through the lens of product design. I immerse myself in the art of empathizing with people to create solutions that resonate at both a functional and emotional level."
];
const normalSpeed = 100;
const fastSpeed = 30;
const pElements = document.querySelectorAll(".landing_left_textbox p");

function typeWriter() {
    if (!typingInProgress) return; // Stop typing if all content is displayed

    const speed = (textIndex === texts.length - 1) ? fastSpeed : normalSpeed;

    if (i < texts[textIndex].length) {
        pElements[textIndex].innerHTML += texts[textIndex].charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else if (textIndex < texts.length - 1) {
        textIndex++;
        i = 0;
        setTimeout(typeWriter, 500);
    } else {
        showButton();
    }
}

function showButton() {
    const landing_btn = document.getElementById("see_btn_landing");
    landing_btn.style.display = "flex";
}

function displayAllContent() {
    if (typingInProgress) {
        typingInProgress = false; // Set the flag to false

        // Immediately display all texts
        pElements.forEach((p, index) => {
            p.innerHTML = texts[index];
        });

        showButton(); // Show the button
    }
}

//--------------------------------------------------------------------------------------
// KANBAN BOARD ANIMATION 
document.addEventListener("DOMContentLoaded", function() {
    // Select all project sections
    const projectSections = document.querySelectorAll('.project');

    // Loop through each project section and add event listeners
    projectSections.forEach(function(section) {
        section.addEventListener('mouseover', function() {
            expandImageFrame(this);
        });

        section.addEventListener('mouseout', function() {
            resetImageFrame(this);
        });

        section.addEventListener('click', function () {
            gotoLink(this);
        });
    });
});

function expandImageFrame(section) {
    const imgFrame = section.querySelector('.img_frame');
    const img = section.querySelector('.project_img');

    // Expand .img_frame to cover the whole section
    imgFrame.style.position = 'absolute';
    imgFrame.style.top = '0';
    imgFrame.style.left = '0';
    imgFrame.style.width = '100%';
    imgFrame.style.height = '100%';
    imgFrame.style.zIndex = '10';
    img.style.maxHeight = '50vh'; 
    img.style.width = '100%'; 
    img.style.height = '100%'; 


}

function resetImageFrame(section) {
    const imgFrame = section.querySelector('.img_frame');
    const img = section.querySelector('.project_img');

    // Reset .img_frame to its original style
    imgFrame.style.position = '';
    imgFrame.style.top = '';
    imgFrame.style.left = '';
    imgFrame.style.height = '';
    imgFrame.style.width = '47.5%'; // Adjust this based on your layout
    imgFrame.style.zIndex = '';
}

function gotoLink(section){
    console.log("Link Running")
    const projectName = section.querySelector("h1").textContent;
    console.log(projectName);
    var link = "project_" + projectName + ".html"; 
    console.log(link);
    window.location.href = link; 
}




