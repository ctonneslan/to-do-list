import { addTodo } from "./modifyTodos";

export function buildTodoModal() {
  // create modal overlay
  const modalOverlay = document.createElement("div");
  modalOverlay.classList.add("modal-overlay");
  modalOverlay.style.display = "none";

  // create modal box
  const modalBox = document.createElement("div");
  modalBox.classList.add("modal");

  // close button
  const closeBtn = document.createElement("span");
  closeBtn.classList.add("modal-close");
  closeBtn.textContent = "x";

  // modal title
  const modalTitle = document.createElement("h2");
  modalTitle.textContent = "Add a new todo";

  // input form inside modal
  const form = document.createElement("form");
  form.id = "todoForm";

  // title input
  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.placeholder = "Title";
  titleInput.name = "title";
  titleInput.required = true;
  titleInput.style.width = "100%";
  titleInput.style.padding = "8px";
  titleInput.style.marginTop = "10px";

  // description textarea
  const descInput = document.createElement("textarea");
  descInput.placeholder = "Description";
  descInput.name = "description";
  descInput.rows = 4;
  descInput.style.width = "100%";
  descInput.style.padding = "8px";
  descInput.style.marginTop = "10px";

  // due date input
  const dueDateInput = document.createElement("input");
  dueDateInput.type = "date";
  dueDateInput.name = "dueDate";
  dueDateInput.style.marginTop = "10px";
  dueDateInput.style.padding = "8px";
  dueDateInput.style.width = "100%";

  // important checkbox
  const importanceLabel = document.createElement("label");
  importanceLabel.style.display = "block";
  importanceLabel.style.marginTop = "10px";
  const importanceInput = document.createElement("input");
  importanceInput.type = "checkbox";
  importanceInput.name = "importance";
  importanceInput.style.marginRight = "6px";
  importanceLabel.appendChild(importanceInput);
  importanceLabel.appendChild(document.createTextNode("Important"));

  // finished checkbox
  const finishedLabel = document.createElement("label");
  finishedLabel.style.display = "block";
  finishedLabel.style.marginTop = "6px";
  const finishedInput = document.createElement("input");
  finishedInput.type = "checkbox";
  finishedInput.name = "finished";
  finishedInput.style.marginRight = "6px";
  finishedLabel.appendChild(finishedInput);
  finishedLabel.appendChild(document.createTextNode("Finished"));

  // submit button
  const submitBtn = document.createElement("button");
  submitBtn.type = "submit";
  submitBtn.textContent = "Add todo";
  submitBtn.style.marginTop = "12px";
  submitBtn.style.padding = "10px 18px";

  // Build form first
  form.append(
    titleInput,
    descInput,
    dueDateInput,
    importanceLabel,
    finishedLabel,
    submitBtn
  );

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const todoData = {
      title: form.title.value.trim(),
      description: form.description.value.trim(),
      dueDate: form.dueDate.value, // string in YYYY-MM-DD or empty
      importance: form.importance.checked, // true/false
      finished: form.finished.checked, // true/false
    };
    addTodo(
      todoData.title,
      todoData.description,
      todoData.dueDate,
      todoData.importance,
      todoData.finished
    );
    form.reset();
    modalOverlay.style.display = "none";
  });

  // Build modal
  modalBox.append(closeBtn, modalTitle, form);
  modalOverlay.appendChild(modalBox);
  document.body.appendChild(modalOverlay);

  const newTodo = document.querySelector(".add-todo");
  newTodo.addEventListener("click", () => {
    modalOverlay.style.display = "flex";
  });

  closeBtn.addEventListener("click", () => {
    modalOverlay.style.display = "none";
  });

  // Close modal if clicking outside the modal box
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
      modalOverlay.style.display = "none";
    }
  });
}
