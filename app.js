// Nav hamburger menu
// SOURCE: https://dev.to/ljcdev/easy-hamburger-menu-with-js-2do0
const menu = document.querySelector('.menu');
const hamburger = document.querySelector('.hamburgerMenu');
const open = document.querySelector('.fa-solid.fa-bars');
const close = document.querySelector('.fa-solid.fa-xmark');

hamburger.addEventListener("click", function() {
  // Open menu
  if (!menu.classList.contains("showMenu")) {
    menu.classList.add("showMenu");
    open.style.display = "none";
    close.style.display = "block";
    close.style.fontSize = "2rem";
    close.style.paddingTop = "10px";
    menu.style.display = "block";
  } 
  // Close menu
  else {
    menu.classList.remove("showMenu");
    open.style.display = "block";
    close.style.display = "none";
    menu.style.display = "flex";
  }
});

// Scroll to content && scroll to top animation
const toContentButton = document.querySelector('.toContent');
const toTopButton = document.querySelector('.toTop');

// Scroll event listener for 'to Content'
window.addEventListener('scroll', function() {
  if (toContentButton === null) {
    // Handles console error as there is no toContentButton in projects.html
  }
  else if (document.documentElement.scrollTop > 50) {
    toContentButton.style.display = "none";
  } 
  else {
    toContentButton.style.display = "initial";
  }
})

// Scroll event listener for 'to Top'
window.addEventListener('scroll', function() {
  if (document.documentElement.scrollTop > 500) {
    toTopButton.style.display = "block";
  } else {
    toTopButton.style.display = "none";
  }
})

// Alert for non-live projects
const liveEl = document.querySelectorAll('#notLive');

liveEl.forEach(function(button) {
  button.addEventListener('click', function() {
    alert("This site is not live.");
  })
})

// Alert for works with no code
const codeEl = document.querySelectorAll('#noCode');

codeEl.forEach(function(button) {
  button.addEventListener('click', function() {
    alert("This site has no code.");
  })
})

// Lightbox
/**
 * Store all original images.
 * Target lightbox section and duplicated images
 * Select close button
 */
const projectScreenshots = document.querySelectorAll(".imgContainer");
const lightbox = document.getElementById("lightbox");
const images = document.getElementsByClassName("lightboxContainer");
const closeLB = document.querySelector(".close");

/**
 * For each screenshot, add a 'click' event.
 * 1) Display the lightbox section.
 * 2) Hide the duplicated images.
 * 3) Going through all lightbox images, if the image source matches the clicked image source, display the image. 
 */
projectScreenshots.forEach(function(event) {
  event.addEventListener("click", function(){
    lightbox.style.display = "block";

    for (let i = 0; i < images.length; i++){
      images[i].style.display = "none";
    }

    for (let j = 0; j < images.length; j++){
      if (images[j].firstElementChild.src === event.firstElementChild.src) {
        images[j].style.display = "block";
      }
    }
  })
})

// Close the lightbox by clicking the 'X' or press 'esc'.
closeLB.addEventListener("click", function(){
  lightbox.style.display = "none";
})

window.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    lightbox.style.display = "none";
  }
})

// Reset form on page load after Formspree submit and 'Go back' clicked
document.getElementById("name").value = "";
document.getElementById("phone").value = "";
document.getElementById("email").value = "";
document.getElementById("message").value = "";