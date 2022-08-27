const data = require("./data.json");


// Returns the mean effort of specific team in project
const meanEffortByTeamInProject = (projectName,team) => {

    const devRows = data.Sheet1.filter((row) => row.Team.includes(team));
    const devWorking = devRows.filter(row => row["Project Name"].includes(projectName));
    let hours = 0;
    devWorking.forEach(row => hours+=parseInt(row.Hours));
    const meanEffort = hours/devWorking.length;
    return meanEffort;
    //return meanEffort.toFixed(2); for upto 2 decimal places in answer
}

//You can get to know the mean effort spent by various teams on different projects by simply passing two parameters
// 1) Project Name and 2) Team
//Below shows example of few
console.log(meanEffortByTeamInProject("AAA","Design"));
console.log(meanEffortByTeamInProject("BBB","Dev"));
console.log(meanEffortByTeamInProject("CCC","Dev"));
console.log(meanEffortByTeamInProject("CCC","PM"));
console.log(meanEffortByTeamInProject("CCC","QA"));
console.log(meanEffortByTeamInProject("CCC","Design"));



