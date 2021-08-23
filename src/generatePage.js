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
    descInput = document.createElement('input');
    descInput.id = 'descInput';
    dueDateInput = document.createElement('input');
    dueDateInput.id = 'dueDateInput';

    inputForm.appendChild(titleInput);
    inputForm.appendChild(descInput);
    inputForm.appendChild(dueDateInput);
    mainDiv.appendChild(inputForm);

}

module.exports = { generatePage, generateForm };