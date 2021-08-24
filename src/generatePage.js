
const toDoObjectArray = [];
const projectArray1 = [];

function generatePage() {
    contentDiv = document.getElementById('content');

    mainDiv = document.createElement('div');
    mainDiv.innerText = 'What do you need to do, today?';
    mainDiv.id = 'mainDiv';
    projectDiv = document.createElement('div');
    projectDiv.innerText = 'Current Projects';
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

    submitButton = document.createElement('button');
    submitButton.innerText = 'Submit';
    submitButton.id = 'submitButton';
    submitButton.type = 'submit';

    inputForm.appendChild(titleInput);
    inputForm.appendChild(descInput);
    inputForm.appendChild(dueDateInput);
    inputForm.appendChild(priorityCheck);
    mainDiv.appendChild(submitButton);
    mainDiv.appendChild(inputForm);


    submitButton.addEventListener('click', function() {
        
    })
}

module.exports = { generatePage, generateForm };