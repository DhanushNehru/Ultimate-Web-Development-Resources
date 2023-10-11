const icon = document.getElementById("cartIcon");
const cart_add = document.querySelector(".cart");
const closeIcon = document.querySelector("#close-cart");

// Array of objects of products

let products = [
    {
        name: 'Salmon',
        price: 120.00,
        tag: 'whiskas',
        inCart: 0
    },
    {
        name: 'Rectangle Bed',
        price: 120.00,
        tag: 'comfy',
        inCart: 0
    },
    {
        name: 'Furminator',
        price: 120.00,
        tag: 'care',
        inCart: 0
    },

    {
        name: 'Cat Carrier',
        price: 120.00,
        tag: 'ease',
        inCart: 0
    },

    {
        name: 'Training Leash',
        price: 120.00,
        tag: 'carry',
        inCart: 0
    },

    {
        name: 'Bentonite Litter',
        price: 120.00,
        tag: 'food',
        inCart: 0
    },

    {
        name: 'Klumpy Litter',
        price: 120.00,
        tag: 'food',
        inCart: 0
    },

    {
        name: 'Cat Bowl',
        price: 120.00,
        tag: 'resource',
        inCart: 0
    },

    {
        name: 'Slicker Brush',
        price: 120.00,
        tag: 'clean',
        inCart: 0
    },
]

// cart visible

icon.onclick = () => {
    cart_add.classList.add("active");
};

// cart not visible

closeIcon.addEventListener("click", () => {
    cart_add.classList.remove("active");
});

// Selecting all the products that have to be added in a cart

let add_to_cart = document.querySelectorAll(".add-cart-btn");

add_to_cart.forEach((cart, idx) => {
    cart.addEventListener("click", () => {
      
        cartNumbers(products[idx]);
      
        total_cost(products[idx]);


    });
});

// Making cart constant even on load

function onloadcartnumber()
{
    let productNumbers = localStorage.getItem('cartNumbers');
  
    if(productNumbers)
    {
        document.querySelector('#cartIcon span').textContent = productNumbers;
    }

}

function cartNumbers(product)
{
    console.log("the product clicked is", product);
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers); // converts string to number
   
    if(productNumbers)
    {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('#cartIcon span').textContent = productNumbers + 1;
    }

    else
    {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('#cartIcon span').textContent = 1;
    }

    setItems(product);
}

function setItems(product)
{
   let cartItems = localStorage.getItem('productsInCart');
   cartItems = JSON.parse(cartItems); // converts json object to javascript format
   console.log("my cart items", cartItems);


if(cartItems != null)
{

    if(cartItems[product.tag] == undefined)
    {
        cartItems = {
          ...cartItems, 
          [product.tag]: product 
        }
    }

    cartItems[product.tag].inCart +=1;
}

else
{

    product.inCart = 1;
 cartItems = {
        [product.tag]: product
    }
}   
    localStorage.setItem("productsInCart", JSON.stringify(cartItems)); // json.stringify converts javscript object to json
}

// Function for total prices of products

function total_cost(product)
{
// console.log("product price is", product.price);

let cartCost = localStorage.getItem("TotalCost");


console.log("My cart cost is", cartCost);

if(cartCost != null)
{
    
cartCost = parseInt(cartCost); // converts string to number
localStorage.setItem("TotalCost", cartCost + product.price);
}

else
{
    localStorage.setItem("TotalCost", product.price);
}

}



//Functioning cart with data

function display_cart()
{
let cart_items = localStorage.getItem("productsInCart");
cart_items = JSON.parse(cart_items);

if(cart_items && cart_add)
{

}
}


onloadcartnumber(); // whenever page loads, cart would remain in its behavior
display_cart();