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

  // Create event handlers 
button.on("click", runEnter);
dateinput.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  

  var filteredData = tableData.filter(tableData => tableData.dateinput === inputValue);

  console.log(filteredData);

}

