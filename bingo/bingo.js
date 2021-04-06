function bingo () {

    let bingoCard = [[],[],[]];
    let numbersUsedCard = [];
    let numbersUsedTurn = [];
    let players = [];
    let count = 0;
    let matchLines = [false,false,false];
    
    let name = "";

    //Función para depurar y crear cartón nuevo cada vez que empezemos una partida nueva
    function init (){
        bingoCard = [[],[],[]];
        numbersUsedCard = [];
        numbersUsedTurn = [];
        count = 0;
        matchLines = [false,false,false];
        check = false;

        //Almacenar en el array bingoCard cada objeto numero random (propiedades número y matched)
        for(let i=0;i<bingoCard.length;i++){
            while (bingoCard[i].length<5){
                let numberGenerator = {
                number: randomNumbForCard(),
                matched: false,
                }  
                bingoCard[i].push(numberGenerator);
            }
        }
    }

    //Función para chequear las líneas e imprimir LINEA! y BINGO!
    let check = false;
    function checkLines() {
        for(let i=0;i<3;i++){
            if(matchLines[i] === false) {
                let lineMatched = true;
                for(let j=0;j<bingoCard[i].length;j++){
                    if (bingoCard[i][j].matched === false){
                        lineMatched = false;
                    }
                }
                if(lineMatched === true){
                    matchLines[i] = true;
                    if(matchLines[0] === true && matchLines[1] === true && matchLines[2] === true){
                        console.log("%c%s","color:orange","BINGO!!");
                    } else if (check === false){
                        console.log("%c%s","color:yellow","LÍNEA!!");
                        check = true;
                    }
                    return;
                }
            }
        }
    }
    
    //Función para introducir nombre del jugador (propiedades nombre y puntuación)
   function writeYourName () {
        name = prompt("Bienvenido, introduce tu nombre");
        name = capitalLetter();
        if(name === null){
            alert("¡Hasta la vista!")
        } else if (isNaN(name)) {
            console.log("Hola " + name + "!\nAquí tienes tu cartón para jugar al bingo!");
            let generatePlayer = {
                name: name,
                score: 0
            }
            players.push(generatePlayer);
            init();
            printBingoCard();
            changeCard();
        } else {
            alert("No has introducido un nombre");
            return getPlayerName;
        }
   }

   //Función para cambiar de cartón o empezar
   function changeCard() {
       const changeC = prompt("¿Quieres este cartón y empezar a jugar? y/n");
       if(changeC === null) {
           alert("¡Hasta la vista!");
       } else if(changeC.toUpperCase() === "Y"){
            if (confirm("SISTEMA DE PUNTUACIÓN: \n\nVas a empezar con 9900pts. pero por cada turno que necesites perderás 100pts. Así que cuantos más turnos necesites menos puntos tendrás. ¿Estás preparado? \n\n¡Adelante y mucha suerte!")) {
                newTurn();
            } else {
                changeCard();
            }           
       } else if(changeC.toUpperCase()==="N"){
           console.log("¡Aquí tienes tu cartón nuevo!");
           init();
           printBingoCard();
           changeCard();
       } else {
           alert("Por favor, escribe y/n");
           changeCard();
       }
   }

    //Funciones para imprimir por consola los dos arrays: bingocard y players

    function printBingoCard () {
        for(let i=0;i<bingoCard.length;i++){
            console.log(bingoCard[i][0].number + "|" + bingoCard[i][1].number + "|" + bingoCard[i][2].number + "|" + bingoCard[i][3].number + "|" + bingoCard[i][4].number);        
        }
    }
    function printPlayer() {
        let position = 1;
        console.log("%c%s","color:cyan","RANKING DE JUGADORES:");
        players.sort(((a,b) => b.score - a.score));
        for(let i=0;i<players.length;i++){
            console.log(position + "º. " + players[i].name + ": " + players[i].score + ".pts");
            position++;
        }
    }

    //Función primera letra en mayúscula

    function capitalLetter(){
        return name.charAt(0).toUpperCase() + name.slice(1);
    }

    //Funcion para generar números aleatorios para las tarjetas y que no se repitan
    function randomNumbForCard () {
        if(numbersUsedCard.length != 99){
            let randomNumb = 0;
            let repeat = false;
            do {
                randomNumb = Math.floor(Math.random()*99)+1;    
                repeat = repeatNumberForCard(randomNumb);
            } while (repeat != false);
            numbersUsedCard.push(randomNumb);
            return randomNumb;
        } else {
            return null;
        }
    }
    function repeatNumberForCard(randomNumb) {
        let repeat = false;
        for(let i=0;i<numbersUsedCard.length;i++){
            if(randomNumb == numbersUsedCard[i]){
                repeat = true;
            }
        }
        return repeat;
    }

     //Funcion para generar números aleatorios para los turnos y que no se repitan
     function randomNumbForTurn () {
        if(numbersUsedTurn.length != 99){
            let randomNumb = 0;
            let repeat = false;
            do {
                randomNumb = Math.floor(Math.random()*99)+1;    
                repeat = repeatNumberForTurn(randomNumb);
            } while (repeat != false);
            numbersUsedTurn.push(randomNumb);
            return randomNumb;
        } else {
            return null;
        }
    }
    function repeatNumberForTurn(randomNumb) {
        let repeat = false;
        for(let i=0;i<numbersUsedTurn.length;i++){
            if(randomNumb == numbersUsedTurn[i]){
                repeat = true;
            }
        }
        return repeat;
    }
    
    //Función para comprobar que todos los valores de matched sean false y sino acabar el juego.
    function askTurn() {
        for(let i=0;i<bingoCard.length;i++){
            for(let z=0;z<bingoCard[i].length;z++){
                if (bingoCard[i][z].matched !== true) {
                    return newTurn();           
                }              
            }
        }
        console.log("Has necesitado " + count + " turnos");
        console.log("Esta es tu puntuación: " + score());
        for (let i=players.length-1;i>=0;i--){
            if(players[i].name === name){
                players[i].score = score();
                break;
            }
        }
        printPlayer();
        alert("Has terminado el juego");
        startAgain();
    }

    //Función para generar numero random cada turno y comprobar/cambiar por "X"
    function newTurn() {
        const randomNumber = randomNumbForTurn();
        console.log("%c%s","color: green","Eeeel " + randomNumber + "!!");
        for(let i=0;i<bingoCard.length;i++) {
            for(let z=0;z<bingoCard[i].length;z++) {
                if(bingoCard[i][z].number === randomNumber){     
                    bingoCard[i][z].matched = true; 
                    if (bingoCard[i][z].matched){
                        bingoCard[i][z].number = "X";
                    }
                    console.log("%c%s", "color: red","¡Número!");
                }
            }
                       
        } 
        count++;
        printBingoCard();
        checkLines(); 
        continuePlaying();  
    }    
    
    //Función para preguntar si queremos seguir jugando
    function continuePlaying() {
        if(confirm("¿Quieres seguir jugando?")){
            askTurn();
        } else {
            alert("¡Hasta la vista!");
        }
    }  
    
    //Función para preguntar si quieres jugar de nuevo
    function startAgain() {
        if(confirm("¿Quieres empezar de nuevo?")){
            writeYourName();
        } else {
            alert("¡Hasta la vista!");
        }
    }
    //Función para el sistema de puntuación
    function score() {
        return (99 - count)*100;
    }

    writeYourName();
}

bingo();