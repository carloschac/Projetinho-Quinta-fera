var individual = document.getElementById('individual');
var buttonIndividual = document.getElementById('buttonIndividual');



function mostrarRelatorioIndividual() {
    individual.classList.remove('d-none');
}

function gerarRelatorio1(){
    document.getElementById('relatorio_disciplina').innerHTML = document.getElementById('disciplina').value;
    document.getElementById('relatorio_nome').innerHTML = document.getElementById('nome').value;
    document.getElementById('relatorio_nota1b').innerHTML = document.getElementById('nota1b').value;
    document.getElementById('relatorio_nota2b').innerHTML = document.getElementById('nota2b').value;
    document.getElementById('relatorio_frequencia').innerHTML = document.getElementById('frequencia').value;
    document.getElementById('relatorio_obs').innerHTML = document.getElementById('obs').value;
    window.print();
}

buttonIndividual.addEventListener('click', mostrarRelatorioIndividual);