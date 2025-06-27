export function buildPage() {
  // add header
  const header = document.querySelector("header");
  header.classList.add("header");
  const title = document.createElement("h1");
  title.textContent = "☑️ Todo List";
  header.appendChild(title);

  // add main section (sidebar and main content)
  const section = document.querySelector("section");
  section.classList.add("section");

  // build sidebar
  const sidebar = document.createElement("div");
  sidebar.classList.add("sidebar");
  const list = document.createElement("ul");
  list.classList.add("list");

  // inbox
  const inbox = document.createElement("li");
  const inboxContent = document.createElement("span");
  inboxContent.textContent = "📨 Inbox";
  inboxContent.classList.add("item-content");
  inbox.appendChild(inboxContent);

  // today
  const today = document.createElement("li");
  const todayContent = document.createElement("span");
  todayContent.textContent = "📆 Today";
  todayContent.classList.add("item-content");
  today.appendChild(todayContent);

  // week
  const week = document.createElement("li");
  const weekContent = document.createElement("span");
  weekContent.textContent = "🗓️ This Week";
  weekContent.classList.add("item-content");
  week.appendChild(weekContent);

  // important
  const important = document.createElement("li");
  const importantContent = document.createElement("span");
  importantContent.textContent = "☆ Important";
  importantContent.classList.add("item-content");
  important.appendChild(importantContent);

  // finished
  const finished = document.createElement("li");
  const finishedContent = document.createElement("span");
  finishedContent.textContent = "✅ Finished";
  finishedContent.classList.add("item-content");
  finished.appendChild(finishedContent);

  // new project
  const newProject = document.createElement("li");
  const newProjectContent = document.createElement("span");
  newProjectContent.textContent = "New Project 📝";
  newProjectContent.classList.add("item-content");
  newProject.appendChild(newProjectContent);

  // current project / selector
  const selector = document.createElement("div");
  selector.classList.add("project-selector");
  selector.innerHTML = `<label for="project-select">Current Project:</label>
                        <select id="project-select"></select>`;

  list.append(inbox, today, week, important, finished, newProject, selector);
  sidebar.appendChild(list);

  // build main
  const main = document.createElement("div");
  main.classList.add("main");
  const mainContent = document.createElement("div");
  mainContent.classList.add("main-content");
  main.appendChild(mainContent);
  const mainHeader = document.createElement("h1");
  mainHeader.textContent = "Inbox";
  mainContent.appendChild(mainHeader);
  const mainCard = document.createElement("div");
  mainCard.classList.add("card");
  const newTodo = document.createElement("div");
  newTodo.textContent = "Add Todo ⊕";
  newTodo.classList.add("add-todo");
  mainContent.appendChild(newTodo);
  mainContent.appendChild(mainCard);

  section.append(sidebar, main);
}
