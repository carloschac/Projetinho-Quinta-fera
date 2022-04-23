// validação simples do login
function logar(){
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if (login == "admin" && senha == "admin") {
        alert('Logado com sucesso! Clique em OK para ser redirecionado para a Area do Professor')
        location.href = "AreaProf.html";
    }else{
        alert('Erro! Verifique se os campos estão em branco OU se seu login e senha estão corretos.')
    }
}

