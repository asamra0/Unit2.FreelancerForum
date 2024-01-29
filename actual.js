const freelancers = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
];

//select priceValue to update its value dynamically when we get average

const priceValue = document.querySelector("#priceValue");

//******************create table header************

function createTableHeader(table) {
  //create thead
  const thead = document.createElement("thead");

  //create header row for table
  const headerRow = document.createElement("tr");

  //create array to store all headings we want for the table
  const headers = ["Name", "Occupation", "Starting Price"];

  //loop over to get every element
  for (const header of headers) {
    //create a new table heading for th
    // add header text inbetween tags <th> name </th>
    const th = document.createElement("th");
    //take text from header array and add it between th tags
    th.innerText = header;
    //add th to our tr
    headerRow.appendChild(th);
  }
  //add headerRow (tr)? to thead
  thead.appendChild(headerRow);
  //add thead to table
  table.appendChild(thead);
}

//*********** Table Boday/Table Rows ************/

function createTableBody(table, freelancers) {
  //create tbody
  const tbody = document.createElement("tbody");

  for (const freelance of freelancers) {
    //create table row to putinside table body
    const tableRow = document.createElement("tr");

    // Add name, occupation, and price to each cell using for in loop
    for (const key in freelance) {
      //creates td -----> <td> Dr.Slice </td>
      const td = document.createElement("td");
      //add data to td
      td.innerText = freelance[key];
      //add td's to tableRow
      tableRow.append(td);
    }
    tbody.appendChild(tableRow);
  }
  //add Tboday to our table
  table.appendChild(tbody);
}

// calculate average starting price
function CalculateAverageStartingPrice(freelancers) {
  const totalPrice = freelancers.reduce((prev, curr) => {
    const price = prev + curr.price;
    return price;
  }, 0);

  const averagePrice = totalPrice / freelancers.length;
  priceValue.innerText = Math.floor(averagePrice);
}

function appendTableToContainer(table) {
  //get root element
  const root = document.querySelector("#root");
  //reset table to default
  root.innerHTML = "";
  console.log("root", root);
  const h2 = document.createElement("h2");
  h2.innerText = "Availible Freelancers";
  root.appendChild(h2);
  root.appendChild(table);
}

//create function to update the table and average dynamically
function updateTableAndAverage(newFreelancer) {
  freelancers.push(newFreelancer);
  const table = document.createElement("table");
  createTableHeader(table);
  createTableBody(table, freelancers);
  appendTableToContainer(table);

  CalculateAverageStartingPrice(freelancers);
}

function simulateNewFreelancer() {
  //setInterval and grab the id
  const intervalId = setInterval(() => {
    const newFreelancer = {
      name: "Carol",
      occupation: "Programmer",
      price: 70,
    };
    updateTableAndAverage(newFreelancer);
  }, 5000);

  //return intervalId
  return intervalId;
}

function render(initialState) {
  const table = document.createElement("table");
  createTableHeader(table);
  createTableBody(table, initialState);
  appendTableToContainer(table);
  CalculateAverageStartingPrice(freelancers);
}

const intervalId = simulateNewFreelancer();

setTimeout(() => {
  clearInterval(intervalId);
  console.log("simulation stopped after 5 seconds");
}, 5000);

render(freelancers);

// setInterval(() => {
//   console.log("hello");
// }, 5000);
