/*wait for the DOM to be fully loaded before executing the code*/
document.addEventListener("DOMContentLoaded", function () {
  const list = document.querySelector("ul");
  const input = document.querySelector("input");
  const button = document.getElementById("addItemBtn"); // Select button by ID
  /**add event listener to add btn**/
  button.addEventListener("click", function () {
    let newItem = input.value;
    input.value = "";

    let itemList = document.createElement("li");
    let itemText = document.createElement("span");
    let itemBtn = document.createElement("button");

    itemBtn.textContent = "Delete";
    itemText.textContent = newItem;
    /** Append the item text and delete button to the list item**/
    itemList.appendChild(itemText);
    itemList.appendChild(itemBtn);

    list.appendChild(itemList);
    /**add event listener on delete button**/
    itemBtn.onclick = function () {
      list.removeChild(itemList);
    };

    input.focus();
  });
});
