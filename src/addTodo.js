import { TodoItem } from "./item";
import { projects } from "./main";

export function addTodoItem(title, description, date, important, finished) {
    const todo = new TodoItem(title, description, date, important, finished);
    projects.addTodoToProject(todo);
}