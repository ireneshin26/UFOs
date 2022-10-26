// Import the data from data.js
const tableData = data;

// Point data to the HTML page using D3. Tell JS to look for <tbody< tags in the HTML
var tbody = d3.select("tbody");

// Create buildTable function and clear the existing data
function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");
  
    // Added an argument dataRow that will represent each row of the datat as we iterate through the array.
    data.forEach((dataRow) => {

      // Create a variable that will append a row to the table body. Telling JS to find the <tbody> tag within the HTML and add a table row “tr”.       
      let row = tbody.append("tr");
  
      // Add code to loop through each field in the dataRow argument. These fields will become table data and will be wrapped in <td> tags when they’re appended in the HTML table. Then tell JS to reference one object from the array of UFO sightings. forEach((val)) specifies that we want one object per row.
      Object.values(dataRow).forEach((val) => {
        // Append each value of the object to a cell in the table. Create a variable to append data to a table data tag. 
        let cell = row.append("td");
        // This extracts only the text of the value.
        cell.text(val);
        }
      );
    });
  }

// Create new function to filter the table when a button is clicked. Add a couple of variables to hold date data, both filtered and unfiltered.
function handleClick() {
  // select function will select the very first element that matches our selector string #datetime. This is what we are telling D3.js to look for in the HTML. By chaining property.value to the d3.select function, we are telling D3 to grab the info and hold it in the "date" variable.
  let date = d3.select("#datetime").property("value");

  //Set a default filter and save it to a new variable. 
  let filteredData = tableData;

  // Javascript to check for a date. If one is present, return only the data with the date. The triple equal signs means the date in the table has to match our filter exactly.
  if (date) {
    filteredData = filteredData.filter(row => row.datetime === date);
    };

  // Rebuild the table using the filtered data
  // @NOTE: If no date was entered, then filteredData will
  // just be the original tableData.
  buildTable(filteredData);
};


// Add function with selector string #filter-btn that contains the id for another HTML tag. Will be included in the button tags we create for our filter button. By adding .on("click", handleClick), we are telling D3 to execute our handleclick() function when the button with an id of filter-btn is clicked.
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);

