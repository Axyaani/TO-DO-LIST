
let tasks = JSON.parse(localStorage.getItem('tasks')) || []; 

function addTask() {
    const taskInput = document.getElementById('taskInput');  
    const newTask = taskInput.value.trim();  

    if (newTask) {  
        tasks.push(newTask); 
        localStorage.setItem('tasks', JSON.stringify(tasks)); 
        taskInput.value = '';  
        displayTasks();  
    }
} 

function deleteTask(index) {
    tasks.splice(index, 1);  
    localStorage.setItem('tasks', JSON.stringify(tasks));  
    displayTasks(); 
}


function displayTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = ''; 

    tasks.forEach((task, index) => { 
        const li = document.createElement('li');
        li.innerHTML = `
            ${task} 
            <button class="delete" onclick="deleteTask(${index})">Delete</button>
        `;
        taskList.appendChild(li);
    });
}
displayTasks();
