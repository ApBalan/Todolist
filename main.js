//selecting  html elements
const toDoInput = document.querySelector('input');
const toDoButton = document.querySelector('button');
const toDoList = document.querySelector('ul');

toDoButton.addEventListener('click', function() {
    const input = toDoInput.value;
    toDoInput.value = '';

    const newToDoList = document.createElement('li');
    const newToDoSpan = document.createElement('span');
    const newToDoButton = document.createElement('button');

    newToDoList.appendChild(newToDoSpan);
    newToDoSpan.textContent = input;
    newToDoList.appendChild(newToDoButton);
    newToDoButton.textContent = 'Delete';
    toDoList.appendChild(newToDoList);

    newToDoButton.addEventListener('click', function() {
        toDoList.removeChild(newToDoList);
    });

    input.focus();

});