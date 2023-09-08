document.addEventListener("DOMContentLoaded", function () {
  const input = document.querySelector(".todo-list__input"); // Получаем поле ввода
  const itemList = document.querySelector(".todo-list__items"); // Получаем список задач
  const highlightButton = document.querySelector(
    ".todo-list__highlight-button"
  ); // Получаем кнопку "Выделить чётные"
  const highlightOddButton = document.querySelector(
    ".todo-list__highlight-odd-button"
  ); // Получаем кнопку "Выделить нечётные"
  const addButton = document.querySelector(".todo-list__add-button"); // Получаем кнопку "Добавить задачу"
  const deleteLastButton = document.querySelector(
    ".todo-list__delete-last-button"
  ); // Получаем кнопку "Удалить последний элемент"
  const deleteFirstButton = document.querySelector(
    ".todo-list__delete-first-button"
  ); // Получаем кнопку "Удалить первый элемент"

  input.addEventListener("keyup", function (event) {
    if (event.key === "Enter" && input.value.trim() !== "") {
      addItem(input.value); // Добавляем задачу при нажатии Enter, если поле не пустое
      input.value = "";
    }
  });

  addButton.addEventListener("click", function () {
    if (input.value.trim() !== "") {
      addItem(input.value); // Добавляем задачу при клике на кнопку, если поле не пустое
      input.value = "";
    }
  });

  highlightButton.addEventListener("click", function () {
    const items = document.querySelectorAll(".todo-list__item");

    items.forEach(function (item, index) {
      if (index % 2 === 1) {
        item.classList.add("todo-list__item--highlighted"); // Выделяем чётные элементы
      } else {
        item.classList.remove("todo-list__item--highlighted"); // Снимаем выделение с нечётных элементов
      }
    });
  });

  highlightOddButton.addEventListener("click", function () {
    const items = document.querySelectorAll(".todo-list__item");

    items.forEach(function (item, index) {
      if (index % 2 === 0) {
        item.classList.add("todo-list__item--highlighted"); // Выделяем нечётные элементы
      } else {
        item.classList.remove("todo-list__item--highlighted"); // Снимаем выделение с чётных элементов
      }
    });
  });

  deleteLastButton.addEventListener("click", function () {
    const items = document.querySelectorAll(".todo-list__item");
    const lastItem = items[items.length - 1];

    if (lastItem) {
      itemList.removeChild(lastItem); // Удаляем последний элемент, если он существует
    }
  });

  deleteFirstButton.addEventListener("click", function () {
    const items = document.querySelectorAll(".todo-list__item");
    const firstItem = items[0];

    if (firstItem) {
      itemList.removeChild(firstItem); // Удаляем первый элемент, если он существует
    }
  });

  function addItem(text) {
    const listItem = document.createElement("li");
    listItem.className = "todo-list__item";

    const itemText = document.createElement("span");
    itemText.className = "todo-list__item-text";
    itemText.textContent = text;

    const completeButton = document.createElement("button");
    completeButton.className = "todo-list__complete-button";
    completeButton.textContent = "Complete"; // Создаем кнопку "Complete" по умолчанию

    const deleteButton = document.createElement("button");
    deleteButton.className = "todo-list__delete-button";
    deleteButton.textContent = "Удалить";

    deleteButton.addEventListener("click", function () {
      itemList.removeChild(listItem); // Удаляем задачу при нажатии кнопки "Удалить"
    });

    completeButton.addEventListener("click", function () {
      if (completeButton.textContent === "Complete") {
        itemText.classList.add("todo-list__item-text--completed"); // Зачеркиваем текст задачи
        completeButton.textContent = "Uncomplete"; // Меняем название кнопки на "Uncomplete"
      } else {
        itemText.classList.remove("todo-list__item-text--completed"); // Убираем зачеркивание текста
        completeButton.textContent = "Complete"; // Меняем название кнопки на "Complete"
      }
      itemList.appendChild(listItem); // Перемещаем задачу в конец списка
    });

    listItem.appendChild(itemText);
    listItem.appendChild(completeButton);
    listItem.appendChild(deleteButton);
    itemList.appendChild(listItem); // Добавляем задачу в список
  }
});
