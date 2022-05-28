var buttonNovoEvento = document.getElementById('buttonNovoEvento');
var buttonCancelar = document.getElementById('buttonCancelar');
var novoEvento = document.getElementById('novoEvento');
var formNovoEvento = document.getElementById('formNovoEvento');
var inputNomeAluno = document.getElementById('nomeAluno');
var inputNomeEvento = document.getElementById('nomeEvento');
var inputDataEvento = document.getElementById('dataEvento');
var msgDeErro = document.getElementById('msgDeErro');
var tabelaEventos = document.getElementById('tabelaEventos')

var listaEventos =[];
var eventoExemplo = {
    nomealun: 'Ana Gabriela de Chaves',
    nomeev: 'Aula de JavaScript',
    data: new Date(),
};
listaEventos.push(eventoExemplo)

function atualizarListaEventos(){

    if(listaEventos.lengt5 === 0){
        tabelaEventos.innerHTML = '<tr><td colspan="3">Nenhum evento</td></tr>';
        return;
    }
    tabelaEventos.innerHTML = '';
    for(var i = 0; i < listaEventos.length; i ++){
        var evento = listaEventos[i];
        var linha = document.createElement('tr');
        var celulaNome = document.createElement('td');
        var celulaEvento = document.createElement('td');
        var celulaData = document.createElement('td');
        var celulaAcoes = document.createElement('td');
        celulaNome.innerText = evento.nomealun;
        celulaEvento.innerText = evento.nomeev;
        celulaData.innerText = evento.data;
        linha.appendChild(celulaNome);
        linha.appendChild(celulaEvento);
        linha.appendChild(celulaData);
        linha.appendChild(celulaAcoes);
        tabelaEventos.appendChild(linha);

    }
}
function limparNovoEvento() {
    inputNomeAluno.value ='';
    inputNomeEvento.value='';
    inputDataEvento.value='';
}

function mostrarNovoEvento(){
    // mostrar o formulario quando clicar em novo evento
    novoEvento.classList.remove('d-none');
}

function ocultarNovoEvento(){
    // mostrar o formulario quando clicar em novo evento
    novoEvento.classList.add('d-none');
    limparNovoEvento();
    inputNomeAluno.classList.remove('is-invalid');
    inputNomeEvento.classList.remove('is-invalid');
    inputDataEvento.classList.remove('is-invalid');
    msgDeErro.classList.add('d-none');
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
        msgDeErro.classList.remove('d-none');
    }else{
        msgDeErro.classList.add('d-none');
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
        listaEventos.push({
            nomealun: nomeAluno,
            nomeev: nomeEvento,
            data: new Date(dataEvento),
        });
        atualizarListaEventos();
        ocultarNovoEvento();
    }else {
        console.log('nao');
    }
}

buttonNovoEvento.addEventListener('click', mostrarNovoEvento);
buttonCancelar.addEventListener('click', ocultarNovoEvento);
formNovoEvento.addEventListener('submit', salvarNovoEvento);
window.addEventListener('load', atualizarListaEventos);