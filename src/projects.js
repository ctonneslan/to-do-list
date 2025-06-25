import { isToday, isThisWeek } from "date-fns";

class Projects {
    constructor() {
        this.projects = {'untitled' : []};
        this.current_project = 'untitled';
    }

    getProjectTodos(tab) {
        const filtered = this.projects[this.current_project].filter(todo => {
            switch (tab) {
                case 'inbox':
                    return true
                case 'today':
                    return todo.dueDate && isToday(todo.dueDate);
                case 'week':
                    return todo.dueDate && isThisWeek(todo.dueDate);
                case 'important':
                    return todo.important;
                case 'finished':
                    return todo.finished;
                default:
                    false;
            }
        });
        return filtered;
    }

    setCurrentProject(project) {
        this.current_project = project;
    }

    addNewProject(new_project) {
        this.projects[new_project] = [];
    }

    addTodoToProject(todo) {
        this.projects[this.current_project].push(todo);
    }
}

export { Projects } 