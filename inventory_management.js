// Task 1- Create an Inventory Array of Product Objects

let inventory = [
    { name: 'Laptop', price: 1200, quantity: 10, lowStockLevel: 3 },
    { name: 'Smartphone', price: 800, quantity: 5, lowStockLevel: 2 },
    { name: 'Tablet', price: 400, quantity: 7, lowStockLevel: 1 },
    { name: 'Headphones', price: 100, quantity: 15, lowStockLevel: 5 },
    { name: 'Smartwatch', price: 250, quantity: 3, lowStockLevel: 1 }
]

// Task 2- Create a Function to Display Product Details

function displayProductDetails (inventory, price, quantity, lowStockLevel) {
    const status = quantity <= price <= lowStockLevel ? "Low Stock"
: "In Stock"
return `${inventory.name} is ${status}`}


console.log(displayProductDetails(inventory[0]));

// Task 3- Create a Function to Update Product Stock After Sales

function updateStock(inventory, unitsSold) {
    inventory.quantity -= unitsSold;
    let stockStatus;
    if (inventory.quantity <= inventory.lowStockLevel) {
        stockStatus = 'Low Stock';
    } else {
        stockStatus = "In Stock";
    }
    return [inventory.quantity, stockStatus];
}

let [updatedQuantity, stockStatus] = updateStock(inventory[0], 2); // Example: selling 2 units of the first product
console.log(`Stock status for ${inventory[0].quantity}: ${stockStatus}`);



// Task 4- Create a Function to Check Low Stock Products

   function checkLowStockLevel(inventory) {
    inventory.forEach(inventory => {
        if (inventory.quantity <= inventory.lowStockLevel) {
            console.log(`${inventory.name} is low in stock.`);
        }
    });
}



console.log (`${inventory.name} is low in stock.`);