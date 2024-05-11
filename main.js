const newInput = document.querySelector("#new-task");
const taskLists = document.querySelector("#tasks");
const checkLists = document.querySelector("#checkList");
const taskCount = document.querySelector(".task-count");
const donePAr = document.querySelector(".done-par");
const taskPar = document.querySelector(".task-par");
const checkCount = document.querySelector(".check-count");

const addNewTask = () => {
  if (newInput.value == "") {
    alert("please add a task");
    return;
  }
  
  const newTaskInfo = newInput.value;

  const newTask = document.createElement("div");
  newTask.classList.add("task");

  const taskInfo = document.createElement("p");
  taskInfo.classList.add("task-info");

  const actions = document.createElement("div");
  actions.classList.add("actions");

  const checkAction = document.createElement("img");
  checkAction.src = "images/check.png";
  checkAction.alt = "check";

  const revertAction = document.createElement("img");
  revertAction.src = "images/revert.png";
  revertAction.alt = "revert";
  

  //ADDING EVENT LISTENER TO CHECK BUTTON
  checkAction.addEventListener("click", () => {
    taskInfo.style.textDecoration = "line-through";

    donePAr.style.display = "block";

    actions.removeChild(checkAction);
    actions.removeChild(deleteAction);

    // const revertAction = document.createElement("img");
    // revertAction.src = "images/revert.png";
    // revertAction.alt = "revert";

    actions.appendChild(revertAction);

    taskLists.removeChild(newTask);

    checkLists.appendChild(newTask);

    const count = taskLists.getElementsByClassName("task").length;
    taskCount.innerHTML = count;

    const newCount = checkLists.getElementsByClassName("task").length;
    checkCount.innerHTML = newCount;

    if(taskCount.innerHTML==0){
        taskPar.style.display = "none"
      }else{
        taskPar.style.display = "block";
      }
    
  });

  revertAction.addEventListener("click", () => {
    taskInfo.style.textDecoration = "none";
    actions.removeChild(revertAction);
    actions.appendChild(checkAction);
    actions.appendChild(deleteAction);

    checkLists.removeChild(newTask);
    taskLists.appendChild(newTask);

    const count = taskLists.getElementsByClassName("task").length;
    taskCount.innerHTML = count;

    const newCount = checkLists.getElementsByClassName("task").length;
    checkCount.innerHTML = newCount;

    if (newCount == 0) {
      donePAr.style.display = "none";
    }
    if(taskCount.innerHTML==0){
        taskPar.style.display = "none"
      }else{
        taskPar.style.display = "block";
      }
  });

  const deleteAction = document.createElement("img");
  deleteAction.src = "images/delete.png";
  deleteAction.alt = "delete";

  //ADDING EVENT LISTENER TO DELETE BUTTON
  deleteAction.addEventListener("click", () => {
    taskLists.removeChild(newTask);

    const count = taskLists.getElementsByClassName("task").length;
    taskCount.innerHTML = count;

    if(taskCount.innerHTML==0){
        taskPar.style.display = "none"
      }else{
        taskPar.style.display = "block";
      }

  });

  taskInfo.innerHTML = newTaskInfo;
  actions.appendChild(checkAction);
  actions.appendChild(deleteAction);
  newTask.appendChild(taskInfo);
  newTask.appendChild(actions);
  taskLists.appendChild(newTask);

  const count = taskLists.getElementsByClassName("task").length;
  taskCount.innerHTML = count;

  if(taskCount.innerHTML==0){
    taskPar.style.display = "none"
  }else{
    taskPar.style.display = "block";
  }
  
  newInput.value = "";
};
