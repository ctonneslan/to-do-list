import { CURRENT_PROJECT, PROJECTS } from "./main.js";
import { removeTodo } from "./modifyTodos.js";
import { openEditModal } from "./openEditModal.js"; // path as appropriate

// Import or get reference to the modal elements (assumes it was created once)
let modalElements;

export function setEditModalElements(elements) {
  modalElements = elements;
}

export function todoRender() {
  const card = document.querySelector(".card");
  card.innerHTML = "";

  const todos = PROJECTS[CURRENT_PROJECT];
  if (!todos) return;

  let index = 1;

  for (const id in todos) {
    const todo = todos[id];

    const todoItem = document.createElement("div");
    todoItem.classList.add("todo-item");
    todoItem.setAttribute("data-id", id);

    todoItem.innerHTML = `
      <div class="todo-grid-row">
        <span class="todo-number">${index++}.</span>
        <span class="todo-title">${todo.title}</span>
        <button class="edit-btn">✎</button>
        <button class="delete-btn">✕</button>
      </div>
      <div class="todo-details" style="display:none;">
        <p><strong>Description:</strong> ${
          todo.description || "No description"
        }</p>
        <p><strong>Due Date:</strong> ${todo.dueDate || "None"}</p>
        <p><strong>Important:</strong> ${todo.important ? "Yes" : "No"}</p>
        <p><strong>Finished:</strong> ${todo.finished ? "Yes" : "No"}</p>
      </div>
    `;

    // Toggle expand/collapse on row click but not buttons
    const gridRow = todoItem.querySelector(".todo-grid-row");
    const details = todoItem.querySelector(".todo-details");

    gridRow.addEventListener("click", (e) => {
      if (e.target.tagName.toLowerCase() === "button") return;
      details.style.display =
        details.style.display === "none" ? "block" : "none";
    });

    // Delete button
    todoItem.querySelector(".delete-btn").addEventListener("click", () => {
      removeTodo(id);
      todoRender();
    });

    // Edit button — use our shared modal
    todoItem.querySelector(".edit-btn").addEventListener("click", () => {
      openEditModal(modalElements, id, todoRender);
    });

    card.appendChild(todoItem);
  }
}
