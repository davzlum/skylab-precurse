
let numTirada = 1;
let redScore = 0;
let blueScore = 0;
let checkStatus = false;
let tablero = [
    ['gray','gray','gray','gray','gray','gray'],
    ['gray','gray','gray','gray','gray','gray'],
    ['gray','gray','gray','gray','gray','gray'],
    ['gray','gray','gray','gray','gray','gray'],
    ['gray','gray','gray','gray','gray','gray'],
    ['gray','gray','gray','gray','gray','gray'],
    ['gray','gray','gray','gray','gray','gray']];

//Recuadro texto ganador
const winner = document.getElementById('winner');

//Función resetear tablero
function init() {
    numTirada = 1;
    checkStatus = false;
    //Resetear tablero al valor inicial
    for(let x=0;x<tablero.length;x++){
        for(let z=0;z<tablero[x].length;z++){
            tablero[x][z] = 'gray';
        }
    }
    //Quitar color a las fichas
    let points = document.getElementsByTagName('p');
    for(let x=0;x<points.length;x++){
        points[x].style.backgroundColor = 'white';
    }
    winner.innerHTML = '';
    checkColor();
}

//Mostrar turno color ficha
function checkColor (){
    if(numTirada%2 === 0){
        document.getElementById('player-red').style.opacity = 0;
        document.getElementById('player-blue').style.opacity = 1;
    } else if (numTirada%2 !== 0) {      
        document.getElementById('player-red').style.opacity = 1;
        document.getElementById('player-blue').style.opacity = 0;
    }
}

//Colocar ficha al clickar columna
const columns = document.getElementsByClassName("column");
    for(let j=0;j<columns.length;j++){
        let column = columns[j];
        column.addEventListener('click', function () {
            if(checkStatus === false){    
                var points = column.getElementsByTagName('p');  
                    for(let i=points.length-1;i>=0;i--){
                        if(tablero[j][5-i] === 'gray'){
                            if(numTirada%2 !== 0){
                                points[i].style.backgroundColor = 'red';
                                tablero[j][5-i] = 'rojo';
                            } else if(numTirada%2 === 0){
                                points[i].style.backgroundColor = 'blue';
                                tablero[j][5-i] = 'azul';
                            }
                            break;
                        }
                    } 
                    numTirada++;
                    check(j,5-i);
                    checkColor();
                }
            });
        
    }

//Función para comprobar si se ha hecho línea
function check(j,i){
    //Check vertical
    if(i>=3){
        if(tablero[j][i]===tablero[j][i-1] && tablero[j][i]===tablero[j][i-2] && tablero[j][i]===tablero[j][i-3]){
            winner.innerHTML = '¡Gana el jugador ' + tablero[j][i] + '!';
            if(tablero[j][i]==='rojo'){
                redScore++;
            } else if(tablero[j][i]==='azul'){
                blueScore++;
            }
            checkStatus = true;
        } 
    } 
    //Check horizontal
    if(tablero[3][i]!=='gray'){ //Solo puedes ganar con rojo o azul en la columna de enmedio
        if(tablero[0][i]===tablero[1][i] && tablero[0][i]===tablero[2][i] && tablero[0][i]===tablero[3][i] || 
            tablero[1][i]===tablero[2][i] && tablero[1][i]===tablero[3][i] && tablero[1][i]===tablero[4][i] ||
            tablero[2][i]===tablero[3][i] && tablero[2][i]===tablero[4][i] && tablero[2][i]===tablero[5][i] ||
            tablero[3][i]===tablero[4][i] && tablero[3][i]===tablero[5][i] && tablero[3][i]===tablero[6][i]) {
                winner.innerHTML = '¡Gana el jugador ' + tablero[j][i] + '!';
                if(tablero[j][i]==='rojo'){
                    redScore++;
                } else if(tablero[j][i]==='azul'){
                    blueScore++;
                }
                checkStatus = true;
        }
    }
    //Check diagonal
    for(let k=0;k<=3;k++){ //Puntos de partida de diagonales a la derecha y a la izquierda (4x3)
        for(let l=0;l<=2;l++){
            //Diagonal hacia la derecha
            if(tablero[k][l]===tablero[k+1][l+1] && tablero[k][l]===tablero[k+2][l+2] && tablero[k][l]===tablero[k+3][l+3] && tablero[k][l]!=='gray'){
            
                winner.innerHTML = '¡Gana el jugador ' + tablero[k][l] + '!';
                if(tablero[k][l]==='rojo'){
                    redScore++;
                } else if(tablero[j][i]==='azul'){
                    blueScore++;
                }
                checkStatus = true;
            }
            //Diagonal hacia la izquierda
            if(tablero[6-k][l]===tablero[5-k][l+1] && tablero[6-k][l]===tablero[4-k][l+2] && tablero[6-k][l]===tablero[3-k][l+3] && tablero[6-k][l]!=='gray'){
        
                winner.innerHTML = '¡Gana el jugador ' + tablero[6-k][l] + '!';
                if(tablero[6-k][l]==='rojo'){
                    redScore++;
                } else if(tablero[6-k][l]==='azul'){
                    blueScore++;
                }
                checkStatus = true;
            }
        }
    }
    printScore();
}

//Imprimir puntuación
function printScore () {
    const redWins = document.getElementById('red-score');
    redWins.innerHTML = redScore;
    const blueWins = document.getElementById('blue-score');
    blueWins.innerHTML = blueScore;
}

//Botón volver a jugar
const playAgain = document.getElementById('reset');
playAgain.addEventListener('click', function () {
    init();
});
