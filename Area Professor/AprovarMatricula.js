var solicitacaoMatricula = document.getElementById('solicitacaoMatricula');
var buttonAprovarSolicitacao = document.getElementById('buttonAprovarSolicitacao');
var buttonNegarSolicitacao = document.getElementById('buttonNegarSolicitacao');

function aceitarSolicitacoes(){
    // Futuramente cód para aceitar a solocitação
    solicitacaoMatricula.classList.add('d-none');
    alert('Matrícula aprovada!');
}
function negarSolicitacoes(){
    solicitacaoMatricula.classList.add('d-none');
    alert('Matrícula negada!');
}

buttonAprovarSolicitacao.addEventListener('click', aceitarSolicitacoes);
buttonNegarSolicitacao.addEventListener('click', negarSolicitacoes);