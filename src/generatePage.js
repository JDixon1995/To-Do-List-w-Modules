const projectArray1 = [];

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

    mainDiv.appendChild(inputForm);
    mainDiv.appendChild(submitButton);

}

module.exports = { generatePage, generateForm };