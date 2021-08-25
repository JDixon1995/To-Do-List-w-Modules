
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

    titleInputField.value = '';
    descInputField.value = '';
    dueDateInputField.value = '';

        console.log(newToDoObject);
}

module.exports = { newToDo };