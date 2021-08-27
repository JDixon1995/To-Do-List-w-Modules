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
    }
];


function newToDo() {

    function ToDo(title, description, dueDate, priority) {
        this.title = title,
        this.description = description,
        this.dueDate = dueDate,
        this.priority = priority
    };


    const titleInputField = document.getElementById('titleInput');
    const descInputField = document.getElementById('descInput');
    const dueDateInputField = document.getElementById('dueDateInput');
    const priorityCheckField = document.getElementById('priorityCheck');
    
    let titleInputValue = titleInputField.value;
    let descInputValue = descInputField.value;
    let dueDateInputValue = dueDateInputField.value;
    let priorityCheckValue = priorityCheckField.value;

    let newToDoObject = new ToDo(
        title = titleInputValue,
        description = descInputValue,
        dueDate = dueDateInputValue,
        priority = priorityCheckValue
    );

    toDoObjectArray.push(newToDoObject);

    titleInputField.value = '';
    descInputField.value = '';
    dueDateInputField.value = '';

        console.log(toDoObjectArray);
}

function displayToDoObjectArray() {
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
        toDoPriority.innerText = 'Not Urgent';

        deleteButton.addEventListener('click', function() {
            toDo.closest('ul').remove();
        })

        toDo.appendChild(toDoTitle);
        toDo.appendChild(toDoDesc);
        toDo.appendChild(toDoDueDate);
        toDo.appendChild(toDoPriority);
        toDo.appendChild(deleteButton);

        projectDiv.appendChild(toDo);
    }
}

module.exports = { newToDo, displayToDoObjectArray };