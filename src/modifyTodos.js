import { buildEditModal } from "./editModal.js";
import { CURRENT_PROJECT, PROJECTS } from "./main.js";
import { TodoItem } from "./TodoItem.js";
import { todoRender } from "./todoListRenderer.js";

export function addTodo(title, description, date, important, finished) {
  const todo = new TodoItem(title, description, date, important, finished);
  PROJECTS[CURRENT_PROJECT][todo.id] = todo;
  const mainHeader = document.querySelector(".main-header");
  todoRender(mainHeader.textContent);
}

export function removeTodo(id) {
  delete PROJECTS[CURRENT_PROJECT][id];
  const mainHeader = document.querySelector(".main-header");
  todoRender(mainHeader.textContent);
}
