// editProjects.js

import { projects } from "./main.js"; // import your projects object

let projectModalOverlay, projectInput, projectCreateBtn, projectCloseBtn;

export function initProjectModal() {
  // Create modal elements
  projectModalOverlay = document.createElement("div");
  projectModalOverlay.classList.add("modal-overlay");
  projectModalOverlay.style.display = "none";

  const projectModalBox = document.createElement("div");
  projectModalBox.classList.add("modal");

  projectCloseBtn = document.createElement("span");
  projectCloseBtn.classList.add("modal-close");
  projectCloseBtn.textContent = "x";

  const projectModalTitle = document.createElement("h2");
  projectModalTitle.textContent = "Create New Project";

  projectInput = document.createElement("input");
  projectInput.type = "text";
  projectInput.placeholder = "Project name";
  projectInput.style.width = "100%";
  projectInput.style.padding = "8px";
  projectInput.style.marginTop = "10px";

  projectCreateBtn = document.createElement("button");
  projectCreateBtn.textContent = "Create";
  projectCreateBtn.style.marginTop = "12px";
  projectCreateBtn.style.padding = "10px 18px";

  projectModalBox.append(
    projectCloseBtn,
    projectModalTitle,
    projectInput,
    projectCreateBtn
  );
  projectModalOverlay.appendChild(projectModalBox);
  document.body.appendChild(projectModalOverlay);

  // Event listeners
  projectCloseBtn.addEventListener("click", closeProjectModal);
  projectModalOverlay.addEventListener("click", (e) => {
    if (e.target === projectModalOverlay) closeProjectModal();
  });
  projectCreateBtn.addEventListener("click", addProjectHandler);
}

export function openProjectModal() {
  projectModalOverlay.style.display = "flex";
  projectInput.focus();
}

function closeProjectModal() {
  projectModalOverlay.style.display = "none";
  projectInput.value = "";
}

function addProjectHandler() {
  const name = projectInput.value.trim();
  if (!name) {
    alert("Project name cannot be empty.");
    return;
  }
  if (projects[name]) {
    alert("Project already exists.");
    return;
  }

  // Add project
  projects[name] = [];

  // Update the <select> dropdown
  const select = document.getElementById("project-select");
  if (select) {
    const option = document.createElement("option");
    option.value = name;
    option.textContent = name;
    select.appendChild(option);
  }

  closeProjectModal();
}
