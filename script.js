var count = 0;
var employee = [];

function addEmployee() {

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const employeeID = document.getElementById('employeeId').value;
    const roleValue = document.getElementById('role').value;
    const statusValue = document.getElementById('status').value;

    if (!firstName || !lastName || !employeeID || !roleValue || !statusValue) {
        alert("Fill everything up dumbass");
        return;
    }

    count++;

    let employeeObj = {
        ID: count,
        firstName: firstName,
        lastName: lastName,
        employeeId: employeeID,
        role: roleValue,
        status: statusValue
    };

    employee.push(employeeObj);

    showTable();

    document.querySelector("#submit").innerHTML = "+";
    document.getElementById('firstName').value = "";
    document.getElementById('lastName').value = "";
    document.getElementById('employeeId').value = "";
    document.getElementById('role').value = "";
    document.getElementById('status').value = "";
}

function showTable() {

    const table = document.getElementById('tbody');

    while(table.hasChildNodes()){
        table.removeChild(table.firstChild);
    }


    employee.forEach((employee) => {
        const row = document.createElement("tr");
        var ID = document.createElement("td");
        const fullName = document.createElement("td");
        const empID = document.createElement("td");
        const roleStat = document.createElement("td");
        const statusStat = document.createElement("td");

        ID.innerHTML = employee.ID;
        fullName.innerHTML = employee.firstName + " " + employee.lastName;
        empID.innerHTML = employee.employeeId;
        roleStat.innerHTML = employee.role;
        statusStat.innerHTML = employee.status;

        row.appendChild(ID);
        row.appendChild(fullName);
        row.appendChild(empID);
        row.appendChild(roleStat);
        row.appendChild(statusStat);

        table.appendChild(row);
    })

}