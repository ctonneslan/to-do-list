export class TodoItem {
    constructor (title, description = '', dueDate = null, important = false, finished = false) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate ? new Date(dueDate) : null;
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