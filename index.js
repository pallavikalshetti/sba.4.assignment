const taskList = [];

function addNewTask(){
    const taskName = document.getElementById("taskName").value;
    const taskCat = document.getElementById("taskCat").value;
    const taskDeadline = document.getElementById("taskDeadline").value;
    const taskStatus = document.getElementById("taskStatus").value;
    taskList.push({
        tName: taskName,
        tCat: taskCat,
        tDeadline: taskDeadline,
        tStatus: taskStatus
    })
    document.getElementById("successMsg").textContent = "Task added successfully!";
}

function displayTaskList() {
    const resultTaskList = document.getElementById("taskResult");
    resultTaskList.innerHTML = "";
    for (let i = 0; i < taskList.length; i++) {
        const createNewRow = document.createElement("tr");
        for (let key of ["tName", "tCat", "tDeadline", "tStatus"]) {
            const createCol = document.createElement("td");
            createCol.textContent = taskList[i][key];
            createNewRow.appendChild(createCol);
        }        
        resultTaskList.appendChild(createNewRow);
    }
}

function fliterTaskByCategory(){
    const searchItem = document.getElementById("searchInput").value;
    const resultTaskList = document.getElementById("taskResult");
    resultTaskList.innerHTML = "";
    for (let i = 0; i < taskList.length; i++) {
        let tCatName = taskList[i].tCat;
         if(tCatName.includes(searchItem)){
            const createNewRow = document.createElement("tr");
            for (let key of ["tName", "tCat", "tDeadline", "tStatus"]) {
                const createCol = document.createElement("td");
                createCol.textContent = taskList[i][key];
                createNewRow.appendChild(createCol);
            }
            resultTaskList.appendChild(createNewRow);
         }
    }
}

function fliterTaskByName(){
    const searchItem = document.getElementById("searchTaskName").value;
    const resultTaskList = document.getElementById("taskResult");
    resultTaskList.innerHTML = "";
    for (let i = 0; i < taskList.length; i++) {
        let tTaskName = taskList[i].tName;
        if(tTaskName.includes(searchItem)){
            const createNewRow = document.createElement("tr");
            for (let key of ["tName", "tCat", "tDeadline", "tStatus"]) {
                const createCol = document.createElement("td");
                createCol.textContent = taskList[i][key];
                createNewRow.appendChild(createCol);
            }
             resultTaskList.appendChild(createNewRow);
        }
    }
}