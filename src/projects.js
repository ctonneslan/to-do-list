import { isToday, isThisWeek } from "date-fns";

class Projects {
  constructor() {
    this.projects = { untitled: [] };
    this.current_project = "untitled";
  }

  getProjectTodos(tab) {
    // Define special tabs that filter all todos
    const specialTabs = [
      "📨 Inbox",
      "📆 Today",
      "🗓️ This Week",
      "☆ Important",
      "✅ Finished",
      "All",
    ];

    if (specialTabs.includes(tab)) {
      // Gather all todos across all projects into one array
      const allTodos = Object.values(this.projects).flat();

      return allTodos.filter((todo) => {
        switch (tab) {
          case "📨 Inbox":
          case "All":
            return true; // all todos
          case "📆 Today":
            return todo.dueDate && isToday(new Date(todo.dueDate));
          case "🗓️ This Week":
            return todo.dueDate && isThisWeek(new Date(todo.dueDate));
          case "☆ Important":
            return todo.important;
          case "✅ Finished":
            return todo.finished;
          default:
            return false;
        }
      });
    } else if (this.projects[tab]) {
      // Return todos for a specific project tab
      return this.projects[tab];
    } else {
      // Unknown tab or project, return empty array
      return [];
    }
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

export { Projects };
