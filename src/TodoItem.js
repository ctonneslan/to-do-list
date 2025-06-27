export class TodoItem {
  constructor(
    title,
    description = "",
    dueDate = null,
    important = false,
    finished = false
  ) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.important = important;
    this.finished = finished;
  }

  toggleImportant() {
    this.important = !this.important;
  }

  toggleFinished() {
    this.finished = !this.finished;
  }
}
