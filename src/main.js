import { pageLoadRender } from "./pageLoadRenderer";
import "./styles.css";

export const PROJECTS = { default: {} };
export const CURRENT_PROJECT = "default";

document.addEventListener("DOMContentLoaded", () => {
  pageLoadRender();
});
