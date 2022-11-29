// nav hamburger menu
const hamburger = document.querySelector(".hamburgerMenu");
const openIcon = document.querySelector(".fa-solid.fa-bars");
const closeIcon= document.querySelector(".fa-solid.fa-xmark");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", function() {
  // Open menu
  if (!menu.classList.contains("showMenu")) {
    menu.classList.add("showMenu");
    openIcon.style.display = "none";
    menu.style.display = "block";
    closeIcon.style.display = "block";
    closeIcon.style.fontSize = "2rem";
    closeIcon.style.paddingTop = "10px";
  } 
  // Close menu
  else {
    menu.classList.remove("showMenu");
    openIcon.style.display = "block";
    menu.style.display = "flex";
    closeIcon.style.display = "none";
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

