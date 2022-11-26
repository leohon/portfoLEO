// Alert for non-live projects
const liveEl = document.querySelectorAll('#notLive')
console.log(liveEl)

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
const commentEl = document.querySelector('#comment');
const buttonEl = document.querySelector('.formButton');
const formEl = document.querySelector('form')

buttonEl.addEventListener('click', function(event) {
  event.preventDefault;

  const name = nameEl.value;
  const phone = phoneEl.value;
  const email = emailEl.value;
  const comment = commentEl.value;

  if (name && phone && email && comment) {
    formEl.innerHTML = `Thanks for reaching out!`
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

