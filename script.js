document.addEventListener("DOMContentLoaded", function () {
  const input = document.querySelector(".todo-list__input");
  const itemList = document.querySelector(".todo-list__items");
  const addButton = document.querySelector(".todo-list__add-button");
  const toggleButtonsButton = document.querySelector(
    ".todo-list__toggle-buttons-button"
  );
  const toggleButtons = document.querySelector(".todo-list__toggle-buttons");
  const highlightButton = document.querySelector(
    ".todo-list__highlight-button"
  );
  const highlightOddButton = document.querySelector(
    ".todo-list__highlight-odd-button"
  );
  const deleteFirstButton = document.querySelector(
    ".todo-list__delete-first-button"
  );
  const deleteLastButton = document.querySelector(
    ".todo-list__delete-last-button"
  );
  const noTasksMessage = document.querySelector(".todo-list__no-tasks"); // Получаем элемент с надписью

  input.addEventListener("keyup", function (event) {
    if (event.key === "Enter" && input.value.trim() !== "") {
      addItem(input.value);
      input.value = "";
    }
  });

  addButton.addEventListener("click", function () {
    if (input.value.trim() !== "") {
      addItem(input.value);
      input.value = "";
    }
  });

  toggleButtonsButton.addEventListener("click", function () {
    // Переключаем видимость блока с кнопками
    if (toggleButtons.style.display === "none") {
      toggleButtons.style.display = "block";
    } else {
      toggleButtons.style.display = "none";
    }
  });

  highlightButton.addEventListener("click", function () {
    const items = document.querySelectorAll(".todo-list__item");

    items.forEach(function (item, index) {
      if (index % 2 === 0) {
        item.classList.add("todo-list__item--highlighted");
      } else {
        item.classList.remove("todo-list__item--highlighted");
      }
    });
  });

  highlightOddButton.addEventListener("click", function () {
    const items = document.querySelectorAll(".todo-list__item");

    items.forEach(function (item, index) {
      if (index % 2 === 1) {
        item.classList.add("todo-list__item--highlighted");
      } else {
        item.classList.remove("todo-list__item--highlighted");
      }
    });
  });

  deleteFirstButton.addEventListener("click", function () {
    const items = document.querySelectorAll(".todo-list__item");
    const firstItem = items[0];

    if (firstItem) {
      itemList.removeChild(firstItem);
      checkTasks(); // Проверяем задачи после удаления
    }
  });

  deleteLastButton.addEventListener("click", function () {
    const items = document.querySelectorAll(".todo-list__item");
    const lastItem = items[items.length - 1];

    if (lastItem) {
      itemList.removeChild(lastItem);
      checkTasks(); // Проверяем задачи после удаления
    }
  });

  function addItem(text) {
    const listItem = document.createElement("li");
    listItem.className = "todo-list__item";

    const itemText = document.createElement("span");
    itemText.className = "todo-list__item-text";
    itemText.textContent = text;

    const completeButton = document.createElement("button");
    completeButton.className = "todo-list__complete-button button";
    completeButton.textContent = "Выполнена";

    const deleteButton = document.createElement("button");
    deleteButton.className = "todo-list__delete-button button";
    deleteButton.textContent = "Удалить";

    deleteButton.addEventListener("click", function () {
      itemList.removeChild(listItem);
      checkTasks(); // Проверяем задачи после удаления
    });

    completeButton.addEventListener("click", function () {
        if (completeButton.textContent === "Выполнена") {
          itemText.classList.add("todo-list__item-text--completed");
          completeButton.textContent = "Не выполнена";
        } else {
          itemText.classList.remove("todo-list__item-text--completed");
          completeButton.textContent = "Выполнена";
        }
        itemList.appendChild(listItem);
      });
      

    listItem.appendChild(itemText);
    listItem.appendChild(completeButton);
    listItem.appendChild(deleteButton);
    itemList.appendChild(listItem);
    checkTasks(); // Проверяем задачи после добавления
  }

  function checkTasks() {
    const items = document.querySelectorAll(".todo-list__item");

    if (items.length === 0) {
      noTasksMessage.style.display = "block"; // Отображаем надпись, если нет задач
    } else {
      noTasksMessage.style.display = "none"; // Скрываем надпись, если есть задачи
    }
  }
});
