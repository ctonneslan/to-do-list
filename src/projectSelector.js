import { PROJECTS, CURRENT_PROJECT } from "./main";

export function setupProjectSelector() {
  const select = document.getElementById("project-select");
  if (!select) return;

  // Clear any previous options
  select.innerHTML = "";

  // Populate with project names
  for (const projectName in PROJECTS) {
    const option = document.createElement("option");
    option.value = projectName;
    option.textContent = projectName;

    if (projectName === CURRENT_PROJECT) {
      option.selected = true;
    }

    select.appendChild(option);
  }

  // Change listener to update current project
  select.addEventListener("change", (e) => {
    const newProject = e.target.value;
    setCurrentProject(newProject);
    todoRender(); // update the UI with the selected project's todos
  });
}
