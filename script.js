document.getElementById('add-btn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    const taskList = document.getElementById('task-list');
    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';

    const taskContent = document.createElement('span');
    taskContent.textContent = taskText;
    taskItem.appendChild(taskContent);

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.addEventListener('click', function () {
        taskList.removeChild(taskItem);
    });

    deleteBtn.style.marginLeft = '65vw'; //  margin eka

    taskItem.appendChild(deleteBtn);
    taskList.appendChild(taskItem);

    taskInput.value = '';
    taskInput.focus();
}
