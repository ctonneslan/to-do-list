import { buildEditModal } from "./editModal.js";
import { CURRENT_PROJECT, PROJECTS, saveProjectsToStorage } from "./main.js";
import { TodoItem } from "./TodoItem.js";
import { todoRender } from "./todoListRenderer.js";

export function addTodo(title, description, date, important, finished) {
  const todo = new TodoItem(title, description, date, important, finished);
  PROJECTS[CURRENT_PROJECT][todo.id] = todo;
  saveProjectsToStorage();
  todoRender(document.querySelector(".main-header").textContent);
  buildEditModal(todo.id);
}

export function removeTodo(id) {
  delete PROJECTS[CURRENT_PROJECT][id];
  saveProjectsToStorage();
}
