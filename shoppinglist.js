
let shopiteminput = document.getElementById("shopiteminput");
let priceinput = document.getElementById("priceinput");
let quantityinput = document.getElementById("quantityinput");
let butt = document.getElementById("butt");
let total = document.getElementById("total");
let shoppingList = document.getElementById("shopping-list");

function display () {
    let item = shopiteminput.value;
    let price = parseFloat(priceinput.value);
    let quantity = parseInt(quantityinput.value);

    if (item && !isNaN(price) && !isNaN(quantity) && price > 0 && quantity > 0) {
        let totalPrice = price * quantity;
        total.textContent = `Total: #${totalPrice.toFixed(2)}`;

        // Create a new item element
        let newItem = document.createElement("div");
        newItem.classList.add("item");
        newItem.textContent = `Item: ${item} x Quantity: ${quantity} = Price: #${price.toFixed(2)}`;
        newItem.innerHTML += `<button class="edit-button">Edit</button> 
                              <button class="delete-button">Delete</button>`;

        newItem   
        // Add event listeners for edit and delete buttons
        newItem.querySelector(".edit-button").addEventListener("click", function () {
            let editedItem = prompt("Edit the item:", item);
            let editedPrice = parseFloat(prompt("Edit the price:", price));
            let editedQuantity = parseInt(prompt("Edit the quantity:", quantity));

            if (editedItem && Number(editedPrice) && Number(editedQuantity) && editedPrice > 0 && editedQuantity > 0) {
                item = editedItem;
                price = editedPrice;
                quantity = editedQuantity;
                newItem.textContent = `Item: ${item} x Quantity: ${quantity} = Price: #${price.toFixed(2)}}`;

                updateTotal();
            } else {
                alert("Invalid input. Item not updated.");
            }
        });

        newItem.querySelector(".delete-button").addEventListener("click", function () {
            newItem.remove();
            updateTotal();
        });

        // Add the item to the shopping list
        shoppingList.appendChild(newItem);

        // Clear the input fields
        shopiteminput.value = "";
        priceinput.value = "";
        quantityinput.value = "";
    } else {
        total.textContent = 'Invalid input';
    }
};

function updateTotal() {
let items = document.querySelectorAll(".item");
let totalPrice = 0;
items.forEach(function (item) {
// Extract quantity, price, and calculate subtotal using regular expressions
let match = item.textContent.match(/Quantity: (\d+) = Price: #([\d.]+)/);
if (match) {
    let quantity = parseInt(match[1]);
    let price = parseFloat(match[2]);
    totalPrice += price * quantity;
    let match = item.textContent.match(/Subtotal: #([\d.]+)/);
    if (match) {
        let subtotal = parseFloat(match[1]);
        totalPrice += subtotal};
}
});
total.textContent = `Total: #${totalPrice.toFixed(2)}`;
}