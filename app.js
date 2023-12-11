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
    //creates li remove and completed elements
    const listItem = document.createElement("li");
    const removeBtn = document.createElement("button");
    const completedBtn = document.createElement("button");
    //creates class names and element text
    completedBtn.className = "completed-button";
    completedBtn.innerHTML = "Completed Button";
    removeBtn.className = "remove-button";
    removeBtn.innerHTML = "Remove Button";
    //checks if list item description is is pending or completed
    listItem.textContent = `${task.description} (${
      task.completed ? "Completed" : "Pending"
    })`;
    //removes list item
    removeBtn.addEventListener("click", (index) => {
      const confirmDel = confirm("Are you sure you want to delete this task");
      if (confirmDel) {
        tasks.splice(index, 1);
        displayTasks();
      }
    });
    //marks list item completed
    completedBtn.addEventListener("click", () => {
      task.markCompleted();
      displayTasks();
    });
    listItem.appendChild(completedBtn);
    listItem.appendChild(removeBtn);
    taskList.appendChild(listItem);
  });
}
const confirmDelete = () => {
  const confirmDel = prompt("Are you sure you want to delete this task");
  if (confirmDel) {
  }
};
// function removeTask() {
//   removeBtn.splice(tasks.length - 1);
//   displayTasks();
// }
