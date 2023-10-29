


  //-----------------TYPE WRITER--------------------------------------

  document.addEventListener("DOMContentLoaded", function() {
    typeWriter();
});

let i = 0;
let textIndex = 0;
const texts = [
    "Hi, I`m", 
    "REI SETOGAWA",
    "UX DESIGNER",
    "I am a passionate UX designer who finds joy in crafting remarkable digital experiences through the lens of product design. I immerse myself in the art of empathizing with people to create solutions that resonate at both a functional and emotional level."
];
const normalSpeed = 100;
const fastSpeed = 30; // Faster typing speed for the last <p> element
const pElements = document.querySelectorAll(".landing_left_textbox p");

function typeWriter() {
    const speed = (textIndex === texts.length - 1) ? fastSpeed : normalSpeed; // Use faster speed for the last text

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

function showButton(){
    const landing_btn = document.getElementById("see_btn_landing");
    landing_btn.style.display="block";
}


//document.getElementById('project_one').addEventListener('click',function(){
  //  window.location.href = 'project_hology.html'
//})