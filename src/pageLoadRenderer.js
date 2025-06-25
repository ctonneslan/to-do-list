import { projects } from "./main";
import { todoRender } from "./todoListRenderer";
import { addTodoItem } from "./addTodo";

export function pageLoadRender() {
    // add header
    const header = document.querySelector('header');
    header.classList.add('header')
    const title = document.createElement('h1');
    title.textContent = '☑️ Todo List';
    header.appendChild(title);

    // add main section (sidebar and main content)
    const section = document.querySelector('section');
    section.classList.add('section');

    // build sidebar
    const sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');
    const list = document.createElement('ul');
    list.classList.add('list');
    // inbox
    const inbox = document.createElement('li');
    const inboxContent = document.createElement('span');
    inboxContent.textContent = '📨 Inbox'
    inboxContent.classList.add('item-content');
    inbox.appendChild(inboxContent);
    // today
    const today = document.createElement('li');
    const todayContent = document.createElement('span');
    todayContent.textContent = '📆 Today'
    todayContent.classList.add('item-content');
    today.appendChild(todayContent);
    // week
    const week = document.createElement('li');
    const weekContent = document.createElement('span');
    weekContent.textContent = '🗓️ This Week'
    weekContent.classList.add('item-content');
    week.appendChild(weekContent);
    // important
    const important = document.createElement('li');
    const importantContent = document.createElement('span');
    importantContent.textContent = '☆ Important'
    importantContent.classList.add('item-content');
    important.appendChild(importantContent);
    // finished
    const finished = document.createElement('li');
    const finishedContent = document.createElement('span');
    finishedContent.textContent = '✅ Finished'
    finishedContent.classList.add('item-content');
    finished.appendChild(finishedContent);
    // new project
    const newProject = document.createElement('li');
    const newProjectContent = document.createElement('span');
    newProjectContent.textContent = 'New Project 📝'
    newProjectContent.classList.add('item-content');
    newProject.appendChild(newProjectContent);

    list.append(inbox, today, week, important, finished, newProject);
    sidebar.appendChild(list);

    // build main
    const main = document.createElement('div');
    main.classList.add('main');
    const mainContent = document.createElement('div');
    mainContent.classList.add('main-content');
    main.appendChild(mainContent);
    const mainHeader = document.createElement('h1');
    mainHeader.classList.add('main-header');
    mainHeader.textContent = 'Inbox';
    mainContent.appendChild(mainHeader);
    const mainCard = document.createElement('div');
    mainCard.classList.add('card');
    const newTodo = document.createElement('div');
    newTodo.textContent = 'Add Todo ⊕'
    newTodo.classList.add('add-todo');
    mainContent.appendChild(newTodo);
    mainContent.appendChild(mainCard);

    section.append(sidebar, main);

    // create modal overlay
    const modalOverlay = document.createElement('div');
    modalOverlay.classList.add('modal-overlay');
    modalOverlay.style.display = 'none';

    // create modal box
    const modalBox = document.createElement('div');
    modalBox.classList.add('modal');

    // close button
    const closeBtn = document.createElement('span');
    closeBtn.classList.add('modal-close');
    closeBtn.textContent = 'x';

    // modal title
    const modalTitle = document.createElement('h2');
    modalTitle.textContent = 'Add a new todo';

    // input form inside modal
    const form = document.createElement('form');
    form.id = 'todoForm';

    // title input
    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.placeholder = 'Title';
    titleInput.name = 'title';
    titleInput.required = true;
    titleInput.style.width = '100%';
    titleInput.style.padding = '8px';
    titleInput.style.marginTop = '10px';

    // description textarea
    const descInput = document.createElement('textarea');
    descInput.placeholder = 'Description';
    descInput.name = 'description';
    descInput.rows = 4;
    descInput.style.width = '100%';
    descInput.style.padding = '8px';
    descInput.style.marginTop = '10px'

    // due date input
    const dueDateInput = document.createElement('input');
    dueDateInput.type = 'date';
    dueDateInput.name = 'dueDate';
    dueDateInput.style.marginTop = '10px';
    dueDateInput.style.padding = '8px';
    dueDateInput.style.width = '100%';

    // important checkbox
    const importanceLabel = document.createElement('label');
    importanceLabel.style.display = 'block';
    importanceLabel.style.marginTop = '10px';
    const importanceInput = document.createElement('input');
    importanceInput.type = 'checkbox';
    importanceInput.name = 'importance';
    importanceInput.style.marginRight = '6px';
    importanceLabel.appendChild(importanceInput);
    importanceLabel.appendChild(document.createTextNode('Important'));

    // finished checkbox
    const finishedLabel = document.createElement('label');
    finishedLabel.style.display = 'block';
    finishedLabel.style.marginTop = '6px';
    const finishedInput = document.createElement('input');
    finishedInput.type = 'checkbox';
    finishedInput.name = 'finished';
    finishedInput.style.marginRight = '6px';
    finishedLabel.appendChild(finishedInput);
    finishedLabel.appendChild(document.createTextNode('Finished'));

    // submit button
    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.textContent = 'Add todo';
    submitBtn.style.marginTop = '12px';
    submitBtn.style.padding = '10px 18px';

    // Build form first
    form.append(titleInput, descInput, dueDateInput, importanceLabel, finishedLabel, submitBtn);

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // prevent page reload

        const formData = new FormData(form);
        const title = formData.get('title');
        const description = formData.get('description');
        const dueDate = formData.get('dueDate');
        const importance = formData.get('importance') === 'on'; // checkbox
        const finished = formData.get('finished') === 'on';     // checkbox

        const todoData = { title, description, dueDate, importance, finished };
       
        addTodoItem(todoData.title, todoData.description, todoData.dueDate, todoData.importance, todoData.finished);
        todoRender('inbox');

        form.reset();
        modalOverlay.style.display = 'none';
    });

    // Build modal
    modalBox.append(closeBtn, modalTitle, form);
    modalOverlay.appendChild(modalBox);
    document.body.appendChild(modalOverlay);

    newTodo.addEventListener('click', () => {
        modalOverlay.style.display = 'flex';
    });

    closeBtn.addEventListener('click', () => {
        modalOverlay.style.display = 'none';
    });

    // Close modal if clicking outside the modal box
    modalOverlay.addEventListener('click', e => {
        if (e.target === modalOverlay) {
            modalOverlay.style.display = 'none';
        }
    });
}