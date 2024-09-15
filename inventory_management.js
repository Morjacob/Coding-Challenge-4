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
: "In Stock" //using ternary operator to determine stock status
return `${inventory.name} is ${status}`}


console.log(displayProductDetails(inventory[0])); //displaying data for the first item in the array

// Task 3- Create a Function to Update Product Stock After Sales

function updateStock(inventory, unitsSold) {
    inventory.quantity -= unitsSold; //subtracts unitsSold from current quantity
    let stockStatus; 
    if (inventory.quantity <= inventory.lowStockLevel) {
        stockStatus = 'Low Stock';
    } else {
        stockStatus = "In Stock";
    }
    return [inventory.quantity, stockStatus];
}

let [updatedQuantity, stockStatus] = updateStock(inventory[0], 2); // An example of selling 2 units of first item in array
console.log(`Stock status for ${inventory[0].name}: ${stockStatus}`);



// Task 4- Create a Function to Check Low Stock Products

function checkLowStockLevel(inventory) {
    let lowStockProducts = []; //when the inventory is updated with a low stock product, this array should populate with data

    inventory.forEach(product => {
        if (product.quantity <= product.lowStockLevel) {
            lowStockProducts.push(`${product.name} is low in stock. Current quantity: ${product.quantity}`);
        }
    });
    return lowStockProducts;
}


const lowStockResults = checkLowStockLevel(inventory);
lowStockResults.forEach(result => console.log(result)); //will show products with low stock



// Task 5- Create a Function to Calculate Total Inventory Value


function calculateInventoryValue(inventory) { // using a loop to multiply price X quantity for every object in array 
    let totalInventoryValue = 0;
    for (let i = 0; i < inventory.length; i++) {
        totalInventoryValue += inventory[i].price * inventory[i].quantity; 
    }
    return totalInventoryValue;
}


let totalValue = calculateInventoryValue(inventory); 
console.log(`Total Inventory Value: $${totalValue}`); // returns the total value of all the items' prices




// Task 6- Create a Function to Process a Sale

//using the find function to locate a product and return it if there is enough quantity in the inventory
function processSale(productName, unitsSold, name) {
    const product = inventory.find(product => product.name === name);
    if (product) {
        return updateStock(product, unitsSold);
    } else {
        return { error: `Product ${productName} is not in the inventory.` };
    }
}

console.log (processSale(`Tablet`, 7 )); 
// This is an example of the process sale function showing an error message when given example data