import { CURRENT_PROJECT, PROJECTS } from "./main";
import { isThisWeek, isToday, parseISO } from "date-fns";

export function filterTodos(filter) {
  const todos = PROJECTS[CURRENT_PROJECT];
  let filteredTodos = {};
  console.log(filter);
  switch (filter) {
    case "Inbox":
      filteredTodos = todos;
      break;

    case "Today":
      for (const id in todos) {
        const todo = todos[id];
        if (todo.dueDate && isToday(parseISO(todo.dueDate))) {
          filteredTodos[id] = todo;
        }
      }
      break;

    case "This Week":
      console.log("here");
      for (const id in todos) {
        const todo = todos[id];
        if (todo.dueDate && isThisWeek(parseISO(todo.dueDate))) {
          filteredTodos[id] = todo;
        }
      }
      break;

    case "Important":
      for (const id in todos) {
        const todo = todos[id];
        if (todo.important) {
          filteredTodos[id] = todo;
        }
      }
      break;

    case "Finished":
      for (const id in todos) {
        const todo = todos[id];
        if (todo.finished) {
          filteredTodos[id] = todo;
        }
      }
      break;

    default:
      filteredTodos = todos;
  }

  return filteredTodos;
}
