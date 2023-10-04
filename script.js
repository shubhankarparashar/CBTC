document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTask');
    const taskList = document.getElementById('taskList');
    const completedList = document.getElementById('completedList');

    addTaskButton.addEventListener('click', function () {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            return;
        }

        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <button class="complete-button">Complete</button>
        `;

        taskList.appendChild(taskItem);
        taskInput.value = '';

        const completeButton = taskItem.querySelector('.complete-button');
        completeButton.addEventListener('click', function () {
            taskItem.remove();
            moveTaskToCompletedList(taskText);
        });
    });

    function moveTaskToCompletedList(taskText) {
        const completedItem = document.createElement('li');
        completedItem.innerText = taskText;
        completedList.appendChild(completedItem);
    }
});
