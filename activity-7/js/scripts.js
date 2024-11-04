// Array to hold tasks
var tasks = [];

//Tast Status Enumerator
var taskStatus = {
    active: 'active',
    completed: 'completed'
};

//Tast Constructor
function Task (id, name, status) {
    this.id = id;
    this.name = name;
    this.status = status;
}

// Create new task element and add it to the DOM
function addTaskElement (task) {
    // Create Elements
    var listEl = document.getElementById('active-list');
    var taskEl = document.createElement('li');
    var textEl = document.createTextNode(task.name);

    //set attributes
    taskEl.setAttribute('id', task.id);

    // add text to task element
    taskEl.appendChild(textEl);

    // Add task Element to list
    listEl.appendChild(taskEl);
}

//click handler to add new task
function addTask (event) {
    var inputEl = document.getElementById('input-task');
    if (inputEl.value != '') {
        //create unique id
        var id = 'item-' + tasks.length;

        // create new task
        var task = new Task(id, inputEl.value, taskStatus.active);
        tasks.push(task);

        //add task to DOM
        addTaskElement(task);

        // Reset Input
        inputEl.value = '';
    }
}

// Click handlet to complete a task
function completeTask (event) {
    //get task element
    var taskEl = event.target;
    var id = taskEl.id;

    //find corresponding task in tasks array, uodate status
    for (var i = 0; i < tasks.length; i++) {
        if (tasks[i].id === id) {
            tasks[i].status = taskStatus.completed;
            break;
        }
    }

    //move task element from active list to completed list
    taskEl.remove();
    document.getElementById('completed-list').appendChild(taskEl);
}

function clickButton (event) {
    if (event.keycode === 13) {
        document.getElementById('add-task').click();
    }
}

//Initialize the app
function init () {
    //add task click handler
    document.getElementById('add-task').onclick = addTask;

    //task completed list click handlet
    document.getElementById('active-list').onclick = completeTask;

    // task input key press handler
    document.getElementById('input-task').onkeypress = clickButton;
}

init();