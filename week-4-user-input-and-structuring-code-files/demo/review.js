/**
 * Get random integer between two numbers, found here: https://stackoverflow.com/a/7228322
 * @param {integer} min - The min number
 * @param {integer} max - The max number
 * @returns {Number} Random number between min and max
 */
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Get an array with car objects with random color and speed
 * @param {integer} numberOfCars - The number of cars
 * @returns {array} Array containing the car objects
 */
function generateCars(numberOfCars) {
    const cars = [];

    const carMakes = ['Honda', 'BMW','Fiat','Skoda','Volvo'];
    const carColors = ['lightgrey', 'lightcyan','lightyellow','lightgreen','lightcoral','lightpink'];

    for (let i = 0; i < numberOfCars; i++) {
        const car = {};
        const randomMakeIndex = randomIntFromInterval(0, carMakes.length - 1);
        const randomColorIndex = randomIntFromInterval(0, carColors.length - 1);

        car.make = carMakes[randomMakeIndex];
        car.color = carColors[randomColorIndex];
        car.speed = randomIntFromInterval(0, 100);

        cars.push(car);
    }

    return cars;
}


function getTotalNumberOfCars(){
    const input = document.querySelector('#carsCount');
    return input.value;
}





function renderCarsTable(cars){
    const columnNames = ['make', 'color', 'speed'];
    const table = document.createElement('table');
    table.className = "table table-stripped";

    const thead = document.createElement('thead');
    table.appendChild(thead);
    const header = document.createElement('tr');
    thead.appendChild(header);
    for (const columnName of columnNames){
        const th = document.createElement('th');
        header.appendChild(th);
        th.innerText = columnName;
    }

    const tbody = document.createElement('tbody');
    table.appendChild(tbody);

    for (const car of cars){
        const row = document.createElement('tr');
        tbody.appendChild(row);

        for (const columnName of columnNames){
            const cell = document.createElement('td');
            row.appendChild(cell);
            cell.innerText = car[columnName];
        }
    }

    const mainDiv = document.querySelector('#main');
    mainDiv.innerHTML = "";
    mainDiv.appendChild(table);
}

let allCars = [];
let filteredCars = [];
function iniatilize() {
    allCars = generateCars(getTotalNumberOfCars());
    filteredCars = allCars;
    renderCarsTable(filteredCars);
}

function resetFilters(){
    document.querySelector('#makeFilterInput').value = "";
    filteredCars = allCars;
    renderCarsTable(filteredCars);
}

function applyMakeFilter(){
    const make = document.querySelector('#makeFilterInput').value;
    filteredCars = filteredCars.filter(function(car){
        return car.make === make;
    });
    renderCarsTable(filteredCars);
}

function applyColorFilter(){
    const color = document.querySelector('#colorFilterInput').value;
    filteredCars = filteredCars.filter(function(car){
        return car.color === color;
    });
    renderCarsTable(filteredCars);
}

function applyMinimumSpeedFilter(){
    const minSpeed = document.querySelector('#minSpeedFilterInput').value;
    filteredCars = filteredCars.filter(function(car){
        return car.speed >= minSpeed;
    });
    renderCarsTable(filteredCars);
}

function applyMaximumSpeedFilter(){
    const maxSpeed = document.querySelector('#maxSpeedFilterInput').value;
    filteredCars = filteredCars.filter(function(car){
        return car.speed <= maxSpeed;
    });
    renderCarsTable(filteredCars);
}