// Task 1- Create an Inventory Array of Product Objects

let inventory = [
    { name: 'Laptop', price: 1200, quantity: 10, lowStockLevel: 3 },
    { name: 'Smartphone', price: 800, quantity: 5, lowStockLevel: 2 },
    { name: 'Tablet', price: 400, quantity: 7, lowStockLevel: 1 },
    { name: 'Headphones', price: 100, quantity: 15, lowStockLevel: 5 },
    { name: 'Smartwatch', price: 250, quantity: 3, lowStockLevel: 1 }
]

// Task 2- Create a Function to Display Product Details

function displayProductDetails (inventory) {
    const status = inventory.quantity <= inventory.lowStockLevel ? "Low Stock"
: "In Stock"
return `${inventory.name} is ${status}`}

let stockStatus;
if (quantity <= lowStockLevel) {
    stockStatus = "Low Stock";
}
else {
    stockStatus = "In Stock";
}

console.log(display(inventory[0]));


