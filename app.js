document.addEventListener("DOMContentLoaded", displayTasks);
class Task {
  constructor(id, description) {
    this.id = id;
    this.description = description;
    this.completed = false;
  }

  markCompleted() {
    this.completed = true;
  }
}
