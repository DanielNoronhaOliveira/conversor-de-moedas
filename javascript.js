const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector("#currency-select");


function converterValor() {
    const inputCurrencyValue = document.querySelector("#input-currency").value;

    const currencyValueToconvert = document.querySelector("#currency-Value-to-convert");

    const currencyValueConverted = document.querySelector("#currency-value");



    const dolarToday = 4.9;
    const euroToday = 5.37;
    const libraToday = 6.23;

    currencyValueToconvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue);




    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday);

    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday);
    }
    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday);
}
}

function converteChange() {

    const currencyName = document.getElementById("currency-name");
    const imageChange =document.getElementById("image-change");
    

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dolar americano";
        imageChange.src = "estados-unidos (1) 1.png";
    }


    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "euro";
        imageChange.src = "euro.png";
    }
    if(currencySelect.value == "libra"){
        currencyName.innerHTML = "libra";
        imageChange.src = "libra 1.png";
    }
}

converterValor()

currencySelect.addEventListener("change", converteChange);
convertButton.addEventListener("click", converterValor);


