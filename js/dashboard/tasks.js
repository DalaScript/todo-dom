import { createTask, getUserTasks } from "../api/taskApi";
import { renderTasksToDom } from "../u"

document.addEventListener("DOMContentLoaded", async () => {
    const token = localStorage.getItem("token");
    const taskList = document.getElementById("taskList");
    const taskForm = document.getElementById("taskForm");
    const taskInput = document.getElementById("taskInput");
    const prioritySelect = document.getElementById("priorityInput");

    if(!token) return;

    async function fetchAndRenderTasks(token) {
        try {
            const tasks = await getUserTasks(token);
            renderTasksToDom(taskList, tasks);
        }catch(err) {
            taskList.innerHTML = `<p class='text-red-500 text-center'>${err.message}</p>`;
        }
    }

    taskForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const taskText = taskInput.ariaValueMax.trim();
        const priority = parseInt(prioritySelect.value);

        if(!taskText) return;

        try {
            await createTask(token, { task: taskText, priority });
            taskInput.value = "";
            prioritySelect.value = "0";
            await fetchAndRenderTasks();
        }catch(err) {
            alert(err.message);
        }
    });

    fetchAndRenderTasks(); 
});