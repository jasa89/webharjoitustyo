// Update cart item count in the top nav
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || []
    const cartItemCount = document.getElementById("cart-itemcount")

    if (cartItemCount) {
        const count = cart.length
        cartItemCount.textContent = count
        cartItemCount.style.display = count === 0 ? "none" : "inline"
    }
}

// Navbar toggle function
function myFunction() {
    const nav = document.getElementById("myTopnav")
    nav.classList.toggle("responsive")
}

// Clear the cart (used in cart page)
function clearCart() {
    localStorage.removeItem("cart")

    // Safely call UI update functions if they exist
    if (typeof displayCartItems === "function") displayCartItems()
    updateCartCount()

}

// Call this on every page load to show the cart count
document.addEventListener("DOMContentLoaded", updateCartCount)