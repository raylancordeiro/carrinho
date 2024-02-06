let inputTitular = document.getElementById('input-titular');
let cartaoTitular = document.getElementById('cartao-titular');
let inputCvv = document.getElementById('input-cvv');
let frente = document.getElementById('frente');
let verso = document.getElementById('verso');
let cartaoValidadeMes = document.getElementById('cartao-validade-mes');
let cartaoValidadeAno = document.getElementById('cartao-validade-ano');
let cartaoNumero = document.getElementById('cartao-numero');
let cartaoLogo = document.getElementById('cartao-logo');
let cartaoCvv = document.getElementById('cartao-cvv');

inputCvv.addEventListener('keyup', () => {
    cartaoCvv.innerText = inputCvv.value
})

inputTitular.addEventListener("keyup", () => cartaoTitular.innerText = inputTitular.value.toUpperCase());

inputNumero.addEventListener("keyup", () => {

    cartaoNumero.innerText = mcc(inputNumero.value);
    inputNumero.value = mcc(inputNumero.value);

    let img = '';
    switch (inputNumero.value.substring(0,1)) {
        case '4':
            img = 'visa-logo.png';
        break;
        case '5':
            img = 'master-logo.webp'
        break;
        default:
            img = ''
        break;
    }
    cartaoLogo.src = `assets/images/${img}`;
});

function mcc(v) {
    v = v.replace(/\D/g, "");
    return v.match(/\d{1,4}/g).join(' ');
}

inputCvv.addEventListener("focus", () => {
    verso.style.display = "block"
    frente.style.display = "none"    
    verso.classList.add('animate__flipInY')
})

inputCvv.addEventListener("blur", () => {
    verso.style.display = "none"
    frente.style.display = "block"
    frente.classList.add('animate__flipInY')
})

selectMes.addEventListener("change", () => cartaoValidadeMes.innerText = selectMes.value)

selectAno.addEventListener("change", () => {
    cartaoValidadeAno.innerText = selectAno.value.substring(2, 4)
})