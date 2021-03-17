
//Array para almacenar los resultados
let outputResults = [];  

//Función para realizar los cálculos con los números introducidos a través del prompt
function calculadora (allNum) {
    
    if(allNum.length === 1){
    const raiz = Math.sqrt(allNum[0]);
    outputResults.push('La raiz cuadrada de ' + allNum[0] + ' es igual a ' + Math.round(raiz*1000)/1000);
    writeArray();
    } else {
    var suma = allNum[0];
    var mult = allNum[0];
    var resta = allNum[0];
    var div = allNum[0];
    
    for (i = 1; i < allNum.length; i++){
        var n = allNum[i];
        suma = suma + n;
        mult = mult * n;
        resta = resta - n;
        div = div / n;

    }
    outputResults.push("Suma de: " + allNum.join(" + ") + " = " + suma);
    outputResults.push("Resta de: " + allNum.join(" - ") + " = " + resta);
    outputResults.push("Multiplicación de: " + allNum.join(" x ") + " = " + mult);
    outputResults.push("División de: " + allNum.join(" / ") + " = " + Math.round(div*1000)/1000)
    writeArray();
    
    }
    moreNum();
}

//Función para imprimir los datos del array que almacena los resultados
function writeArray(){
    console.log("Estas son las operaciones almacenadas:");
    for(i = 0; i < outputResults.length; i++){
    console.log(outputResults[i])
    }
}

//Función para introducir números y pasarlos a un array
function numeros() {
    const allNum = []
    const intNum = prompt("Por favor, introduce números separados por comas").split(",");
    
    for (let i=0; i<intNum.length ; i++) {
        if (isNaN(intNum[i])) {
            alert ("Por favor, introduce solo números");
            return numeros();
        
        } else {
            allNum.push(parseInt(intNum[i]));
        }
    }

    return allNum;
}

//Función para preguntar si deseas seguir realizando más operaciones
function moreNum() {
    let question = prompt("¿Quieres continuar? y/n ");
    switch (question) {
        case "y":
        calculadora(numeros());
        break;
        case "n": 
        alert("¡Hasta la vista!");
        break;
        case null: 
        return;
        default: 
        alert("No te entiendo");
        return moreNum();
    }

}

calculadora(numeros());