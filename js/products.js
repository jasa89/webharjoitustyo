document.addEventListener("DOMContentLoaded", () => {
    updateCartCount()

    // Attach event listeners to all product buttons (if preferred over inline onclick)
    const addToCartButtons = document.querySelectorAll("[data-product-name]")
    addToCartButtons.forEach(button => {
        button.addEventListener("click", () => {
            const name = button.getAttribute("data-product-name")
            const price = parseFloat(button.getAttribute("data-product-price"))
            addToCart(name, price)
        })
    })
})

// Add to cart
function addToCart(productName, price) {
    const cart = JSON.parse(localStorage.getItem("cart")) || []
    cart.push({ name: productName, price: price })
    localStorage.setItem("cart", JSON.stringify(cart))
    updateCartCount()
}

// Update cart count in navbar
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || []
    const cartItemCount = document.getElementById("cart-itemcount")

    if (cartItemCount) {
        const count = cart.length;
        cartItemCount.textContent = count;
        cartItemCount.style.display = count === 0 ? "none" : "inline"
    }
}