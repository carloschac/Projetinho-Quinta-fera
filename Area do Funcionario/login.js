function logar() {
  var login = document.getElementById('login').value
  var senha = document.getElementById('senha').value

  if (login == 'admin' && senha == 'admin') {
    alert('Logado com sucesso! Clique em OK para ser redirecionado para a Area da Secretaria.')
    location.href = './AreaSecretaria.html'
  } else {
    alert('Erro! Verifique se os campos estão em branco OU se seu login e senha estão corretos.')
  }
}
