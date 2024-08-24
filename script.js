// Function to save tasks to local storage
function saveTasksToLocalStorage(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to load tasks from local storage
function loadTasksFromLocalStorage() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskList = document.getElementById("task-list");

    tasks.forEach(function(task) {
        const li = document.createElement("li");
        li.textContent = task.text; // Access task.text

        if (task.completed) {
            li.classList.add('completed-task'); // Mark completed tasks visually
        }

        // Event listener to toggle the task completion status
        li.addEventListener("click", function() {
            li.classList.toggle('completed-task');
            task.completed = !task.completed;

            // Save updated tasks to local storage
            saveTasksToLocalStorage(tasks);
        });

        taskList.appendChild(li);
    });
}

// Event listener for adding a new task
document.getElementById("add-task-button").addEventListener("click", function() {
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Create a new task object with completion status
    const newTask = {
        text: taskInput.value,
        completed: false
    };

    // Add the new task to the list
    const li = document.createElement("li");
    li.textContent = newTask.text;

    // Event listener to toggle the task completion status
    li.addEventListener("click", function() {
        li.classList.toggle('completed-task');
        newTask.completed = !newTask.completed;

        // Save updated tasks to local storage
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(newTask);
        saveTasksToLocalStorage(tasks);
    });

    taskList.appendChild(li);

    // Save the new task to local storage
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(newTask);
    saveTasksToLocalStorage(tasks);

    // Clear the input field
    taskInput.value = "";
});

// Load tasks when the page loads
window.addEventListener('load', loadTasksFromLocalStorage);
