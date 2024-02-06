let inputNumero = document.getElementById('input-numero');
let selectMes = document.getElementById('select-mes');
let selectAno = document.getElementById('select-ano');

inputNumero.addEventListener('blur', validaNumero);

function validaNumero() {
    if(inputNumero.value.length == 19) {
        inputNumero.classList.remove('is-invalid')
    } else {
        inputNumero.classList.add('is-invalid')
    }
}

let meses = [
    { 
        'num': '01',
        'nome':'Janeiro'
    },
    { 
        'num': '02',
        'nome':'Fevereiro'
    },
    { 
        'num': '03',
        'nome':'Março'
    },
    { 
        'num': '04',
        'nome':'Abril'
    },
    { 
        'num': '05',
        'nome':'Maio'
    },
    { 
        'num': '06',
        'nome':'Junho'
    },
    { 
        'num': '07',
        'nome':'Julho'
    },
    { 
        'num': '08',
        'nome':'Agosto'
    },
    { 
        'num': '09',
        'nome':'Setembro'
    },
    { 
        'num': '10',
        'nome':'Outubro'
    },
    { 
        'num': '11',
        'nome':'Novembro'
    },
    { 
        'num': '12',
        'nome':'Dezembro'
    }
];


selectMes.innerHTML += meses.map(item => {
    return `<option value='${item.num}'>${item.nome}</option>`
})


let anoAtual = new Date().getFullYear();

for(let i = 0; i <= 10; i++) {
    selectAno.innerHTML += `<option>${anoAtual + i}</option>`
}
