const input = document.getElementById("add-task");
const button = document.querySelector("button");
const taskList = document.getElementById("task-list");

function addTask() {
  if (input.value) {
    let newTask = document.createElement("div");
    newTask.classList.add("task");

    let text = document.createElement("p");
    text.innerText = input.value;
    newTask.appendChild(text);

    // create container of icons
    let icons = document.createElement("div");
    newTask.appendChild(icons);

    //create the icons
    let complete = document.createElement("i");
    complete.classList.add("bi", "bi-check-circle-fill", "icon-complete");
    complete.addEventListener('click', completeTask)

    let eliminate = document.createElement("i");
    eliminate.classList.add("bi", "bi-trash-fill", "icon-delete");
    eliminate.addEventListener('click', eliminateTask);

    //adding the icons
   
    icons.append(complete, eliminate);

    //listing new task
    taskList.appendChild(newTask)
  } else {
    alert('Please add a new task')
  }
}

function completeTask (e) {
    let task= e.target.parentNode.parentNode 
    task.classList.toggle('completed')

}

function eliminateTask (e) {
    let task = e.target.parentNode.parentNode;
    task.remove()
} 

button.addEventListener('click', addTask)
input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        addTask()
    }
})
