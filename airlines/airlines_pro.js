//Array para almacenar los datos de los vuelos
let flightsList = [];

//Función para introducir y almacenar los datos de los vuelos
function enterFlight (departure,arrival,price,scale) {
    let scaleCheck;
    parseInt(price)
    if (scale === true) {
        scaleCheck = "tiene escalas."
    } else {scaleCheck = "no tiene escalas."}
    
    let Id=1;
    flightsList.forEach(element => {Id++});

    let message = "El vuelo " + Id + " con origen: " + firstCapitalLetter(departure) + ", y con destino a: " + firstCapitalLetter(arrival) + " tiene un coste de " + price + "€ y " + scaleCheck;
    console.log(message);

    flightsList.push({Id,departure,arrival,price,scale,message});   

}


//Función para insertar nombre y dar la bienvenida
function insertName () {
    let name = prompt("Por favor, introduce tu nombre"); 
    if (isNaN(name)){
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

//------------------------------------------------------------------

//Función ADMIN/USER 
function whoAreYou () {
    const typePerson = prompt("Escribe si eres ADMIN o USER");
    
    if (typePerson === null) {
        alert("¡Hasta la vista!");

    } else if (isNaN(typePerson)) {
        if (typePerson.toUpperCase() === "ADMIN"){
            return admin ();
        } else if (typePerson.toUpperCase() === "USER"){
            return user();
        } else {
            alert("No has introducido el valor correcto, vuelve a intentarlo")
            return whoAreYou();
        }
    } else {
        alert("Has introducido números, vuelve a intentarlo");
        return whoAreYou();
    }
}

//Función ADMIN
function admin() {
    const choose = prompt("Hola Administrador ¿Que deseas hacer?\n" + "\n - Añadir vuelos (escribe ADD)" + "\n - Eliminar vuelos (escribe DELETE)");
    if (choose === null) {
        alert("¡Hasta la vista!");

    } else if (choose.toUpperCase() === "ADD") {
        if (flightsList.length > 15) {
            alert("Lo siento, has llegado al máximo permitido, elige otra opción");
            return admin;
        } else {
        return newFlights();
        }
    } else if (choose.toUpperCase() === "DELETE") {
        return deleteFLight(); 
    } else {
        alert("No has elegido ninguna opción, por favor elige de nuevo");
        return admin();
    }
}

//Funcion para crear más vuelos //No funciona bien
function newFlights() {
    let newDeparture = prompt("Origen del vuelo");
    while ((newDeparture !== null) && (isNaN(newDeparture) === false)) {
    newDeparture = prompt("Origen del vuelo\n" + "\nPor favor, introduce letras");
    }
    if (newDeparture === null) {
        return admin ();
    } 

    let newArrival = prompt("Llegada del vuelo");
    while (newArrival !== null && isNaN(newArrival) === false) {
        newArrival = prompt("Llegada del vuelo\n" + "\nPor favor, introduce letras");
    }
    if (newArrival === null) {
        return admin ();
    }

    let newPrice = prompt("Precio del vuelo");
    while (newPrice !== null && isNaN(newPrice) === true) {
        newPrice = prompt("Precio del vuelo\n" + "\nPor favor, introduce números");
    }
    if (newPrice === null) {
        return admin();
    } 

    let newScale = prompt("Escalas Y/N");
    while (newScale !== null && newScale.toUpperCase() !== "Y" && newScale.toUpperCase() !== "N") {
        newScale = prompt("Escalas Y/N\n" + "\nNo has introducido un valor correcto");
    }
    if (newScale === null) {
        return admin();
    } else {
        newScale = (newScale.toUpperCase() === "Y");
    }

        enterFlight(newDeparture,newArrival,newPrice,newScale);
        continueNewFlights();
}

//Función continuar creando vuelos
function continueNewFlights () {
    const continueNew = prompt("¿Quieres seguir creando nuevos vuelos? Y/N");
    if (continueNew === null) {
        alert("¡Hasta la vista!");

    } else if (continueNew.toUpperCase() === "Y") {
        if (flightsList.length < 15){
            return newFlights();
        } else {
            alert("Has llegado al número máximo de vuelos permitidos");
            return admin();
        }       
    } else if (continueNew.toUpperCase() === "N") {
        return admin();
    } else {
        alert("No has introducido un valor correcto");
        return continueNewFlights();
    }
}

//Funcion para eliminar vuelos
function deleteFLight() {
    let check = false;
    console.log("Lista de vuelos disponibles: ");
    for (let i=0;i<flightsList.length;i++){
    console.log(flightsList[i].message);}
    const idFlight = prompt("Mira la lista de vuelos y escoge cual quieres eliminar escribiendo su número de ID");
    if (flightsList.length>0){
        if (idFlight === null) {
            return admin();
        } else if (isNaN(idFlight)) {
            alert("Por favor, introduce solo los numeros de ID del vuelo");
            return deleteFLight();
        } else {
            for (let i=0;i<flightsList.length;i++){
                if (flightsList[i].Id === parseInt(idFlight)) {
                check = true;}
            }
            if (check){
                let count = 0;
                while(flightsList[count].Id !== parseInt(idFlight)){
                    count++;}
                flightsList.splice(count,1);
                
                return deleteFLight();
            } else {
                alert("La ID que has introducido no existe");
                return deleteFLight();
            } 
        }

    } else { 
        alert("Ya no se pueden eliminar más vuelos");
        return admin();
    }
}

//Función USER
function user() {
    const searchPrice = prompt("Teclea el precio que quieres buscar");
    if (searchPrice === null){
        alert("¡Hasta la vista!");
        
    } else if (isNaN(searchPrice)){
        alert("Solo puedes introducir números");
        return user();
    } else {
        const searchFlights = prompt("Quieres buscar vuelos:\n" + "\n - Por encima de " + searchPrice + "€ (Teclea +)" + "\n - Por debajo de " + searchPrice + "€ (Teclea -)" + "\n - Igual que " + searchPrice + "€ (Teclea =)");
        if(searchFlights === null){
            return user();
        } else {
            let a = 0;
            switch(searchFlights){
                case "+":
                    console.log("Estos son los vuelos con un precio superior a " + searchPrice + "€");
                    for(let i=0;i<flightsList.length;i++){
                        if (flightsList[i].price >= parseInt(searchPrice)) {
                            console.log(flightsList[i].message);
                            a = 1;
                        }
                    }
                    if (a === 0){
                        alert("No hay ningún vuelo con ese precio");
                        return user();
                    }
                    return buyTicket();
                case "-":
                    console.log("Estos son los vuelos con un precio inferior a " + searchPrice + "€");
                    for(let i=0;i<flightsList.length;i++){
                        if (flightsList[i].price <= parseInt(searchPrice)) {
                            console.log(flightsList[i].message);
                            a = 1;
                        }
                    }
                    if (a === 0){
                        alert("No hay ningún vuelo con ese precio");
                        return user();
                    }
                    return buyTicket();
                case "=": 
                    console.log("Estos son los vuelos con un precio igual a " + searchPrice + "€");
                    for(let i=0;i<flightsList.length;i++){
                        if (flightsList[i].price === parseInt(searchPrice)) {
                            console.log(flightsList[i].message); 
                            a = 1;       
                        } 
                    }
                    if (a === 0){
                        alert("No hay ningún vuelo con ese precio");
                        return user();
                    }
                    return buyTicket();
                default: 
                    alert("No has introducido un valor correcto");
                    return user();
            }
        }
    }
}

//Función comprar vuelo
function buyTicket(){
    let check = false;
    const buyFlight = prompt("Teclea el ID del vuelo que deseas comprar");
    if (buyFlight === null){
        return user();
    } else if (isNaN(buyFlight)) {
        alert("Por favor introduce solo números");
        return buyTicket();
    } else {
        for(let i=0;i<flightsList.length;i++){
            if (flightsList[i].Id === parseInt(buyFlight)) {
                    check = true;
            }
        }
        if (check) {
            let count = 0;
                while(flightsList[count].Id !== parseInt(buyFlight)){
                    count++;}
                console.log("Usted a comprado este vuelo: ");
                console.log(flightsList[count].message);
                alert("Gracias por su compra, vuelva pronto");
                return;
            } else {
                alert("La ID que ha tecleado no existe, vuelva a intentarlo");
                return buyTicket();
            }
        }
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
whoAreYou();

