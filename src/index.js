import _ from 'lodash';
import { generateForm, generatePage } from './generatePage.js';
import { displayToDoJSObjects, newToDo } from './displayToDoJSObjects.js';

generatePage();
generateForm();
displayToDoJSObjects();

submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', function() {
    newToDo();
})