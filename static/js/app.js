// from data.js
var tableData = data;


// YOUR CODE HERE!
//Capturing the two pieces of the HTML we will need.
var tbody = d3.select("tbody");

var button = d3.select("#filter-btn");


// Function that will handle what happens when you FilterTable Button.

function handleclick(){

    //Prevent the page from refreshing
    d3.event.preventDefault();

    //Looks at the values that are added to the filter.

    let date = d3.select('#datetime').property("value");
    let city = d3.select('#city').property("value");
    let state = d3.select('#state').property("value");
    let country = d3.select('#country').property("value");
    let shape = d3.select('#shape').property("value");
    
    //Creates a variable that will take our data and run it through our filters.
    let filterDate = data;

    //This is our filters
    if (date){
        filterDate = filterDate.filter((UFOData) => {
            return UFOData.datetime == date;
        });
    
    };
    if (city){
        filterDate = filterDate.filter((UFOData) => {
            return UFOData.city == city;
        });
    
    };
    if (state){
        filterDate = filterDate.filter((UFOData) => {
            return UFOData.state == state;
        });
    
    };
    if (country){
        filterDate = filterDate.filter((UFOData) => {
            return UFOData.country == country;
        });
    
    };
    if (shape){
        filterDate = filterDate.filter((UFOData) => {
            return UFOData.shape == shape;
        });
    
    };

    //This will refresh the page and not just paste the data to the end of the table.
    tbody.html("")
    buildTable(filterDate);
};

//Function to build the table.
function buildTable(data) {
    data.forEach((UFOData) => {
        var row = tbody.append("tr");
        Object.values(UFOData).forEach((value) => {
            row.append("td").text(value);
        });
    });
};

buildTable(tableData);

//Clicking on the button will allow you to filter the data.
button.on("click",handleclick);
