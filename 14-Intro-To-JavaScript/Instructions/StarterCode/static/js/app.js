// from data.js
var tableData = data;

// Select button
var button = d3.select("#filter-btn");

// Event listener
button.on("click", function(){
    
    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input field and then grab the date
    var input = d3.select(".form-control");
    var inputText = input.property("value");

    // Filter the data to only grab the sightings with the date provided
    var filteredData = tableData.filter(sighting => sighting.datetime === inputText);
 
    // Select the table body
    var tbody = d3.select("tbody");

    // Iterate through the object to populate the table    
    filteredData.forEach((ufoSighting) => {
        var row = tbody.append("tr");
        Object.entries(ufoSighting).forEach(([key, value]) => {
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
});


