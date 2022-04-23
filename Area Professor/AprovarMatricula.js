var solicitacaoMatricula = document.getElementById('solicitacaoMatricula');
var aprovarSolicitacao = document.getElementById('aprovarSolicitacao');

function aceitarSolicitacoes(){
    // Futuramente cód para aceitar a solocitação
    solicitacaoMatricula.classList.add('d-none');
    window.confirm('Tem certeza que deseja aceitar a solicitação?');
    window.alert('Solicitação aceita!');
}

aprovarSolicitacao.addEventListener('click', aceitarSolicitacoes);