"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee col-sm-12 col-md-6">';
    // html += '<td>' + coffee.id + '</td>';
    html += '<h3>' + coffee.name + '</h3>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for (var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}


function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    var nameInput = document.querySelector("#name-input").value;
    coffees.forEach(function (coffee) {
        if (coffee.roast === selectedRoast) {
            if (coffee.name.toLowerCase().includes(nameInput.toLowerCase())) {
                filteredCoffees.push(coffee);
            } else if (nameInput === "") {
                filteredCoffees.push(coffee);
            }
        } else if (selectedRoast === "all") {
            if (coffee.name.toLowerCase().includes(nameInput.toLowerCase())) {
                filteredCoffees.push(coffee);
            } else if (nameInput === "") {
                filteredCoffees.push(coffee);
            }
        }

    });
    coffeesDiv.innerHTML = renderCoffees(filteredCoffees);
}


// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];



function newCoffee(event) {
    event.preventDefault();
    // var selectedRoast = newRoast.value;
    var newRoast = document.querySelector("#add-roast").value;
    var newName = document.querySelector("#add-name").value;
    var newID = coffees[coffees.length - 1].id + 1;
    coffees[coffees.length] = {
        id: newID,
        name: newName,
        roast: newRoast
    }
}

var submitButton = document.querySelector("#add-coffee");
submitButton.addEventListener("click", newCoffee);
submitButton.addEventListener("click", updateCoffees);

var coffeesDiv = document.querySelector('#coffees');
var searchButton = document.querySelector('#coffee-search');
var roastSelection = document.querySelector('#roast-selection');

coffeesDiv.innerHTML = renderCoffees(coffees);

searchButton.addEventListener('click', updateCoffees);

document.querySelector("#name-input").addEventListener("keyup", updateCoffees);



