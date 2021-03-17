
const screen = document.getElementById("textopantalla");
screen.innerHTML = 0;

let number = "";
let acumulator = 0;
let acumulatorArray = [];
let p_operation=true;
let coma=0;

let checkSuma=false;
let checkResta=false;
let checkMult= false;
let checkDiv=false;

function numero(num) {
    if(num === '.' && number === ""){
        screen.innerHTML = "0.";
        coma = 1;
    } else if(num === '.' && coma == 0){
        screen.innerHTML = number + num;
        coma = 1;
    } else if (num === '.' && coma == 1){
        
    } else {
        screen.innerHTML = number + num;
        
    }
    number = screen.innerHTML;
}

function suma() {
    if (number == ""){
        screen.innerHTML = acumulator;
    } else {
        if(checkResta){
            acumulator = acumulator - parseFloat(number);
            screen.innerHTML = acumulator;
        } else if (checkMult){
            acumulator = acumulator * parseFloat(number);
            screen.innerHTML = acumulator;
        } else if(checkDiv){
            acumulator = acumulator / parseFloat(number);
            screen.innerHTML = acumulator;
        } else {
            acumulator = acumulator + parseFloat(number);
            screen.innerHTML = acumulator;
        } 
    } 
    acumulatorArray.push(acumulator);
    checkSuma = true;
    checkResta = false;
    checkDiv=false;
    checkMult=false;
    p_operation = false;
    number="";
    coma = 0;
}

function resta() {
    if(number == ""){
        screen.innerHTML = acumulator;
    } else {
        if(p_operation == false){
            if(checkSuma){
                acumulator = acumulator + parseFloat(number);
                screen.innerHTML = acumulator;
            } else if(checkMult){
                acumulator = acumulator * parseFloat(number);
                screen.innerHTML = acumulator;
            } else if (checkDiv){
                acumulator = acumulator / parseFloat(number);
                screen.innerHTML = acumulator;
            } else {
                acumulator = acumulator - parseFloat(number);
                screen.innerHTML = acumulator;
            }
        } else {
            acumulator = parseFloat(number);
            p_operation = false;
        }
    }
    acumulatorArray.push(acumulator);
    checkSuma=false;
    checkResta=true;
    checkMult=false;
    checkDiv=false;
    number="";
    coma = 0;
}

function multiplication() {
    if(number == ""){
        screen.innerHTML = acumulator;
    } else {
        if(p_operation == false) {
            if(checkSuma){
                acumulator = acumulator + parseFloat(number);
                screen.innerHTML = acumulator;
            } else if(checkResta){
                acumulator = acumulator - parseFloat(number);
                screen.innerHTML = acumulator;
            } else if(checkDiv) {
                acumulator = acumulator / parseFloat(number);
                screen.innerHTML = acumulator;
            } else {
                acumulator = acumulator * parseFloat(number);
                screen.innerHTML = acumulator;
            }
        } else {
            acumulator = parseFloat(number);
            p_operation = false;
        }
    }
    acumulatorArray.push(acumulator);
    checkMult=true;
    checkResta=false;
    checkSuma=false;
    checkDiv=false;
    number="";
    coma = 0;
}

function division() {
    if(number == ""){
        screen.innerHTML = acumulator;
    } else {
        if(p_operation == false) {
            if(checkSuma){
                acumulator = acumulator + parseFloat(number);
                screen.innerHTML = acumulator;
            } else if(checkResta){
                acumulator = acumulator - parseFloat(number);
                screen.innerHTML = acumulator;
            } else if (checkMult){
                acumulator = acumulator * parseFloat(number);
                screen.innerHTML = acumulator;
            } else {
                acumulator = acumulator / parseFloat(number);
                screen.innerHTML = acumulator;
            }
        } else {
            acumulator = parseFloat(number);
            p_operation = false;
        }
    }
    acumulatorArray.push(acumulator);
    checkMult=false;
    checkResta=false;
    checkSuma=false;
    checkDiv=true;
    number="";
    coma = 0;
}

function result() {
    if(checkSuma){
        screen.innerHTML = acumulator + parseFloat(number);
        number=0;
    } else if(checkResta){
        screen.innerHTML = acumulator - parseFloat(number);
        number=0;
    } else if (checkMult){
        screen.innerHTML = acumulator * parseFloat(number);
        number=1;
    } else if (checkDiv){
        screen.innerHTML = acumulator / parseFloat(number);
        number=1; //no está bien del todo
    }
    acumulatorArray.push(acumulator);
    acumulator=parseFloat(screen.innerHTML);
    coma = 0;
}

function reset(){
    screen.innerHTML = 0;
    acumulator = 0;
    number = 0; 
    p_operation=true;
    let checkSuma=false;
    let checkResta=false;
    acumulatorArray = [];
    coma = 0;
}

function retroceder(){ 
    if(acumulator === 0){
        return;
    } else {
        for(let i=acumulatorArray.length;i>0;i--){
            console.log(acumulatorArray[i]);}
        console.log(acumulatorArray[acumulatorArray.length-1]);
        screen.innerHTML = acumulatorArray[acumulatorArray.length-1];
        if(checkResta == true || checkSuma == true){
            number = 0;
        } else if (checkDiv == true || checkMult == true) {
            number = 1;
        } 
    }

}