

var questions = [
    [{ letter: "a", answer: "abducir", status: 0, question: "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien"},
    { letter: "b", answer: "bingo", status: 0, question: "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso"},
    { letter: "c", answer: "churumbel", status: 0, question: "CON LA C. Niño, crío, bebé"},
    { letter: "d", answer: "diarrea", status: 0, question: "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida"},
    { letter: "e", answer: "ectoplasma", status: 0, question: "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación"},
    { letter: "f", answer: "facil", status: 0, question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad"},
    { letter: "g", answer: "galaxia", status: 0, question: "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas"},
    { letter: "h", answer: "harakiri", status: 0, question: "CON LA H. Suicidio ritual japonés por desentrañamiento"},
    { letter: "i", answer: "iglesia", status: 0, question: "CON LA I. Templo cristiano"},
    { letter: "j", answer: "jabali", status: 0, question: "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba"},
    { letter: "k", answer: "kamikaze", status: 0, question: "CON LA K. Persona que se juega la vida realizando una acción temeraria"},
    { letter: "l", answer: "licantropo", status: 0, question: "CON LA L. Hombre lobo"},
    { letter: "m", answer: "misantropo", status: 0, question: "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas"},
    { letter: "n", answer: "necedad", status: 0, question: "CON LA N. Demostración de poca inteligencia"},
    { letter: "ñ", answer: "señal", status: 0, question: "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo."},
    { letter: "o", answer: "orco", status: 0, question: "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien"},
    { letter: "p", answer: "protoss", status: 0, question: "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft"},
    { letter: "q", answer: "queso", status: 0, question: "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche"},
    { letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor"},
    { letter: "s", answer: "stackoverflow", status: 0, question: "CON LA S. Comunidad salvadora de todo desarrollador informático"},
    { letter: "t", answer: "terminator", status: 0, question: "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984"},
    { letter: "u", answer: "unamuno", status: 0, question: "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914"},
    { letter: "v", answer: "vikingos", status: 0, question: "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa"},
    { letter: "w", answer: "sandwich", status: 0, question: "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso"},
    { letter: "x", answer: "botox", status: 0, question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética"},
    { letter: "y", answer: "peyote", status: 0, question: "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal  por indígenas americanos"},
    { letter: "z", answer: "zen", status: 0, question: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional"}],
    
    [{ letter: "a", answer: "aceite", status: 0, question: "CON LA A. Liquido graso de color verde amarillento que se obtiene prensando las aceitunas"},
    { letter: "b", answer: "buzon", status: 0, question: "CON LA B. Abertura por donde se echan las cartas para el correo"},
    { letter: "c", answer: "chandal", status: 0, question: "CON LA C. Ropa deportiva que consta de un pantalón y jersey amplio"},
    { letter: "d", answer: "devoto", status: 0, question: "CON LA D. Dedicación con fervor a obras de piedad y religión"},
    { letter: "e", answer: "entera", status: 0, question: "CON LA E. Se dice de la leche que conserva toda la grasa y sustancias nutritivas"},
    { letter: "f", answer: "forestal", status: 0, question: "CON LA F. Perteneciente o relativo a los bosques y a los aprovechamientos de leñas o pastos"},
    { letter: "g", answer: "gori gori", status: 0, question: "CON LA G. Generalmente canto fúnebre con que se acompañan los entierros"},
    { letter: "h", answer: "hombrera", status: 0, question: "CON LA H. Adorno especial de los vestidos en la parte correspondiente a los hombros"},
    { letter: "i", answer: "intuir", status: 0, question: "CON LA I. Percibir íntima o instantáneamente una idea o verdad tal como si la tuviera a la vista"},
    { letter: "j", answer: "jornada", status: 0, question: "CON LA J. Tiempo de duración del trabajo diario"},
    { letter: "k", answer: "karaoke", status: 0, question: "CON LA K. Diversión consistente en interpretar una canción grabada, mientras se sigue la letra que aparece en una pantalla"},
    { letter: "l", answer: "litera", status: 0, question: "CON LA L. Mueble formado por dos camas puestas una encima de la otra"},
    { letter: "m", answer: "mayonesa", status: 0, question: "CON LA M. Salsa que se hace batiendo huevo y aceite"},
    { letter: "n", answer: "nuca", status: 0, question: "CON LA N. Parte posterior de la cabeza situada encima del cuello"},
    { letter: "ñ", answer: "patraña", status: 0, question: "CONTIENE LA Ñ. Mentira o noticia fabulosa de pura invención"},
    { letter: "o", answer: "orilla", status: 0, question: "CON LA O. Borde del mar, de un lago o de un río"},
    { letter: "p", answer: "prioridad", status: 0, question: "CON LA P. Anterioridad de algo respecto de otra cosa en tiempo o en orden"},
    { letter: "q", answer: "branquia", status: 0, question: "CON LA Q. Órgano respiratorio de los peces formado por laminas o filamentos"},
    { letter: "r", answer: "renard", status: 0, question: "CON LA R. Apellido del ingeniero francés que junto a Arthur C. Krebs, construyó el dirigible militar “La France” en 1884"},
    { letter: "s", answer: "samba", status: 0, question: "CON LA S. Danza popular brasileña de influencia africana cantada de compás binario"},
    { letter: "t", answer: "tragaperras", status: 0, question: "CON LA T. Máquina de juegos de azar que funciona introduciendo monedas"},
    { letter: "u", answer: "usurpar", status: 0, question: "CON LA U. Atribuirse o usar un cargo o título ajenos como si fueran propios"},
    { letter: "v", answer: "vivienda", status: 0, question: "CON LA V. Lugar cerrado y cubierto construido para ser habitado por personas"},
    { letter: "w", answer: "wifi", status: 0, question: "CONTIENE LA W. W Sistema de conexión inalámbrica para conectarse a internet"},
    { letter: "x", answer: "oxford", status: 0, question: "CONTIENE LA X. Ciudad inglesa cuya Universidad compite cada año en una popular regata contra la Universidad de Cambridge"},
    { letter: "y", answer: "leguleyo", status: 0, question: "CONTIENE LA Y. Persona que aplica el derecho sin rigor y desenfadadamente"},
    { letter: "z", answer: "zarandeo", status: 0, question: "CON LA Z. Movimiento repetido y violento de un lado a otro"}],
    
    [{ letter: "a", answer: "agorafobia", status: 0, question: "CON LA A. Fobia a los espacios abiertos"},
    { letter: "b", answer: "biologia", status: 0, question: "CON LA B. Ciencia que trata de los seres vivos"},
    { letter: "c", answer: "cardiologia", status: 0, question: "CON LA C. Estudio del corazón y de sus funciones y enfermedades"},
    { letter: "d", answer: "dermatitis", status: 0, question: "CON LA D. Inflamación de la piel"},
    { letter: "e", answer: "egoismo", status: 0, question: "CON LA E. Excesivo amor a sí mismo"},
    { letter: "f", answer: "fotosintesis", status: 0, question: "CON LA F. Proceso metabólico por el cual las plantas transforman la materia con la energía de la luz"},
    { letter: "g", answer: "gimnasio", status: 0, question: "CON LA G. Lugar destinado al ejercicio físico"},
    { letter: "h", answer: "hipodromo", status: 0, question: "CON LA H. Lugar destinado a carreras de caballos"},
    { letter: "i", answer: "icono", status: 0, question: "CON LA I. Símbolo gráfico que aparece en la pantalla de una computadora u otro dispositivo electrónico y que representa un programa, un sistema operativo, etc."},
    { letter: "j", answer: "jungla", status: 0, question: "CON LA J. Selva propia del clima tropical"},
    { letter: "k", answer: "kilovatio", status: 0, question: "CON LA K. Unidad de potencia equivalente a 1000 vatios"},
    { letter: "l", answer: "litografia", status: 0, question: "CON LA L. Arte de dibujar o grabar en piedra"},
    { letter: "m", answer: "matematicas", status: 0, question: "CON LA M. Ciencia que estudia los números"},
    { letter: "n", answer: "neurologia", status: 0, question: "CON LA N. Estudio del sistema nervioso y de sus enfermedades"},
    { letter: "ñ", answer: "gruñido", status: 0, question: "CONTIENE LA Ñ. Sonido que hace el cerdo"},
    { letter: "o", answer: "otorrinolaringologo", status: 0, question: "CON LA O. Médico que trata de las enfermedades del oído, nariz y laringe"},
    { letter: "p", answer: "protagonista", status: 0, question: "CON LA P. Persona o cosa que en un suceso cualquiera desempeña la parte principal"},
    { letter: "q", answer: "quiromancia", status: 0, question: "CON LA Q. Adivinación de lo concerniente a una persona por las rayas de sus manos"},
    { letter: "r", answer: "rinoceronte", status: 0, question: "CON LA R. Mamífero de gran tamaño que tiene uno o dos cuernos curvados en la zona de la nariz"},
    { letter: "s", answer: "sintaxis", status: 0, question: "CON LA S. Parte de la gramática que estudia el modo en que se combinan las palabras y los grupos que estas forman para expresar significados"},
    { letter: "t", answer: "teologia", status: 0, question: "CON LA T. Ciencia que trata de Dios"},
    { letter: "u", answer: "uranio", status: 0, question: "CON LA U. Elemento químico metálico, radiactivo, uno de cuyos isótopos se utilizó en la primera bomba atómica"},
    { letter: "v", answer: "vacaciones", status: 0, question: "CON LA V. Tiempo de descanso en el que las personas no trabajan o no van al colegio"},
    { letter: "w", answer: "walabi", status: 0, question: "CONTIENE LA W. Animal marsupial que habita en Australia. Se parece al canguro pero es de menor tamaño"},
    { letter: "x", answer: "torax", status: 0, question: "CONTIENE LA X. Pecho de las personas y de los animales"},
    { letter: "y", answer: "yelmo", status: 0, question: "CONTIENE LA Y. Parte de la armadura que protege la cabeza y la cara"},
    { letter: "z", answer: "zoologico", status: 0, question: "CON LA Z. Lugar en que se conservan, cuidan y a veces se crían diversas especies animales para que sean contempladas por el público y para su estudio"}] ]


let rankingPlayers = [
    {name: 'Ivan', score: 10},{name: 'Sonia', score: 12},{name: 'Maria', score: 6},{name: 'Pablo', score: 9},
];
let num = 0;
let score = 0;
let playerName = "";
let totalTime = 150;
let timer;
let roscoNumber = 0;

//STYLES & BOXES
const green = "radial-gradient(circle, rgb(96, 228, 103) 0%, rgb(44, 167, 50) 80%)";
const red = 'radial-gradient(circle, rgb(221, 70, 70) 0%, rgb(158, 26, 26) 80%)';
const darkgray = 'radial-gradient(circle,  rgb(100, 100, 100) 0%,  rgb(32, 32, 32)90%)';
const blue = 'radial-gradient(circle,  steelblue 0%,  rgb(41, 84, 119)90%)';

const questionBox = document.getElementById("screen");
const answerBox = document.getElementById("answer");

//Primera letra mayuscula
function firstLetterUp (name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
}

//Número random para seleccionar rosco diferente
function randomNumb() {
    roscoNumber = Math.floor(Math.random()*3);
}

//Resetear y empezar de nuevo
function init() {
    for(let i=0;i<questions[roscoNumber].length;i++){
        questions[roscoNumber][i].status = 0;
        document.getElementById(questions[roscoNumber][i].letter).style.backgroundImage = blue;
    }
    num = 0;
    score = 0;
    playerName = "";
    totalTime = 150;
    document.getElementById("welcomeScreen").style.display = "block";
    document.getElementById("finishScreen").style.display = "none";
    roscoNumber = 0;
}

//Botón COMENZAR
const startButton = document.getElementById("startButton");
startButton.addEventListener('click', function startGame(){
    //Recoger valor de la ventana nombre e introducirlo en el array
    playerName = document.getElementById("nameBox").value;
    document.getElementById("score").innerHTML = score;
    document.getElementById("countdown").innerHTML = totalTime;
    randomNumb();
    if(playerName === ""){
        alert("Por favor, introduce un nombre");
    } else {
        //Ocultar ventana inicio y mostrar rosco
        document.getElementById("welcomeScreen").style.display = "none";
        document.getElementById("container").style.display = "flex";
        //Mostrar primera pregunta del rosco
        questionBox.innerHTML = questions[roscoNumber][num].question;
        document.getElementById(questions[roscoNumber][num].letter).style.backgroundImage = darkgray;
        countdown();
    }
});

//Función para el temporizador de 150seg
function countdown(){
    if(totalTime < 0){
        finishGame("timeOver");

    } else {
        timer = setTimeout('countdown()', 1000);
        document.getElementById("countdown").innerHTML = totalTime--;
    }

}

//Botón SIGUIENTE
const nextButton = document.getElementById("next");
nextButton.addEventListener('click', next);

function next(){
    //Si la pregunta no ha sido contestada, mostrarla 
    if(questions[roscoNumber][num].status === 0){
        checkQuestion();
        num++;
        if(checkNumber()){ return } //Check es finish partida
        showQuestion();
    
    }
}

//Botón PASAPALABRA
const pasapalabraButton = document.getElementById("pasapalabra");
pasapalabraButton.addEventListener('click', pasapalabra);

function pasapalabra(){
    document.getElementById(questions[roscoNumber][num].letter).style.backgroundImage = blue;
    num++;
    if(checkNumber()){ return }
    questionBox.innerHTML = questions[roscoNumber][num].question;
    document.getElementById(questions[roscoNumber][num].letter).style.backgroundImage = darkgray;
    
}

//Botón SALIR
const exit = document.getElementById('exit');
exit.addEventListener('click', finishGame);

//Eventos de teclado
answerBox.addEventListener('keypress', keyEvent);

function keyEvent(e){
    var tecla = e.keyCode;
    if(tecla === 13){
        next();
    } 
}

//Comprobar que el número de tirada no sea mayor que la longitud del rosco (27)
function checkNumber(){
    let finish = false;
    if(num>=questions[roscoNumber].length){
        num = 0;           
    }
    let count=0;
    while(questions[roscoNumber][num].status !== 0){
        num++;
        if(num>=questions[roscoNumber].length){
            count++;
            num = 0;           
        }
        if(count===2){
            finishGame();
            finish = true;
            return finish;
        }
    }
}

//Acabar la partida
function finishGame(type){
    clearTimeout(timer);
    document.getElementById("container").style.display = "none";
    document.getElementById('finishScreen').style.display = 'flex';
    if(type === "timeOver"){
        document.querySelector('.finish-text').innerHTML = "¡Ooops, parece que te has quedado sin tiempo! ¡Has acertado " + score + " letras!";
    } else {
        document.querySelector('.finish-text').innerHTML = "¡Terminaste el rosco! ¡Has acertado " + score + " letras!";
    }
    //Imprimir jugador y puntuación en el array playersRanking
    let generatePlayer = {
        name: firstLetterUp(playerName),
        score: score
    }
    rankingPlayers.push(generatePlayer);
    showRanking();
    
}

//Botón volver a empezar partida
const playAgain = document.querySelector('#begin-again');
    playAgain.addEventListener('click', function () { //Volver a empezar       
        init();  
    });

function showRanking(){ //Mostrar ranking jugadores
    let position = 0;
    rankingPlayers.sort(((a,b) => b.score - a.score));
    const playerScore = document.getElementsByClassName('player-score');
    for(let i=0;i<playerScore.length;i++){
        position++;
        let ranking = position + "º. " + rankingPlayers[i].name + ": " + rankingPlayers[i].score + " aciertos";
        playerScore[i].innerHTML = ranking;
    }
}


//Función para mostrar pregunta
function showQuestion(){
    answerBox.value = "";
    questionBox.innerHTML = questions[roscoNumber][num].question;
    document.getElementById(questions[roscoNumber][num].letter).style.backgroundImage = darkgray;
}

//Función para validar la pregunta
function checkQuestion () {
    if(answerBox.value.toLowerCase() === questions[roscoNumber][num].answer){
        questions[roscoNumber][num].status = 1;
        document.getElementById(questions[roscoNumber][num].letter).style.backgroundImage = green;
        score++;
        document.getElementById("score").innerHTML = score; 
    } else if(answerBox.value.toLowerCase() === "end"){
        finishGame();
    } else if (answerBox.value.toLowerCase() === "pasapalabra") {
        document.getElementById(questions[roscoNumber][num].letter).style.backgroundImage = blue;
    } else {
        document.getElementById(questions[roscoNumber][num].letter).style.backgroundImage = red;
        questions[roscoNumber][num].status = -1;
    }
}






