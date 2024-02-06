let btnSoma = document.getElementById("btnSoma");
let btnDiminui = document.getElementById("btnDiminui");
let quantidade = document.getElementById("quantidade");
let preco = document.getElementById("preco");
let total = document.getElementById("total");

btnSoma.addEventListener("click", () => {
    soma();
    atualizaTotal();
});

btnDiminui.addEventListener("click", () => {
    diminui();
    atualizaTotal();
});

quantidade.addEventListener("blur", () => {
    atualizaTotal();
});

function diminui() {
    if (quantidade.value > 1) {
        quantidade.value = +quantidade.value - 1;
    }
}

function soma() {
    quantidade.value = +quantidade.value + 1;
    atualizaTotal();
}

function atualizaTotal() {
    let resultado =preco.textContent.substring(3,8) * quantidade.value
    total.innerText = `R$ ${resultado.toFixed(2)}`
}