let URL_API = 'https://api.adviceslip.com/advice';
let deviceNumber = document.querySelector('.deviceNumber');
let text = document.querySelector('.text');
let dice = document.querySelector('.dice');

window.addEventListener('load', () => {
    fetchApi();
})

dice.addEventListener('click', () => {
    fetchApi();
})

function fetchApi() {
    fetch(`${URL_API}`)
        .then(advice => advice.json())
        .then(advice => consultarAdvice(advice))
}

function consultarAdvice(advice) {
    let adviceId = advice.slip.id;
    let adviceText = advice.slip.advice;

    deviceNumber.textContent = adviceId;
    text.textContent = `"${adviceText}"`;
}
