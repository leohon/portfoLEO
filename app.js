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

// Alert for non-live projects
const liveEl = document.querySelectorAll('#notLive');

liveEl.forEach(function(button) {
  button.addEventListener('click', function() {
    alert("This site is not live.");
  })
})

// Enlarge skills icons on mouse over
// Stretch goal - grey to black & zoom on mouseover
const iconEl = document.querySelectorAll('.icon i');
const iconImgEl = document.querySelectorAll('.icon img');

iconEl.forEach(function(icon) {
  icon.addEventListener('mouseover', function() {
    icon.style.fontSize = "5rem";
  });
  icon.addEventListener('mouseout', function() {
    icon.style.fontSize = "3rem";
  });
})
iconImgEl.forEach(function(icon) {
  icon.addEventListener('mouseover', function() {
    icon.style.width = "5rem";
  });
  icon.addEventListener('mouseout', function() {
    icon.style.width = "3rem";
  });
})

// Reset form on page load after Formspree submit and 'Go back' clicked
document.getElementById("name").value = "";
document.getElementById("phone").value = "";
document.getElementById("email").value = "";
document.getElementById("message").value = "";