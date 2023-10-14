const taskList = document.getElementById("taskList");

function createTaskElement(taskText) {
    const li = document.createElement("li");
    li.innerHTML = `
        <span>${taskText}</span>
        <span class="edit">Edit</span>
        <span class="delete">Delete</span>
    `;

    li.querySelector(".delete").addEventListener("click", function() {
        li.remove();
    });

    li.querySelector(".edit").addEventListener("click", function() {
        const updatedText = prompt("Edit task:", taskText);
        if (updatedText !== null) {
            li.querySelector("span").textContent = updatedText;
        }
    });

    return li;
}

function addTask() {
    const taskText = document.getElementById("task").value;
    if (taskText.trim() === "") {
        alert("Task cannot be empty!");
        return;
    }

    const taskElement = createTaskElement(taskText);
    taskList.appendChild(taskElement);
    document.getElementById("task").value = "";
}

document.getElementById("add").addEventListener("click", addTask);

document.getElementById("task").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
