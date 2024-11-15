
function toggleMenu() {
    const navbarMenu = document.getElementById('navbar-menu');
    const navbtn = document.getElementById('nav-btn');
  
    // Toggle 'active' class for menu and button
    navbarMenu.classList.toggle('active');
    navbtn.classList.toggle('active');
  
    // Toggle 'no-scroll' class on body to lock/unlock scrolling
    if (navbarMenu.classList.contains('active')) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }
  
  function hideNavbar() {
    const sideNavbar = document.getElementById('navbar-menu');
    const sideNavbarbtn = document.getElementById('nav-btn');
  
    // Remove 'active' class
    sideNavbar.classList.remove('active');
    sideNavbarbtn.classList.remove('active');
  
    // Remove 'no-scroll' class on body to unlock scrolling
    document.body.classList.remove('no-scroll');
  }
  
  // Optional: Close menu when clicking outside
  document.addEventListener('click', function (event) {
    const navbarMenu = document.getElementById('navbar-menu');
    const navbtn = document.getElementById('nav-btn');
    const toggleButton = document.querySelector('.toggle-button');
  
    if (!navbarMenu.contains(event.target) && !toggleButton.contains(event.target)) {
      navbarMenu.classList.remove('active');
      navbtn.classList.remove('active');
      document.body.classList.remove('no-scroll'); // Unlock scrolling
    }
  });
  


const navbar = document.querySelector('.navbar')

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled')
  }else {
    navbar.classList.remove('scrolled')
  }
})
// Set the current year dynamically
document.getElementById('year').textContent = new Date().getFullYear()

document.querySelector('form').addEventListener('submit', function (event) {
  event.preventDefault() // Prevent form submission for validation

  // Clear previous error messages
  const errorMessages = document.querySelectorAll('.error-message')
  errorMessages.forEach(msg => msg.remove())

  // Get form fields
  const firstName = document.querySelector('.f-name input')
  const lastName = document.querySelector('.l-name input')
  const email = document.querySelector('.input-email input')
  const message = document.querySelector('.input-message textarea')

  const policy = document.querySelector('.check-policy input')

  // Flag to track if the form is valid
  let isValid = true

  // Helper function to display error messages
  function showError (input, message) {
    const error = document.createElement('div')
    error.className = 'error-message'
    error.style.color = 'red'
    error.style.fontSize = '0.9rem'
    error.textContent = message
    input.parentElement.appendChild(error)
    isValid = false
  }

  // Validate First Name
  if (firstName.value.trim() === '') {
    showError(firstName, 'First name is required.')
  }

  // Validate Last Name
  if (lastName.value.trim() === '') {
    showError(lastName, 'Last name is required.')
  }


  // Validate Email
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/

  if (!email.value.trim()) {
    showError(email, 'Please enter a email address.')
  }

  else if (!email.value.match(emailPattern)) {
    showError(email, 'Please enter a valid email address.')
  }



  // Validate Message
  if (message.value.trim() === '') {
    showError(message, 'Message cannot be empty.')
  }

  // Validate Checkbox
  if (!policy.checked) {
    const policyError = document.createElement('div')
    policyError.className = 'error-message'
    policyError.style.color = 'red'
    policyError.style.fontSize = '0.9rem'
    policyError.textContent = 'You must agree to the privacy policy.'
    policy.parentElement.appendChild(policyError)
    isValid = false
  }

  // If all fields are valid, allow form submission
  if (isValid) {
    alert('Form submitted successfully!')
    this.submit() // Submit the form
  }
})

// Select the form and input elements
const form = document.querySelector('.footer-top-right')
const emailInput = document.getElementById('email-input')
const emailError = document.getElementById('email-error')


// Add an event listener for form submission
form.addEventListener('submit', function (event) {
  event.preventDefault() // Prevent the form from submitting

  // Clear any previous error message
  emailError.textContent = ''


  // Validate the email
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
  if (!emailInput.value.trim()) {
    emailError.textContent = 'Email is required.'
  } else if (!emailInput.value.match(emailPattern)) {
    emailError.textContent = 'Please enter a valid email address.'
  } else {
    // If valid, proceed with submission logic (e.g., AJAX call, etc.)
    alert('Thank you for subscribing!')
    form.submit(); // Optional: Submit the form if needed
  }
})

function openModal () {
  // Open the modal and set the video URL
  const modal = document.getElementById('video-modal')
  const videoFrame = document.getElementById('video-frame')

  // Set the YouTube or other video URL here
  videoFrame.src = 'https://www.youtube.com/embed/76o9XQWB9Qc' // Replace VIDEO_ID with the actual video ID
  modal.style.display = 'block'
}

function closeModal () {
  // Close the modal and stop the video
  const modal = document.getElementById('video-modal')
  const videoFrame = document.getElementById('video-frame')

  videoFrame.src = '' // Clear the src to stop the video
  modal.style.display = 'none'
}

// Optional: Close the modal when clicking outside of it
window.onclick = function (event) {
  const modal = document.getElementById('video-modal')
  if (event.target == modal) {
    closeModal()
  }
}
