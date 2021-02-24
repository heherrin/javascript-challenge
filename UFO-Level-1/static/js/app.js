// from data.js
var tableData = data;
//select buttons & date input
var button = d3.select("#filter-btn");
var dateinput = d3.select("#datetime");

//console.log data
console.log(tableData);

//select data
var aliensightings = d3.select("#ufo-table").select("tbody");

// populate table with sighting data
data.forEach((encounter) => {
    var row = aliensightings.append("tr");
    Object.entries(encounter).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

  

