import { PROJECTS, setCurrentProject } from "./main";
import { todoRender } from "./todoListRenderer";

export function setupProjectSelector() {
  const select = document.getElementById("project-select");

  // Populate initial options
  function updateProjectOptions() {
    select.innerHTML = ""; // Clear existing
    Object.keys(PROJECTS).forEach((project) => {
      const option = document.createElement("option");
      option.value = project;
      option.textContent = project;
      select.appendChild(option);
    });
  }

  updateProjectOptions();

  // When a project is selected
  select.addEventListener("change", (e) => {
    setCurrentProject(e.target.value);
    todoRender();
  });

  // Handle new project click
  const newProjectBtn = document.querySelector(".new-project");
  if (newProjectBtn) {
    newProjectBtn.addEventListener("click", () => {
      const name = prompt("Enter a name for the new project:");
      if (!name || PROJECTS[name]) return;

      PROJECTS[name] = {};
      updateProjectOptions();
      select.value = name;
      setCurrentProject(name);
      todoRender();
    });
  }
}
