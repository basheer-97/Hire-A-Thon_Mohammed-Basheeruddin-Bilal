const data = require("./data.json");

// Returns 5 employees with lowest efficiency
// efficiency = working hours of specific employee
const lowestEffieciencyEmp = () => {

    const listOfEmp = [];

    data.Sheet1.forEach(row => {
        if(!listOfEmp.includes(row.Owner)){
            listOfEmp.push(row.Owner);
        }
    });

    //console.log(listOfEmp);

    const empHours = [];
    listOfEmp.forEach(row => {
        empHours.push({
            empName : row,
            efficiency: noOfWorkingHours(row),
        });
    });

    return empHours;

}

// helper function: returns no. of working hours of particular emp
const noOfWorkingHours = (employee) => {

    let hours = 0;
    const empHours = data.Sheet1.filter(row => row.Owner.includes(employee));
    empHours.forEach(row => hours+=parseInt(row.Hours));
    return hours;

};

const compare = ( a, b ) => {
    if ( a.efficiency < b.efficiency ){
      return -1;
    }
    if ( a.efficiency > b.efficiency ){
      return 1;
    }
    return 0;
}

// returns lowest efficiency
const lowestUtil = (noOfRows) => {
    
    const empHours = lowestEffieciencyEmp();
    const temp = empHours.sort(compare);
    const lowesteff = temp.slice(0,noOfRows);
    return lowesteff;

}

console.log(lowestUtil(5));