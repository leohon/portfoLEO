// Nav hamburger menu
// SOURCE: https://dev.to/ljcdev/easy-hamburger-menu-with-js-2do0
const menu = document.querySelector(".menu");
const hamburger = document.querySelector(".hamburgerMenu");
const open = document.querySelector(".fa-solid.fa-bars");
const close = document.querySelector(".fa-solid.fa-xmark");

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

iconEl.forEach(function(icon) {
  icon.addEventListener('mouseover', function() {
    icon.style.fontSize = "5rem";
  });
  icon.addEventListener('mouseout', function() {
    icon.style.fontSize = "3rem";
  });
})

// Form feedback upon submit
const nameEl = document.querySelector('#name');
const phoneEl = document.querySelector('#phone');
const emailEl = document.querySelector('#email');
const messageEl = document.querySelector('#message');
const buttonEl = document.querySelector('.formButton');
const formEl = document.querySelector('form');

buttonEl.addEventListener('click', function(event) {
  event.preventDefault();

  const name = nameEl.value;
  const phone = phoneEl.value;
  const email = emailEl.value;
  const message = messageEl.value;

  if (name && phone && email && message) {
    formEl.innerHTML = `Thanks for reaching out!`;
    formEl.style.fontSize = "2rem";
    formEl.style.paddingTop = "100px";
    formEl.style.color = "gold";
  }
  else {
    if (!name) {
      alert("Please fill in name.");
    }
    else if (!phone) {
      alert("Please fill in phone number.");
    }
    else if (!email) {
      alert("Please fill in email.");
    }
    else {
      alert("Please write a message.");
    }
  }
})

