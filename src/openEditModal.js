import { CURRENT_PROJECT, PROJECTS } from "./main.js";
import { todoRender } from "./todoListRenderer.js";

export function openEditModal(modalElements, todoId, onSaveCallback) {
  const { overlay, form, inputs } = modalElements;
  const todo = PROJECTS[CURRENT_PROJECT][todoId];
  if (!todo) return;

  // Populate modal inputs
  inputs.title.value = todo.title;
  inputs.description.value = todo.description;
  inputs.dueDate.value = todo.dueDate || "";
  inputs.importance.checked = todo.important;
  inputs.finished.checked = todo.finished;

  // Remove previous submit listener if any to prevent duplicates
  form.onsubmit = null;

  form.onsubmit = (e) => {
    e.preventDefault();
    todo.title = inputs.title.value.trim();
    todo.description = inputs.description.value.trim();
    todo.dueDate = inputs.dueDate.value;
    todo.important = inputs.importance.checked;
    todo.finished = inputs.finished.checked;

    overlay.style.display = "none";

    if (typeof onSaveCallback === "function") {
      onSaveCallback();
    }
    todoRender(document.querySelector(".main-header").textContent);
  };

  overlay.style.display = "flex";
}
