var TodoList = /** @class */ (function () {
    function TodoList() {
        this.tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    }
    TodoList.prototype.addTask = function (task) {
        this.tasks.push(task);
        this.saveTasks();
        this.render();
    };
    TodoList.prototype.render = function () {
        var todoListElement = document.getElementById('todo-list');
        if (todoListElement) {
            todoListElement.innerHTML = '';
            var ulElement_1 = document.createElement('ul');
            this.tasks.forEach(function (task) {
                var liElement = document.createElement('li');
                liElement.innerHTML = "\n                    <strong>".concat(task.title, "</strong><br>\n                    Description: ").concat(task.description, "<br>\n                    Due Date: ").concat(task.dueDate, "<br>\n                    Priority: ").concat(task.priority, "\n                ");
                ulElement_1.appendChild(liElement);
            });
            todoListElement.appendChild(ulElement_1);
        }
        else {
            console.error("Element with ID 'todo-list' not found.");
        }
    };
    TodoList.prototype.saveTasks = function () {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    };
    return TodoList;
}());
document.addEventListener('DOMContentLoaded', function () {
    var addButton = document.getElementById('add-button');
    if (addButton) {
        // Add event listener for the "Add Task" button
        addButton.addEventListener('click', function () {
            addTask();
        });
    }
    else {
        console.error('Button element with ID "add-button" not found.');
    }
});
function addTask() {
    var taskInput = document.getElementById('task-input');
    var descriptionInput = document.getElementById('description-input');
    var dueDateInput = document.getElementById('duedate-input');
    var priorityInput = document.getElementById('priority-input');
    var taskTitle = taskInput.value.trim(); // Trim whitespace
    if (taskTitle !== '') {
        var todoList = new TodoList();
        var newTask = {
            title: taskTitle,
            description: descriptionInput.value.trim(),
            dueDate: dueDateInput.value,
            priority: priorityInput.value,
            completed: false
        };
        todoList.addTask(newTask);
        // Clear input fields after adding the task
        taskInput.value = '';
        descriptionInput.value = '';
        dueDateInput.value = '';
        priorityInput.value = 'Low';
    }
    else {
        alert('Please enter a task.'); // Show alert if input field is empty
    }
}
