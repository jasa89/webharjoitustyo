document.addEventListener("DOMContentLoaded", () => {
    const cartItemsContainer = document.getElementById("cart-items")
    const cartTotalElement = document.getElementById("cart-total")
    const clearCartBtn = document.getElementById("clear-cart-btn")

    if (!cartItemsContainer || !cartTotalElement) return

    displayCartItems()

    if (clearCartBtn) {
        clearCartBtn.addEventListener("click", () => {
            clearCart()
        })
    }

    function displayCartItems() {
        const cart = JSON.parse(localStorage.getItem("cart")) || []

        // Clear the container first
        cartItemsContainer.innerHTML = ""

        // Display each item
        cart.forEach(item => {
            const listItem = document.createElement("li")
            listItem.textContent = `${item.name} - €${item.price.toFixed(2)}`
            cartItemsContainer.appendChild(listItem)
        })

        // Calculate and display total
        const total = cart.reduce((sum, item) => sum + item.price, 0)
        cartTotalElement.textContent = total.toFixed(2)
    }

    function clearCart() {
        localStorage.removeItem("cart")
        displayCartItems()
        updateCartCount() 
    }
})