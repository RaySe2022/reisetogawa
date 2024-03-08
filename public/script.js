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
    "I am a passionate UX/UI Product Designer who finds joy in crafting remarkable user experiences with web development skills and knowledge. I immerse myself in the art of empathizing with people to create solutions that resonate at both a functional and emotional level."
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
    const link = section.querySelector('.project_link'); 

    // Expand .img_frame to cover the whole section
    imgFrame.style.position = 'absolute';
    imgFrame.style.top = '0';
    imgFrame.style.left = '0';
    imgFrame.style.width = '100%';
    imgFrame.style.height = '100%';
    imgFrame.style.zIndex = '10';
    img.style.width = '100%'; 
    img.style.filter = 'blur(5px)'; // The value 8px can be adjusted to increase or decrease the blur intensity
    link.style.display = 'flex';
    link.style.position = 'absolute'; // Position it absolutely within the section
    link.style.top = '50%'; // Align vertically to the middle
    link.style.left = '50%'; // Align horizontally to the middle
    link.style.transform = 'translate(-50%, -50%)'; // Center it perfectly
    link.style.zIndex = '20';
    link.style.width = 'auto'; // Adjust width as necessary

}

function resetImageFrame(section) {
    const imgFrame = section.querySelector('.img_frame');
    const img = section.querySelector('.project_img');
    const link = section.querySelector('.project_link'); 


    // Reset .img_frame to its original style
    imgFrame.style.position = '';
    imgFrame.style.top = '';
    imgFrame.style.left = '';
    imgFrame.style.width = '';
    imgFrame.style.height = '';
    imgFrame.style.zIndex = '';
    img.style.width = ''; 
    img.style.filter = ''; // The value 8px can be adjusted to increase or decrease the blur intensity
    link.style.display = '';
    link.style.zIndex = '';
    link.style.width = '';


}




