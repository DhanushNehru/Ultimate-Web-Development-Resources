// JavaScript for the shopping cart functionality

const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const addToCartButtons = document.querySelectorAll(".add-to-cart");

let cart = [];
let total = 0;

addToCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const productName = button.getAttribute("data-product");
        const productPrice = parseFloat(button.getAttribute("data-price"));
        const productImage = button.getAttribute("data-image");

        cart.push({ name: productName, price: productPrice, image: productImage });
        total += productPrice;

        updateCart();
    });
});

function updateCart() {
    cartItems.innerHTML = "";
    cart.forEach((item, index) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<img src="${item.image}" alt="${item.name}" /> ${item.name} - $${item.price.toFixed(2)} <button class="delete-item" data-index="${index}">Delete</button>`;
        cartItems.appendChild(listItem);
    });

    cartTotal.innerText = total.toFixed(2);

    // Attach click event listeners to delete buttons
    const deleteButtons = document.querySelectorAll(".delete-item");
    deleteButtons.forEach((deleteButton) => {
        deleteButton.addEventListener("click", () => {
            const index = parseInt(deleteButton.getAttribute("data-index"), 10);
            const deletedItemPrice = cart[index].price;
            cart.splice(index, 1);
            total -= deletedItemPrice;
            updateCart();
        });
    });
}
