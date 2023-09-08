document.addEventListener("DOMContentLoaded", function () {
  const input = document.querySelector(".todo-list__input");
  const itemList = document.querySelector(".todo-list__items");
  const highlightButton = document.querySelector(
    ".todo-list__highlight-button"
  );
  const addButton = document.querySelector(".todo-list__add-button"); // Добавляем кнопку "Добавить задачу"

  input.addEventListener("keyup", function (event) {
    if (event.key === "Enter" && input.value.trim() !== "") {
      addItem(input.value);
      input.value = "";
    }
  });

  addButton.addEventListener("click", function () {
    // Проверяем, что input не пустой
    if (input.value.trim() !== "") {
      addItem(input.value);
      input.value = "";
    }
  });

  highlightButton.addEventListener("click", function () {
    const items = document.querySelectorAll(".todo-list__item");

    items.forEach(function (item, index) {
      if (index % 2 === 1) {
        item.classList.add("todo-list__item--highlighted");
      } else {
        item.classList.remove("todo-list__item--highlighted");
      }
    });
  });

  function addItem(text) {
    const listItem = document.createElement("li");
    listItem.className = "todo-list__item";

    const itemText = document.createElement("span");
    itemText.className = "todo-list__item-text";
    itemText.textContent = text;

    const deleteButton = document.createElement("button");
    deleteButton.className = "todo-list__delete-button";
    deleteButton.textContent = "Удалить";

    deleteButton.addEventListener("click", function () {
      itemList.removeChild(listItem);
    });

    listItem.appendChild(itemText);
    listItem.appendChild(deleteButton);
    itemList.appendChild(listItem);
  }
});
