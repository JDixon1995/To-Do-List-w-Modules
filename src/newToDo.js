
function newToDo() {

    function ToDo(title, description, dueDate, priority) {
        this.title = title,
        this.description = description,
        this.dueDate = dueDate,
        this.priority = priority
    };


    const titleInputValue = document.getElementById('titleInput').value;
    const descInputValue = document.getElementById('descInput').value;
    const dueDateInputValue = document.getElementById('dueDateInput').value;
    const priorityCheckValue = document.getElementById('priorityCheck').value;
 

    let newToDoObject = new ToDo(
        title = titleInputValue,
        description = descInputValue,
        dueDate = dueDateInputValue,
        priority = priorityCheckValue
    );
}

module.exports = { newToDo };