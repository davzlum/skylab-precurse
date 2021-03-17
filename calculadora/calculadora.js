function calculadora (num1, num2) {

    let outputResults = [];
    if (typeof num1 !== 'number' && !num2){
      console.log ('Introduce un número, por favor');
  
    }else if (typeof num1 === 'number' && typeof num2 === 'number'){
      const suma = num1+num2;
      outputResults.push(num1 + ' + ' + num2 + ' = ' + Math.round(suma*1000)/1000);
      const resta = num1-num2;
      outputResults.push(num1 + ' - ' + num2 + ' = ' + Math.round(resta*1000)/1000);
      const multiplicacion = num1*num2;
      outputResults.push(num1 + ' x ' + num2 + ' = ' + Math.round(multiplicacion*1000)/1000);
      const division = num1/num2;
      outputResults.push(num1 + ' / ' + num2 + ' = ' + Math.round(division*1000)/1000);
    }
    else {
      const raiz = Math.sqrt(num1);
      outputResults.push('La raiz cuadrada de ' + num1 + ' es igual a ' + raiz);
    }
    
    for (var i=0;i<outputResults.length;i++) {
        console.log(outputResults[i]);
      }
  }

  calculadora (2,4);
  calculadora (3,6);
  calculadora (4);
  calculadora ('David');