
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm')
    if (contactForm) {
      contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
  
        const firstName = document.getElementById('fname').value
        const lastName = document.getElementById('lname').value
        const email = document.getElementById('email').value
        const message = document.getElementById('message').value
  
        if (firstName && lastName && email && message) {
          alert('Thank you for your message! We will get back to you soon.')
          this.reset()
        } else {
          alert('Please fill in all fields.')
        }
      })
    }
  })