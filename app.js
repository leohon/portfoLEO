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

window.onscroll = function() {
  if (document.documentElement.scrollTop > 50) {
    toContentButton.style.display = "none";
  } else {
    toContentButton.style.display = "initial";
  }

  if (document.documentElement.scrollTop > 500) {
    toTopButton.style.display = "block";
  } else {
    toTopButton.style.display = "none";
  }
};

// Alert for non-live projects
const liveEl = document.querySelectorAll('#notLive');

liveEl.forEach(function(button) {
  button.addEventListener('click', function() {
    alert("This site is not live.");
  })
})

// Reset form on page load after Formspree submit and 'Go back' clicked
document.getElementById("name").value = "";
document.getElementById("phone").value = "";
document.getElementById("email").value = "";
document.getElementById("message").value = "";