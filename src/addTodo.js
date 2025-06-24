import { TodoItem } from "./item";

export function addTodo(title, description, date, important, finished) {
    const todo = new TodoItem(title, description, date, important, finished);
}