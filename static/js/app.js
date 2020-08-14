// from data.js
var tableData = data;


// YOUR CODE HERE!
var tbody = d3.select("tbody");

var button = d3.select("#filter-btn");

button.on("click",handleclick);

function handleclick(){
    var inputField = d3.select('.form-control');
    console.log("a button was clicked!");
    console.log(d3.event.target);
    console.log(`the input field is: ${inputField}`);
}

//inputField.on("change", function() {
//    var newText = d3.event.target.value;
//    console.log(newText);
//});

//var filterDate = data.filter(function(UFOData){
//    return UFOData.datetime === newText;
//});

data.forEach(function(UFOData){
    var row = tbody.append("tr");
    Object.values(UFOData).forEach(function(value){
        row.append("td").text(value);
    });
});