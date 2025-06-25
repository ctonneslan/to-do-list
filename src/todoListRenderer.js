import { projects } from "./main";
import { format, isValid } from "date-fns";
import { openEditModal } from "./editModal";

export function todoRender(tab) {
  const card = document.querySelector('.card');
  if (!card) return;

  card.innerHTML = '';

  const todos = projects.getProjectTodos(tab);
  todos.forEach(todo => {
    const div = document.createElement('div');
    div.classList.add('todo');

    const title = document.createElement('div');
    title.classList.add('todo-title');
    title.textContent = todo.title;

    const desc = document.createElement('div');
    desc.classList.add('todo-description');
    desc.textContent = todo.description || 'No description';

    const footer = document.createElement('div');
    footer.classList.add('todo-footer');

    const due = document.createElement('div');
    due.textContent = isValid(todo.dueDate) ? format(todo.dueDate, 'PP') : 'No due date';

    const status = document.createElement('div');
    status.textContent = todo.finished ? '✅ Done' : (todo.important ? '⭐ Important' : '');

    const edit = document.createElement('div');
    edit.textContent = 'Edit ✍️';
    edit.classList.add('edit-todo');

    edit.addEventListener('click', () => {
        openEditModal(todo);
    });

    footer.appendChild(due);
    footer.appendChild(status);

    div.append(title, desc, edit, footer);
    card.appendChild(div);
  });
}