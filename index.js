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
    const tBody = document.getElementById("tbBody");
    tBody.innerHTML = "";
    for (let task of taskList) {
        const row = document.createElement("tr");
        for (let key of ["tName", "tCat", "tDeadline", "tStatus"]) {
            const rowCell = document.createElement("td");
            rowCell.textContent = task[key];
            row.appendChild(rowCell);
        }
    tBody.appendChild(row);
    }
}
function fliterTaskByCategory(){
    const searchItem = document.getElementById("searchInput").value;
    const tBody = document.getElementById("tbBody");
    tBody.innerHTML = "";
    let i = 0;
    for (let task of taskList) {
        let tCatName = taskList[i].tCat;
         if(tCatName.includes(searchItem)){
            const row = document.createElement("tr");
            for (let key of ["tName", "tCat", "tDeadline", "tStatus"]) {
                const rowCell = document.createElement("td");
                rowCell.textContent = task[key];
                row.appendChild(rowCell);
            }
            tBody.appendChild(row);
         }
         i++;
    }
}

function fliterTaskByName(){
    const searchItem = document.getElementById("searchInput").value;
    const tBody = document.getElementById("tbBody");
    tBody.innerHTML = "";
    let i = 0;
    for (let task of taskList) {
        let tTaskName = taskList[i].tName;
         if(tTaskName.includes(searchItem)){
            const row = document.createElement("tr");
            for (let key of ["tName", "tCat", "tDeadline", "tStatus"]) {
                const rowCell = document.createElement("td");
                rowCell.textContent = task[key];
                row.appendChild(rowCell);
            }
            tBody.appendChild(row);
         }
         i++;
    }
}







