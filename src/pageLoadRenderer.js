import { buildPage } from "./dynamicHTML";
import { setupProjectSelector } from "./projectSelector";
import { buildTodoModal } from "./todoModal";

export function pageLoadRender() {
  buildPage(); // build HTML structure
  buildTodoModal(); // build todo modal overlay for dynamic user input
  setupProjectSelector(); // set up project selector dropdown
}
