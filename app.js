document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskInput');
    const addButton = document.getElementById('addButton');
    const taskList = document.getElementById('taskList');
    let taskCount = 1;

    addButton.addEventListener('click', addTask);
    taskList.addEventListener('click', deleteTask);

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${taskCount}. ${taskText}</span>
                <span class="delete-btn">&#10006;</span>
            `;
            taskList.appendChild(li);
            taskInput.value = '';
            taskCount++;
        }
    }

    function deleteTask(e) {
        if (e.target.classList.contains('delete-btn')) {
            const li = e.target.closest('li');
            taskList.removeChild(li);
        }
    }
});
