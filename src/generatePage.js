function generatePage() {
    contentDiv = document.getElementById('content');

    mainDiv = document.createElement('div');
    mainDiv.innerText = 'Main Div';
    mainDiv.id = 'mainDiv';
    projectDiv = document.createElement('div');
    projectDiv.innerText = 'Project Div';
    projectDiv.id = 'projectDiv';


    contentDiv.appendChild(mainDiv);
    contentDiv.appendChild(projectDiv);
}

function generateForm() {
    mainDiv = document.getElementById('mainDiv');

    inputForm = document.createElement('form');
    inputForm.id = 'inputForm';

    titleInput = document.createElement('input');
    titleInput.id = 'titleInput';
    titleInput.type = 'text';
    
    descInput = document.createElement('input');
    descInput.id = 'descInput';
    descInput.type = 'text';
    descInput.innerText = 'Description';
    
    dueDateInput = document.createElement('input');
    dueDateInput.id = 'dueDateInput';
    dueDateInput.type = 'date';
    dueDateInput.innerText = 'Due Date';

    priorityCheck = document.createElement('input');
    priorityCheck.id = 'priorityCheck';
    priorityCheck.type = 'checkbox';
    priorityCheck.innerHTML = 'Urgent?';

    inputForm.appendChild(titleInput);
    inputForm.appendChild(descInput);
    inputForm.appendChild(dueDateInput);
    inputForm.appendChild(priorityCheck);
    mainDiv.appendChild(inputForm);

}

module.exports = { generatePage, generateForm };