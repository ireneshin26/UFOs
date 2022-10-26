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