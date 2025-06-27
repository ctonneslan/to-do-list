import { CURRENT_PROJECT, PROJECTS } from "./main";
import { removeTodo } from "./modifyTodos";
import { buildEditModal } from "./editModal";

export function todoRender(tab) {
  const card = document.querySelector(".card");
  card.innerHTML = "";

  const todos = PROJECTS[CURRENT_PROJECT];
  if (!todos) return;

  let index = 1;

  for (const id in todos) {
    const todo = todos[id];

    // Main row
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
      <div class="todo-details">
        <p><strong>Description:</strong> ${
          todo.description || "No description"
        }</p>
        <p><strong>Due Date:</strong> ${todo.dueDate || "None"}</p>
        <p><strong>Important:</strong> ${todo.important ? "Yes" : "No"}</p>
        <p><strong>Finished:</strong> ${todo.finished ? "Yes" : "No"}</p>
      </div>
    `;

    // Toggle expand/collapse
    const gridRow = todoItem.querySelector(".todo-grid-row");
    const details = todoItem.querySelector(".todo-details");

    details.style.display = "none";

    gridRow.addEventListener("click", (e) => {
      // Prevent button clicks from toggling the details
      if (e.target.tagName.toLowerCase() === "button") return;
      details.style.display =
        details.style.display === "none" ? "block" : "none";
    });

    // Delete button
    todoItem.querySelector(".delete-btn").addEventListener("click", () => {
      const id = todoItem.getAttribute("data-id");
      removeTodo(id);
      todoRender(); // re-render list
    });

    card.appendChild(todoItem);
  }
}
