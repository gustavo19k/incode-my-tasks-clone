document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.querySelector('.task-input');
    const taskSubmit = document.querySelector('.task-submit');
    const taskList = document.querySelector('.task-list ul');
    const taskClear = document.querySelector('.task-clear');

    function addTask() {
        if (taskInput.value.trim() !== '') {
            const newTask = document.createElement('li');
            newTask.textContent = taskInput.value;
            const checkButton = document.createElement('button');
            checkButton.textContent = '✓';
            checkButton.addEventListener('click', function () {
                newTask.style.textDecoration = 'line-through';
            });
            newTask.appendChild(checkButton);
            taskList.appendChild(newTask);
            taskInput.value = '';
        }
    }

    taskSubmit.addEventListener('click', addTask);


    taskInput.addEventListener('keypress', function (eventKeyboard) {
        if (eventKeyboard.key === 'Enter') {
            addTask();
        }
    });


    taskClear.addEventListener('click', function () {
        while (taskList.firstChild) {
                taskList.removeChild(taskList.firstChild);
            }
    });
});