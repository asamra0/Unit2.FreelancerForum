//**************** Header Section *************
function createTableHeader(table) {
  const thead = document.createElement("thead");
  // create header rows
  const headerRow = document.createElement("tr");
  // create a container that stores all the headers
  const headers = ["Pokemon", "Type", "Trainer"];

  for (let i = 0; i < headers.length; i++) {
    // create a new table heading
    const th = document.createElement("th");
    const header = headers[i];
    th.innerText = header;
    headerRow.appendChild(th);
  }
  // add headers to thead
  thead.appendChild(headerRow);
  // add thead to table
  table.appendChild(thead);
}

// *************** Body Section **************
function createTableBody(table, pokemons) {
  // Create tbody tag
  const tbody = document.createElement("tbody");
  for (let i = 0; i < pokemons.length; i++) {
    const row = document.createElement("tr");
    console.log("row", row);
    // Grab the pokemon
    const pokemon = pokemons[i];
    for (const key in pokemon) {
      const cell = document.createElement("td");
      cell.innerText = pokemon[key];
      row.appendChild(cell);
    }
    // add tr to tbody
    tbody.appendChild(row);
  }

  table.appendChild(tbody);
}

//************** Add Table Container */
function appendTableToContainer(table) {
  // Grab the root element
  const root = document.querySelector("#root");
  // Create a heading
  const h1 = document.createElement("h1");
  h1.innerText = "Pokemon Gotta' Catch em' All";
  // Add it to the Root.
  root.appendChild(h1);
  root.appendChild(table);
}

function render(initialState) {
  // Create a table element
  const table = document.createElement("table");
  createTableHeader(table);
  createTableBody(table, initialState);
  appendTableToContainer(table);
}

const pokemons = [
  { name: "Pikachu", type: "Lightning", trainer: "Ash" },
  { name: "Starmie", type: "Water/Psychic", trainer: "Misty" },
  { name: "Onyx", type: "Rock", trainer: "Brock" },
  { name: "Arcanine", type: "Fire", trainer: "Gary" },
  { name: "Charizard", type: "Fire", trainer: "Ash" },
  { name: "Vulpix", type: "Fire", trainer: "Brock" },
  { name: "Togepi", type: "Fairy", trainer: "Misty" },
  { name: "Nidoqueen", type: "Posion/Ground", trainer: "Gary" },
];

// call function
render(pokemons);
