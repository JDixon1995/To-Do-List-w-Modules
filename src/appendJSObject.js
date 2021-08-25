function appendJSObject() {
    const projectDiv = document.getElementById('projectDiv');

    projectDiv.appendChild(toDoObjectArray);
}

module.exports = { appendJSObject };