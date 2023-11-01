console.log("slideshow is running");

// Function to change slides in a specific slideshow
function changeSlide(slideshowClass, n) {
    showSlide(slideshowClass, (slideIndex[slideshowClass] += n));
}

// Function to show a specific slide in a slideshow
function currentSlide(slideshowClass, n) {
    showSlide(slideshowClass, (slideIndex[slideshowClass] = n));
}

// Function to show slides in a specific slideshow
function showSlide(slideshowClass, n) {
    const slideshow = document.querySelector(`.${slideshowClass}`);
    const slides = slideshow.querySelectorAll('.slide');
    const dots = slideshow.querySelectorAll('.dot');

    if (n > slides.length) {
        slideIndex[slideshowClass] = 1;
    }

    if (n < 1) {
        slideIndex[slideshowClass] = slides.length;
    }

    slides.forEach((slide) => {
        slide.style.display = 'none';
    });

    dots.forEach((dot) => {
        dot.classList.remove('active');
    });

    slides[slideIndex[slideshowClass] - 1].style.display = 'block';
    dots[slideIndex[slideshowClass] - 1].classList.add('active');
}

// Initialize slideIndex for each slideshow
const slideIndex = {
    'slideshow-1': 1,
    'slideshow-2': 1
};

// Initialize the first slideshow
showSlide('slideshow-1', slideIndex['slideshow-1']);

// Initialize the second slideshow
showSlide('slideshow-2', slideIndex['slideshow-2']);
