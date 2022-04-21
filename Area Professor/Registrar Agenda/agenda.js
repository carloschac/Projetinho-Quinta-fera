var buttonNovoEvento = document.getElementById('buttonNovoEvento');
var buttonCancelar = document.getElementById('buttonCancelar');
var novoEvento = document.getElementById('novoEvento');
var formNovoEvento = document.getElementById('formNovoEvento');
var inputNomeAluno = document.getElementById('nomeAluno');
var inputNomeEvento = document.getElementById('nomeEvento');
var inputDataEvento = document.getElementById('dataEvento');
var msgDeErro = document.getElementById('msgDeErro');

function mostrarNovoEvento(){
    // mostrar o formulario quando clicar em novo evento
    novoEvento.classList.remove('d-none');
}

function ocultarNovoEvento(){
    // mostrar o formulario quando clicar em novo evento
    novoEvento.classList.add('d-none');
}


function novoEventoValido(nomeAluno, nomeEvento, dataEvento){
    // validar entrada de dados no form

    var validarok = true;
    var erro = '';

    if(nomeAluno.trim().length === 0) {
        erro = 'o nome do aluno é obrigatório!';
        inputNomeAluno.classList.add('is-invalid');
        validarok = false;
    } else {
        inputNomeAluno.classList.remove('is-invalid');
    }

    if(nomeEvento.trim().length === 0) {
        erro = 'o nome do evento é obrigatório!';
        inputNomeEvento.classList.add('is-invalid');
        validarok = false;
    }else{
        inputNomeEvento.classList.remove('is-invalid');
    }

    var timestampEvento = Date.parse(dataEvento);
    var timestampAtual = (new Date()).getTime();
    if (isNaN(timestampEvento) || timestampEvento < timestampAtual) {
        if (erro.length > 0){
            erro += '<br>'
        }
        erro += 'A data não pode ser em branco e deve estar no futuro';
        inputDataEvento.classList.add('is-invalid');
        validarok = false;
    } else{
        inputDataEvento.classList.remove('is-invalid');
    }

    if (!validarok){
        msgDeErro.innerHTML = erro;
    }
    return validarok;
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