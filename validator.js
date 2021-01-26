const validator = { 

  //isvalid, para validar la tarjeta de crédito
  isValid: function (validationCard) {
 
  //Con el cero indicamos que es un número
  let totalSum = 0;
    
  //valid es un valor verdadero  
  let valid = true;
    
  //El string se convierte en un array    
  let creditCard = validationCard.split(""); 
    
  //Se invierte el array
  let reversecreditCard = creditCard.reverse();  
 
  //Se une el array
  let unionCard = reversecreditCard.join("");
 
  //con for se recorrerá el tamaño de los números de la tarjeta, tomará a los que son de posición par, su inicio sería el 1 y aumentaría de 2 en 2.
  for (let i=1; i < unionCard.length; i+=2) {
   
    //con charAt se devuelve el carácter indicado de una cadena (se pide devolver la posición,i es la posición que está variando) luego se multiplica por 2.
    //la función parseInt comprueba el primer argumento, una cadena, e  intenta devolver un entero.   
    let evenNumber = parseInt(unionCard.charAt(i) * 2);
       
    //si el resultado de la múltiplicación es mayor o igual a 10 entonces se suma los dígitos. 
    //convertimos de entero a string, luego con charAt se pide la posición 0 y 1 para sumarlo,
    //y finalmente se pasa a un entero con parseInt. 
    if (evenNumber >= 10){
      let multipliedString = evenNumber.toString(); 
      let sumDigits =  parseInt(multipliedString.charAt(0)) + parseInt(multipliedString.charAt(1));  

      //totalSum esta declarada con un valor inicial de cero, luego se agregará la sumDigits
     
      totalSum = totalSum + sumDigits;
      
    }
 
    else {
      totalSum = totalSum + evenNumber;
      
    }
  }

  //si el número es impar, solo baja tal cual
  //se convierte a un entero
  for (let i=0; i < unionCard.length; i+=2) {
  let oddNumber = parseInt(unionCard.charAt(i));
 
  //finalmente la suma de los impares y pares.
  totalSum = totalSum + oddNumber;
 
  }
   
  //retorna valor true
  if (totalSum % 10 === 0 ) { 
  valid = true; 
  
  } 
  //o valor false
  else {
  valid = false;
  
  }
  
  return valid;

},

  //últimos cuatro número deben ser ####
  maskify: (totalCardNumbers) => {
  
  
  let numeralSymbol = ""; 

  //con for se recorrerá los números de la tarjeta y agregará los #
  
  for (let i = 0; i < totalCardNumbers.length - 4; i++ )
  {
  numeralSymbol = numeralSymbol + "#";
  }
    
  //con substring se extre los numeros de la posición indicada, en este caso es substring (12,16) es decir 12,13,14,15. 
  //el nombre numerostarjeta.length-4 representa al 12 y nuemerosTarjeta.length representa al 16.
  let lastDigits = totalCardNumbers.substring(totalCardNumbers.length - 4,totalCardNumbers.length); 

  //se realiza una concatenación de los # que tengo con los últimos dígitos
  let stringFinal = numeralSymbol + lastDigits;
 
  return stringFinal;
    
},

}; 
export default validator;


