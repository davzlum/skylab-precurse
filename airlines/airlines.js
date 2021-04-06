//Array para almacenar los datos de los vuelos
let flightsList = [];

//Función para introducir y almacenar los datos de los vuelos
function enterFlight (departure,arrival,price,scale) {
    let scaleCheck;
    if (scale === true) {
        scaleCheck = "tiene escalas."
    } else {scaleCheck = "no tiene escalas."}

    //Generar una ID para cada vuelo
    let number = 1;
    let stringZeros = "0000"
    flightsList.forEach(element => {number++;});
    let Id = stringZeros + number;
    Id = Id.substring(Id.length - stringZeros.length);

    let message = "El vuelo con origen: " + departure + ", y con destino a: " + arrival + " tiene un coste de " + price + "€ y " + scaleCheck;
    console.log(message);

    flightsList.push({Id,departure,arrival,price,scale});   
}

//Función para insertar nombre y dar la bienvenida
function insertName () {
    let name = prompt("Por favor, introduce tu nombre"); 
    if(isNaN(name)){
        console.log("Bienvenido " + firstCapitalLetter(name) + "! Aquí puedes ver la lista de vuelos disponibles para hoy: ");
    } else {
        alert("Por favor, introduce solo letras");
        return insertName();
    }
}

//Función para poner la primera letra del nombre en mayúsculas
function firstCapitalLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1); 
}

//Función mostrar los últimos 5 vuelos
function lastsFlights () {
    console.log("Este es el destino de los últimos 5 vuelos del día: ");
    for (let i=flightsList.length-5;i<flightsList.length;i++){
        console.log(flightsList[i].arrival);
    }
}

//Función coste medio de los vuelos
function averagePrices() {
    let average = 0;
    let suma = 0;
    for(let i=0;i<flightsList.length;i++){
        suma = flightsList[i].price + suma;
    }
    average = suma/flightsList.length;
    console.log("El coste medio de los vuelos es de: " + average + "€.");
}

//Función vuelos con escala
function flightsWithScale() {
    let countWith = 0;
    for(let i=0;i<flightsList.length;i++) {
        if(flightsList[i].scale === true) {
            countWith++;
        }
    }
    console.log("Hay " + countWith + " vuelos con escalas.");
}


insertName();
enterFlight ("Barcelona", "Madrid", 90, true);
enterFlight ("Valencia", "Mallorca", 60, false);
enterFlight ("Londres", "Viena", 300, true);
enterFlight ("Budapest", "Oslo", 250, true);
enterFlight ("Sevilla", "Roma", 130, false);
enterFlight ("Las Palmas", "Helsinki", 500, true);
enterFlight ("Paris", "Berlin", 70, false);
enterFlight ("Amsterdam", "Bilbao", 180, false);
enterFlight ("Barcelona", "Lisboa", 120, true);
enterFlight ("Barcelona", "Casablanca", 220, false);
averagePrices();
flightsWithScale();
lastsFlights();
