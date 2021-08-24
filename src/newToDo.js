import { ToDo } from './toDoGeneration.js';

function newToDo() {
    const titleInputValue = document.getElementById('titleInput').value;
    const descInputValue = document.getElementById('descInput').value;
    const dueDateInputValue = document.getElementById('dueDateInput').value;
    const priorityCheckValue = document.getElementById('priorityCheck').value;

    const newToDoObject = new ToDo;  

    newToDoObject = {
        title = titleInputValue,
        description = descInputValue,
        dueDate = dueDateInputValue,
        priority = priorityCheckValue
    };
}

module.exports = { newToDo };