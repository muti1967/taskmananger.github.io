// JavaScript code for adding tasks
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const dueDateInput = document.getElementById('dueDateInput');
    const colorInput = document.getElementById('colorInput');
    const taskList = document.querySelector('#taskList ul');

    // Create a new list item
    const newTask = document.createElement('li');
    newTask.draggable = true;
    newTask.innerHTML = `
        <div class="task-content" style="color: ${colorInput.value};">
            ${taskInput.value}
            <span>Due: ${dueDateInput.value}</span>
        </div>
        <div class="task-actions">
            <div class="task-color" style="background-color: ${colorInput.value};"></div>
            <button onclick="removeTask(this.parentNode.parentNode)">Remove</button>
        </div>
    `;

    // Append the new task to the task list
    taskList.appendChild(newTask);

    // Clear the input fields
    taskInput.value = '';
    dueDateInput.value = '';
}

// JavaScript code for removing tasks
function removeTask(taskNode) {
    const taskList = document.querySelector('#taskList ul');
    taskList.removeChild(taskNode);
}

// JavaScript code for reorganizing tasks
function reorganizeTasks() {
    const taskList = document.querySelector('#taskList ul');
    const tasks = Array.from(taskList.children);

    // Sort tasks by due date
    tasks.sort((a, b) => {
        const dateA = new Date(a.querySelector('span').textContent.replace('Due: ', ''));
        const dateB = new Date(b.querySelector('span').textContent.replace('Due: ', ''));
        return dateA - dateB;
    });

    // Clear the task list
    taskList.innerHTML = '';

    // Append sorted tasks to the task list
    tasks.forEach(task => {
        taskList.appendChild(task);
    });
}

// JavaScript code for navigating to the about page
document.getElementById('aboutLink').addEventListener('click', function () {
    window.location.href = 'about.html';
});

// Code for creating an interactive calendar
const calendarContainer = document.getElementById('calendar');

function createCalendar() {
    // ... (existing code)
}

createCalendar(); // Call the function to initialize the calendar
// JavaScript code for navigating to the about page
document.getElementById('aboutLink').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default link behavior
    window.location.href = 'about.html';
});
