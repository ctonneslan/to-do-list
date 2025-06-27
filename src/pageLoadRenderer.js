import { buildPage } from "./dynamicHTML";
import { buildTodoModal } from "./todoModal";

export function pageLoadRender() {
  buildPage(); // build HTML structure
  buildTodoModal(); // build todo modal overlay for dynamic user input
}
