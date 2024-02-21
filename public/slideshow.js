// Object to hold the slide indices for each slideshow
let slideIndices = {
    'slideshow-1': 1,
    'slideshow-2': 1,
    'slideshow-3': 1,
    'slideshow-4': 1,
    'slideshow-6': 1,
    'slideshow-7': 1,
    'slideshow-8': 1,
    'slideshow-9': 1,
    'slideshow-10': 1,
    'slideshow-11': 1,
    'slideshow-12': 1,




  };
  
  function changeSlide(slideshowId, n) {
    showSlides(slideshowId, slideIndices[slideshowId] += n);
  }
  
  function currentSlide(slideshowId, n) {
    showSlides(slideshowId, slideIndices[slideshowId] = n);
  }
  
  function showSlides(slideshowId, n) {
    let slideshow = document.querySelector(`.${slideshowId}`);
    let slides = slideshow.getElementsByClassName("slide");
    let dots = slideshow.getElementsByClassName("dot");
  
    if (n > slides.length) {
      slideIndices[slideshowId] = 1;
    } else if (n < 1) {
      slideIndices[slideshowId] = slides.length;
    }
  
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
  
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  
    slides[slideIndices[slideshowId] - 1].style.display = "block";
    if(dots[slideIndices[slideshowId] - 1]){ // Check if the dot exists
      dots[slideIndices[slideshowId] - 1].className += " active";
    }
  }
  
  // Initialize the slideshows
  document.addEventListener('DOMContentLoaded', function() {

    showSlides('slideshow-1', slideIndices['slideshow-1']);
    showSlides('slideshow-2', slideIndices['slideshow-2']);
    showSlides('slideshow-3', slideIndices['slideshow-3']);
    showSlides('slideshow-4', slideIndices['slideshow-4']);
    showSlides('slideshow-6', slideIndices['slideshow-6']);
    showSlides('slideshow-7', slideIndices['slideshow-7']);
    showSlides('slideshow-8', slideIndices['slideshow-8']);
    showSlides('slideshow-9', slideIndices['slideshow-9']);


  });




  