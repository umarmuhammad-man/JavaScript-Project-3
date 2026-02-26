// Ch 15: Basics of Arrays
let cities = ["Faisalabad", "Lahore", "Karachi", "Islamabad"];

const output = (html) => { document.getElementById("output").innerHTML = html; };
const input = () => { return document.getElementById("input").value; };
const clearInput = () => { document.getElementById("input").value = ""; };
const clearOutput = () => { document.getElementById("output").innerHTML = ""; };

// Function to update the "Current Array State" box
function updateArrayDisplay() {
    document.getElementById("dateBox").innerHTML = JSON.stringify(cities);
}
updateArrayDisplay();

// Ch 16 & 17: Adding and Removing Elements
function addCity() {
    let newCity = input();
    if (!newCity) { alert("Enter a city name"); return; }
    cities.push(newCity); // Adds to end
    updateArrayDisplay();
    output(`<h1 style="color: green;">${newCity}</h1> added to the end.`);
}

function addCityStart() {
    let newCity = input();
    if (!newCity) { alert("Enter a city name"); return; }
    cities.unshift(newCity); // Adds to start
    updateArrayDisplay();
    output(`<h1 style="color: green;">${newCity}</h1> added to the start.`);
}

function removeLast() {
    let removed = cities.pop(); // Removes from end
    updateArrayDisplay();
    output(`<h1 style="color: red;">${removed}</h1> was removed from the end.`);
}

function removeFirst() {
    let removed = cities.shift(); // Removes from start
    updateArrayDisplay();
    output(`<h1 style="color: red;">${removed}</h1> was removed from the start.`);
}

// Ch 18, 19 & 20: For Loops and Flags
function showCities() {
    let listHtml = "<ul>";
    for (let i = 0; i < cities.length; i++) {
        listHtml += `<li>City at index ${i}: <b>${cities[i]}</b></li>`;
    }
    listHtml += "</ul>";
    output(listHtml);
}

function searchCity() {
    let query = input().toLowerCase();
    if (!query) { alert("Enter city to search"); return; }
    
    let isFound = false; // Flag (Ch 19)
    for (let i = 0; i < cities.length; i++) {
        if (cities[i].toLowerCase() === query) {
            isFound = true;
            output(`<h1 style="color: green;">Found!</h1> ${cities[i]} is at index ${i}.`);
            break; // Stopping the loop (Ch 20)
        }
    }
    
    if (!isFound) {
        output(`<h1 style="color: red;">Not Found</h1>`);
    }
}