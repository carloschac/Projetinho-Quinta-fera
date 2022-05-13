function localizar() {
  var nSolicitacao = document.getElementById('solicitacao').value
  if (nSolicitacao == '9336') {
    alert('Solicitação localizada!! clique em OK ser redirecionado.')
    location.href = 'financeiroBoleto.html'
  } else {
    alert('Solicitação não foi localizada!!')
  }
}
