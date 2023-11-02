// Object to hold the slide indices for each slideshow
let slideIndices = {
    'slideshow-1': 1,
    'slideshow-2': 1
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
  showSlides('slideshow-1', slideIndices['slideshow-1']);
  showSlides('slideshow-2', slideIndices['slideshow-2']);
  