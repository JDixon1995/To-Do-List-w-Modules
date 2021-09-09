import _ from 'lodash';
import { generateForm, generatePage, generateProjectForm } from './generatePage.js';
import { displayToDoJSObjects, newToDo } from './displayToDoJSObjects.js';

generatePage();
generateForm();
generateProjectForm();
displayToDoJSObjects();

submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', function() {
    newToDo();
})