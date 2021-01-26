import validator from './validator.js';

const homePage = document.getElementById("homepage");
const correctCard = document.getElementById("correctcard");
const incorrectCard = document.getElementById("incorrectcard");
const correctButton = document.getElementById("correctbutton");
const incorrectButton = document.getElementById("incorrectbutton");
const firstButton = document.getElementById("firstbutton");

//Primer botón - validar tarjeta
firstButton.addEventListener("click", () => {

    let creditcardNumber = document.getElementById("cardnumber").value;

    let validatorCard = validator.isValid(creditcardNumber);
    if(validatorCard === true && creditcardNumber !== "") { 
        
        homePage.classList.replace("show","hide");
        correctCard.classList.replace("hide","show");

     }
      else if (creditcardNumber === "") {
        alert("Ingrese el número de la tarjeta."); 

    } else {
        homePage.classList.replace("show","hide");
        incorrectCard.classList.replace("hide","show");
    } 


    let inputNumber = document.getElementById("correctcardnumber");

    inputNumber.value = validator.maskify(creditcardNumber);

    });

//Segundo botón - tarjeta incorrecta
incorrectButton.addEventListener("click", () => {

        incorrectCard.classList.replace("show","hide");
        homePage.classList.replace("hide","show");

        document.getElementById("cardnumber").value = "";

});

//Tercer botón - tarjeta correcta
correctButton.addEventListener("click", () => {

        correctCard.classList.replace("show","hide");
        homePage.classList.replace("hide","show");

        document.getElementById("cardnumber").value = "";

});


