function generatePage() {
    contentDiv = document.getElementById('content');

    header = document.createElement('h1');
    header.innerText = 'To Do List';
    contentDiv.appendChild(header);
    mainDiv = document.createElement('div');
    mainDiv.id = 'mainDiv';
    projectHeader = document.createElement('h5');
    projectHeader.innerText = 'Current Project';
    projectDiv = document.createElement('div');
    projectDiv.id = 'projectDiv';


    contentDiv.appendChild(mainDiv);
    contentDiv.appendChild(projectDiv);
}

function generateForm() {
    mainDiv = document.getElementById('mainDiv');

    newTaskDiv = document.createElement('div');
    newTaskDiv.id = 'newTaskDiv';

    textDiv = document.createElement('div');
    textDiv.id = 'textDiv';
    titleText = document.createElement('h5');
    titleText.innerText = 'Title';
    descriptionText = document.createElement('h5');
    descriptionText.innerText = 'Description';
    dueDateText = document.createElement('h5');
    dueDateText.innerText = 'Due Date';
    priorityText = document.createElement('h5');
    priorityText.innerText = 'Urgent?';

    textDiv.appendChild(titleText);
    textDiv.appendChild(descriptionText);
    textDiv.appendChild(dueDateText);
    textDiv.appendChild(priorityText);

    mainDiv.appendChild(textDiv);

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

    submitButton = document.createElement('button');
    submitButton.innerText = 'Submit';
    submitButton.id = 'submitButton';
    submitButton.type = 'submit';

    inputForm.appendChild(titleInput);
    inputForm.appendChild(descInput);
    inputForm.appendChild(dueDateInput);
    inputForm.appendChild(priorityCheck);

    newTaskDiv.appendChild(textDiv);
    newTaskDiv.appendChild(inputForm);
    newTaskDiv.appendChild(submitButton);

    mainDiv.appendChild(newTaskDiv);

}

function generateProjectForm() {
    mainDiv = document.getElementById('mainDiv');

    newProjectDiv = document.createElement('div');
    newProjectDiv.id = 'newProjectDiv';

    projectFormDiv = document.createElement('div');
    projectFormDiv.id = 'projectFormDiv';
    projectInputForm = document.createElement('form');
    projectInputForm.id = 'projectInputForm';
    newProjectInput = document.createElement('input');
    newProjectInput.id = 'newProjectInput';
    newProjectDueDateInput = document.createElement('input');
    newProjectDueDateInput.type = 'date';
    projectInputForm.appendChild(newProjectInput);
    projectInputForm.appendChild(newProjectDueDateInput);

    projectTextDiv = document.createElement('div');
    projectTextDiv.id = 'projectTextDiv';
    projectText = document.createElement('h5');
    projectText.innerText = 'New Project';
    projectDueDate = document.createElement('h5');
    projectDueDate.innerText = 'Project Due Date';

    projectSubmitButton = document.createElement('button');
    projectSubmitButton.innerText = 'Submit Project';
    projectSubmitButton.id = 'projectSubmitButton';

    projectTextDiv.appendChild(projectText);
    projectTextDiv.appendChild(projectDueDate);

    projectFormDiv.appendChild(projectTextDiv);
    projectFormDiv.appendChild(projectInputForm);

    newProjectDiv.appendChild(projectTextDiv);
    newProjectDiv.appendChild(projectInputForm);
    newProjectDiv.appendChild(projectSubmitButton);

    mainDiv.appendChild(newProjectDiv);
}

module.exports = { generatePage, generateForm, generateProjectForm};