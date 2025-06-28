import { pageLoadRender } from "./pageLoadRenderer";
import "./styles.css";
import { restoreTodoMethods } from "./utils"; // You’ll create this next

export let PROJECTS = loadProjectsFromStorage() || { Default: {} };
export let CURRENT_PROJECT = "Default";

export function setCurrentProject(project) {
  CURRENT_PROJECT = project;
}

export function saveProjectsToStorage() {
  localStorage.setItem("todo-projects", JSON.stringify(PROJECTS));
  console.log("Saved to localStorage:", PROJECTS);
}

function loadProjectsFromStorage() {
  const stored = localStorage.getItem("todo-projects");
  if (!stored) return null;
  const parsed = JSON.parse(stored);
  return restoreTodoMethods(parsed); // Ensure methods are reattached
}

document.addEventListener("DOMContentLoaded", () => {
  pageLoadRender();
});
