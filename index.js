const employee = {}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const copyOfEmployee = {...employee};
    copyOfEmployee[key] = value;
    return copyOfEmployee
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee
}
function deleteFromEmployeeByKey(employee, key) {
    const copyOfEmployee = {...employee}
    delete copyOfEmployee[key];
    return copyOfEmployee
}
function destructivelyDeleteFromEmployeeByKey(employee, key, value) {
    delete employee[key];
    return employee
}