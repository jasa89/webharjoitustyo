const cart = []
let total = 0
let itemCount = 0

function addToCart(productName, price) {
    cart.push({ name: productName, price: price })
    total += price
    itemCount++
    
    const cartItems = document.getElementById('cart-items')
    const item = document.createElement('li');
    item.textContent = `${productName} - $${price.toFixed(2)}`
    cartItems.appendChild(item)

    document.getElementById('cart-total').textContent = total.toFixed(2)
    document.getElementById('cart-itemcount').textContent = itemCount
}


document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault() 

    const firstName = document.getElementById('fname').value
    const lastName = document.getElementById('lname').value
    const  email = document.getElementById('email').value
    const  message = document.getElementById('message').value

    if (firstName && lastName  && email && message) {
        alert('Thank you for your message! We will get back to you soon.')
        this.reset(); // Reset the form fields
    } else {
        alert('Please fill in all fields.')
    } 
})



function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }