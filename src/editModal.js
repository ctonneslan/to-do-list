import { CURRENT_PROJECT, PROJECTS } from "./main";
import { removeTodo } from "./modifyTodos";
import { buildTodoModal } from "./todoModal";

// editModal.js
export function buildEditModal() {
  const editOverlay = document.createElement("div");
  editOverlay.id = "edit-modal-overlay";
  editOverlay.classList.add("modal-overlay");
  editOverlay.style.display = "none";

  const editBox = document.createElement("div");
  editBox.classList.add("modal");

  const closeBtn = document.createElement("span");
  closeBtn.classList.add("modal-close");
  closeBtn.textContent = "×";

  const title = document.createElement("h2");
  title.textContent = "Edit Todo";

  const form = document.createElement("form");
  form.id = "editForm";

  const titleInput = document.createElement("input");
  titleInput.name = "title";
  titleInput.required = true;
  titleInput.placeholder = "Title";
  titleInput.style.width = "100%";
  titleInput.style.marginTop = "10px";

  const descInput = document.createElement("textarea");
  descInput.name = "description";
  descInput.placeholder = "Description";
  descInput.rows = 4;
  descInput.style.width = "100%";
  descInput.style.marginTop = "10px";

  const dueDateInput = document.createElement("input");
  dueDateInput.name = "dueDate";
  dueDateInput.type = "date";
  dueDateInput.style.marginTop = "10px";
  dueDateInput.style.width = "100%";

  const importanceLabel = document.createElement("label");
  importanceLabel.style.display = "block";
  importanceLabel.style.marginTop = "10px";
  const importanceInput = document.createElement("input");
  importanceInput.type = "checkbox";
  importanceInput.name = "importance";
  importanceInput.style.marginRight = "6px";
  importanceLabel.append(importanceInput, "Important");

  const finishedLabel = document.createElement("label");
  finishedLabel.style.display = "block";
  finishedLabel.style.marginTop = "6px";
  const finishedInput = document.createElement("input");
  finishedInput.type = "checkbox";
  finishedInput.name = "finished";
  finishedInput.style.marginRight = "6px";
  finishedLabel.append(finishedInput, "Finished");

  const submitBtn = document.createElement("button");
  submitBtn.type = "submit";
  submitBtn.textContent = "Save Changes";
  submitBtn.style.marginTop = "12px";
  submitBtn.style.padding = "10px 18px";

  form.append(
    titleInput,
    descInput,
    dueDateInput,
    importanceLabel,
    finishedLabel,
    submitBtn
  );

  editBox.append(closeBtn, title, form);
  editOverlay.appendChild(editBox);
  document.body.appendChild(editOverlay);

  closeBtn.addEventListener("click", () => {
    editOverlay.style.display = "none";
  });

  editOverlay.addEventListener("click", (e) => {
    if (e.target === editOverlay) {
      editOverlay.style.display = "none";
    }
  });

  // Return the modal elements for external use
  return {
    overlay: editOverlay,
    form,
    inputs: {
      title: titleInput,
      description: descInput,
      dueDate: dueDateInput,
      importance: importanceInput,
      finished: finishedInput,
    },
  };
}
