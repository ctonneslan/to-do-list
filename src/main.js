import { pageLoadRender } from "./pageLoadRenderer";
import "./styles.css";

export const PROJECTS = { Default: {} };
export const CURRENT_PROJECT = "Default";

export function setCurrentProject(project) {
  CURRENT_PROJECT = project;
}

document.addEventListener("DOMContentLoaded", () => {
  pageLoadRender();
});
