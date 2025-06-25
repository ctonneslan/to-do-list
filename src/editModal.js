import { TodoItem } from './item';
import { projects } from './main';
import { todoRender } from './todoListRenderer';

export function openEditModal(todo) {
  const modalOverlay = document.querySelector('.modal-overlay');
  const modalBox = document.querySelector('.modal');
  const form = document.querySelector('#todoForm');
  const modalTitle = modalBox.querySelector('h2');
  const mainHeaderText = document.querySelector('.main-header')?.textContent?.trim().toLowerCase() || 'inbox';

  modalTitle.textContent = 'Edit Todo';
    modalOverlay.style.display = 'flex';

    // Pre-fill the form
    form.title.value = todo.title;
    form.description.value = todo.description;
    form.dueDate.value = todo.dueDate;
    form.importance.checked = todo.important;
    form.finished.checked = todo.finished;

    // Remove all previous submit listeners
    const clonedForm = form.cloneNode(true);
    form.replaceWith(clonedForm);

    // Rebind modal event listeners on new cloned form
    clonedForm.onsubmit = (e) => {
        e.preventDefault();

        // Remove old todo
        const todos = projects.projects[projects.current_project];
        projects.projects[projects.current_project] = todos.filter(t => t.id !== todo.id);

        // Add updated todo
        const updated = new TodoItem(
            clonedForm.title.value,
            clonedForm.description.value,
            clonedForm.dueDate.value,
            clonedForm.importance.checked,
            clonedForm.finished.checked
        );

        projects.addTodoToProject(updated);
        modalOverlay.style.display = 'none';
        todoRender(document.querySelector('.main-header').textContent.trim().toLowerCase());
    };

    modalBox.replaceChild(clonedForm, modalBox.querySelector('form'));
};
