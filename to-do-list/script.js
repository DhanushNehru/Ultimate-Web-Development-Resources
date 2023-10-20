document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('task');
    const addTaskButton = document.getElementById('addTask');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', function () {
        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            const date = new Date();
            const dateTimeString = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;

            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <span class="task-number">${taskList.childElementCount + 1}.</span>
                <span>${taskText}</span>
                <span class="timestamp">${dateTimeString}</span>
                <button class="delete-button">Delete</button>
            `;

            taskList.appendChild(listItem);

            taskInput.value = ''; // Clear the input field

            // Attach a click event listener to the delete button
            const deleteButton = listItem.querySelector('.delete-button');
            deleteButton.addEventListener('click', function () {
                taskList.removeChild(listItem);
                updateTaskNumbers(); // Update task numbers after deletion
            });
        }
    });

    // Function to update task numbers
    function updateTaskNumbers() {
        const taskNumbers = taskList.querySelectorAll('.task-number');
        taskNumbers.forEach((number, index) => {
            number.textContent = `${index + 1}.`;
        });
    }
});