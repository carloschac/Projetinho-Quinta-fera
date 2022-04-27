/*aba Agenda de provas*/

function func1() {
    window.alert('Falta 1 semana para as provas do primeiro Bimestre, lembre-se de estudar!')
}

/*aba Atividades Extras*/

function func2() {
    window.alert('Atividade Extra ainda não esta disponivel para ingresso! Tente mais tarde!')
}

function func3() {
    window.alert('Ainda não esta funcionando. Assim que ajustarmos te avisaremos.')
    /*window.prompt('Digite seu numero para avisarmos por SMS')
    window.alert('Obrigado(a)! Até a proxima.')*/
}


/* Aba Notas e Faltas*/
function faltas() {
    var frequencia = document.getElementById('aluno').value
    alert('O aluno ' + aluno + 'Possui um total de 0 falta(s) em 79 dias de aula')
  }

function nota(){
    /*document.getElementById('registro_nome').innerHTML = document.getElementById('nome').value;
    document.getElementById('registro_disciplina').innerHTML = document.getElementById('disciplina').value;
    document.getElementById('registro_nota').innerHTML = document.getElementById('nota').value;
    document.getElementById('registro_data').innerHTML = document.getElementById('data').value;

}*/

/*tentando resolver problema da aba notas e faltas*/

var nome = document.getElementById('nome');
var disciplina = document.getElementById('disciplina');
var nota = document.getElementById('nota');
var data = document.getElementById('data');
var msgDeErro = document.getElementById('msgDeErro');
var tabelaEventos = document.getElementById('tabelaEventos');

var listaEventos =[];
var eventoExemplo = {
    nomeAluno: 'Ana Gabriela Chaves',
    nomeDisciplina: 'Algoritmos de Programas',
    notaAluno: '7.6',
    data: new Date(),
};


var listaEventos.push(eventoExemplo);
}

function atualizarListaEventos(){

    if(listaEventos.lengt5 === 0){
        tabelaEventos.innerHTML = '<tr><td colspan="4">Nenhum evento</td></tr>';
        return;
    }
    tabelaEventos.innerHTML = '';

function limparNovoEvento() {
    inputNomeAluno.value ='';
    inputNomeEvento.value='';
    inputDataEvento.value='';
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

/*
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
*/