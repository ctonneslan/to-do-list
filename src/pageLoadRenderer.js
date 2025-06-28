import { buildPage } from "./dynamicHTML";
import { buildEditModal } from "./editModal";
import { setupProjectSelector } from "./projectSelector";
import { setEditModalElements } from "./todoListRenderer";
import { buildTodoModal } from "./todoModal";

export function pageLoadRender() {
  buildPage(); // build HTML structure
  buildTodoModal(); // build todo modal overlay for dynamic user input
  const editModalElements = buildEditModal();
  setEditModalElements(editModalElements);
  setupProjectSelector(); // set up project selector dropdown
}
