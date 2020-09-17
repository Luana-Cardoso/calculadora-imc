let weight= document.querySelector('#inputWeight');
let height = document.querySelector('#inputHeight');
let result = document.querySelector('#result');
let calculateBtn = document.querySelector('#calculate');
let classification = document.querySelector('#classification');

window.addEventListener('load', () => {
    calculateImc();
});

function calculateImc(){
    event.preventDefault();

    var height = inputHeight.value;
    var weight = inputWeight.value;
    var imc = weight/(height * height);

    !height || !weight ? result.textContent = "" : result.textContent = `Seu IMC é ${imc.toFixed(2)}`;

    if(!imc){
        classification.textContent = "";
    }
    else if(imc <= 18.5){
        classification.textContent = "Situação: Abaixo do peso";
    }
    else if (imc >= 18.6 && imc <= 24.9){
        classification.textContent = "Situação: Normal";
    }
    else if (imc >= 25 && imc <= 29.9){
        classification.textContent = "Situação: Sobrepeso";
    }
    else if (imc >= 30 && imc <= 34.9){
        classification.textContent = " Situação: Obesidade classe I";
    }
    else if (imc >= 35 && imc <= 39.9){
        classification.textContent = " Situação: Obesidade classe II";
    }else{
        classification.textContent = " Situação: Obesidade classe III";
    }
}

calculateBtn.addEventListener("click", calculateImc);

