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
let tasks = [];

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const description = taskInput.value.trim();

  if (description !== "") {
    const taskId = tasks.length + 1;
    const newTask = new Task(taskId, description);
    tasks.push(newTask);
    displayTasks();
    taskInput.value = "";
  }
}

function displayTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks.forEach((task) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${task.description} (${
      task.completed ? "Completed" : "Pending"
    })`;
    listItem.addEventListener("click", () => {
      task.markCompleted();
      displayTasks();
    });
    taskList.appendChild(listItem);
  });
}
