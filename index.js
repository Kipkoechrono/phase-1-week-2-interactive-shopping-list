/*wait for the DOM to be fully loaded before executing the code*/
/*write your js code here*/
document.addEventListener('DOMContentLoaded', function() {
    const itemList = []; // Maintain a javascript Array to store shopping list items
    const listContainer = document.getElementById('itemList');
    const input = document.getElementById('item');
    const addItemBtn = document.getElementById('addItemBtn');
    const markPurchasedBtn = document.getElementById('markPurchasedBtn');
    const clearListBtn = document.getElementById('clearListBtn');

    // (function)to add a new item to the list
    function addItemToList(item) {
        itemList.push({ name: item, purchased: false }); // Add item to array
        renderList(); // Update the DOM with the new item
    }

    // Function to render the list items
    function renderList() {
        listContainer.innerHTML = ''; 

        itemList.forEach((item, index) => {
            const listItem = document.createElement('li');
            listItem.textContent = item.name;

            // Add  class purchased items
            if (item.purchased) {
                listItem.style.textDecoration = 'line-through';
            }

            // buttons marks items as purchased and cancels
            const markBtn = document.createElement('button');
            markBtn.textContent = 'Mark Purchased';
            markBtn.addEventListener('click', function() {
                itemList[index].purchased = true; 
                renderList();
            });

            listItem.appendChild(markBtn);
            listContainer.appendChild(listItem);
        });
    }

    // Event listener for adding an item
    addItemBtn.addEventListener('click', function() {
        const newItem = input.value.trim();
        if (newItem !== '') {
            addItemToList(newItem); // Add item to the list
            input.value = '';
        }
    });

    // Event listener for marking all items as purchased
    markPurchasedBtn.addEventListener('click', function() {
        itemList.forEach(item => {
            item.purchased = true; // Marking  the items as purchased s
        });
        renderList(); // Updatess the DOM
    });

    // Event listener for clearing the list
    clearListBtn.addEventListener('click', function() {
        itemList.length = 0; // Clear the array
        renderList();
    });

    //first render of the list
    renderList();
});

