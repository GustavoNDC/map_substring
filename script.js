
//Guardando os valores
document.addEventListener("DOMContentLoaded", () => {
    const startInput = document.getElementById('start');
    const endInput = document.getElementById('end');
    const txtInput = document.getElementById('txtInput');
    const fullTxtDiv = document.getElementById('fullTxt');
    const substringResultadoDiv = document.getElementById('substringResultado');
    // Alterando tbm
    txtInput.addEventListener('input', () => {
        if (txtInput.value.trim() !== '') {
            fullTxtDiv.textContent = txtInput.value;
        } else {
            fullTxtDiv.textContent = 'Hello World';
        }
    });
});

//Pegar valores e por na formula para usar substring
function aplicarSubstring() {
    const start = parseInt(document.getElementById('start').value);
    const end = parseInt(document.getElementById('end').value);
    const txt = document.getElementById('fullTxt').textContent;
    const substring = txt.substring(start, end);
    document.getElementById('substringResultado').textContent = substring;

}

//map
const arrayOriginal = [1, 2, 4, 8, 16, 32, 64];

//Mostrar valor do slider
function mostrarValor() {
    const slider = document.getElementById('slider');
    const valorSlider = document.getElementById('valorSlider');
    valorSlider.innerText = slider.value;
}

//Pegar valor do slider e por usar a função map
function multiplicarArray() {
    const multiplicador = document.getElementById('slider').value;

    if (multiplicador === '') {
        alert('Por favor, insira um número.');
        return;
    }

    const novoArray = arrayOriginal.map(numero => numero * multiplicador);
    document.getElementById('novoArray').innerText = 'Novo array: ' + JSON.stringify(novoArray);
}


//mostrar codigo substring
function toggleCode(id) {
    const codeBlock = document.getElementById(id);
    if (codeBlock.style.display === 'none') {
        codeBlock.style.display = 'block';
    } else {
        codeBlock.style.display = 'none';
    }
}