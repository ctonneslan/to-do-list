import { TodoItem } from "./TodoItem";

export function restoreTodoMethods(projects) {
  for (const project in projects) {
    const todos = projects[project];
    for (const id in todos) {
      const old = todos[id];
      const restored = new TodoItem(
        old.title,
        old.description,
        old.dueDate,
        old.important,
        old.finished
      );
      restored.id = id;
      todos[id] = restored;
    }
  }
  return projects;
}
