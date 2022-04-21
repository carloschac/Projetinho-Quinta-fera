var buttonNovoEvento = document.getElementById('buttonNovoEvento');
var buttonCancelar = document.getElementById('buttonCancelar');
var novoEvento = document.getElementById('novoEvento');
var formNovoEvento = document.getElementById('formNovoEvento');
var inputNomeAluno = document.getElementById('nomeAluno');
var inputNomeEvento = document.getElementById('nomeEvento');
var inputDataEvento = document.getElementById('dataEvento');

function mostrarNovoEvento(){
    // mostrar o formulario quando clicar em novo evento
    novoEvento.classList.remove('d-none');
}

function ocultarNovoEvento(){
    // mostrar o formulario quando clicar em novo evento
    novoEvento.classList.add('d-none');
}

function novoEventoValido(nomeAluno, nomeEvento, dataEvento){
    if(nomeAluno.trim().length === 0) return false;
    if(nomeEvento.trim().length === 0) return false;
    var timestampEvento = Date.parse(dataEvento);
    if (isNaN(timestampEvento)) return false;
    var timestampAtual = (new Date()).getTime();
    if (timestampEvento < timestampAtual) return false;
    return true;

}

function salvarNovoEvento(event){
    event.preventDefault();
    var nomeAluno = inputNomeAluno.value;
    var nomeEvento = inputNomeEvento.value;
    var dataEvento = inputDataEvento.value;

    if (novoEventoValido(nomeAluno, nomeEvento, dataEvento)) {
        console.log('ok');
    }else {
        console.log('nao');
    }
}

buttonNovoEvento.addEventListener('click', mostrarNovoEvento);
buttonCancelar.addEventListener('click', ocultarNovoEvento);
formNovoEvento.addEventListener('submit', salvarNovoEvento);