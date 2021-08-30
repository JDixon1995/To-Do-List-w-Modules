const toDoObjectArray = [
    {
        "title": "Wash Laundry",
        "description": "They're piling up",
        "dueDate": "08-28-21",
        "priority": false
    },
    {
        "title":"Pay Rent",
        "description": "It's due.",
        "dueDate": "09-01-21",
        "priority": true
    },
    {
        "title": "Wash Car",
        "description": "It's getting dirty",
        "dueDate":"09-07-21",
        "priority": false
    },
    {
        "title": "Sort Book Collection",
        "description": "It's messy",
        "dueDate": "10-01-21",
        "priority": false
    }
];

function displayToDoJSObjects() {
    const projectDiv = document.getElementById('projectDiv');

    for(let i = 0; i < toDoObjectArray.length; i++) {

        let toDo = document.createElement('ul');
        let toDoTitle = document.createElement('li');
        let toDoDesc = document.createElement('li');
        let toDoDueDate = document.createElement('li');
        let toDoPriority = document.createElement('li');
        let deleteButton = document.createElement('button');

        toDo.className = 'todo-item';

        toDoTitle.innerText = toDoObjectArray[i].title;
        toDoDesc.innerText = toDoObjectArray[i].description;
        toDoDueDate.innerText = toDoObjectArray[i].dueDate;
        toDoPriority.innerText = 'Not Urgent.';
        deleteButton.innerText = 'X';

        deleteButton.addEventListener('click', function() {
            toDo.closest('ul').remove();
        })

        toDo.appendChild(deleteButton);
        toDo.appendChild(toDoTitle);
        toDo.appendChild(toDoDesc);
        toDo.appendChild(toDoDueDate);
        toDo.appendChild(toDoPriority);

        projectDiv.appendChild(toDo);
    }
}

function newToDo() {

    function ToDo(title, description, dueDate, priority) {
        this.title = title,
        this.description = description,
        this.dueDate = dueDate,
        this.priority = priority
    };

    const projectDiv = document.getElementById('projectDiv');
    const titleInputField = document.getElementById('titleInput');
    const descInputField = document.getElementById('descInput');
    const dueDateInputField = document.getElementById('dueDateInput');
    const priorityCheckField = document.getElementById('priorityCheck');
    let toDo = document.createElement('ul');
    let toDoTitle = document.createElement('li');
    let toDoDesc = document.createElement('li');
    let toDoDueDate = document.createElement('li');
    let toDoPriority = document.createElement('li');
    let deleteButton = document.createElement('button');

        toDo.className = 'todo-item';

        toDoTitle.innerText = titleInputField.value;
        toDoDesc.innerText = descInputField.value;
        toDoDueDate.innerText = dueDateInputField.value;
        toDoPriority.innerText = 'Not Urgent.';
        deleteButton.innerText = 'X';

        deleteButton.addEventListener('click', function() {
            toDo.closest('ul').remove();
        })

        toDo.appendChild(deleteButton);
        toDo.appendChild(toDoTitle);
        toDo.appendChild(toDoDesc);
        toDo.appendChild(toDoDueDate);
        toDo.appendChild(toDoPriority);
        projectDiv.appendChild(toDo);

    let newToDoObject = new ToDo(
        title = titleInputField.value,
        description = descInputField.value,
        dueDate = dueDateInputField.value,
        priority = priorityCheckField.value
    );

    toDoObjectArray[toDoObjectArray.length] = newToDoObject;

    titleInputField.value = '';
    descInputField.value = '';
    dueDateInputField.value = '';

}


module.exports = { displayToDoJSObjects, newToDo };