// validação simples do login
// function logar(){
//     var login = document.getElementById('login').value;
//     var senha = document.getElementById('senha').value;

//     if (login == "aluno" && senha == "aluno") {
//         alert('Logado com sucesso! Clique em OK para ser redirecionado para a Area do Aluno')
//         location.href = "AreaAluno.html";
//     }else{
//         alert('Erro! Verifique se os campos estão em branco OU se seu login e senha estão corretos.')
//     }
// }

var login1 = [
    
        
    {
        "email":"ana@gmail.com",
        "senha": "aninha123"
        
    },
    {
        "email":"carina@gmail.com",
        "senha": "motoca123"
        
    }
 
]

var login2 = [
    
        
    {
        "email":"carlos@gmail.com",
        "senha": "euamolol"
        
    },
    {
        "email":"eduarda@gmail.com",
        "senha": "loirinha"
        
    }
 
]

var inputEmail = document.getElementById('inputEmail');
var inputSenha = document.getElementById('inputSenha');
var msgDeErro = document.getElementById('msgDeErro');
var buttonEntrar = document.getElementById('buttonEntrar');

function validarLogin(inputEmail, inputSenha){
    // validar entrada de dados no form

    var validarok = true;
    var erro = '';

    if(inputEmail.trim().length === 0) {
        erro = 'o email é obrigatório';
        inputEmail.classList.add('is-invalid');
        validarok = false;
    } else {
        inputEmail.classList.remove('is-invalid');
    }

    if(inputSenha.trim().length === 0) {
        erro = 'o email é obrigatório';
        inputSenha.classList.add('is-invalid');
        validarok = false;
    } else {
        inputSenha.classList.remove('is-invalid');
    }

    if (!validarok){
        msgDeErro.innerHTML = erro;
        msgDeErro.classList.remove('d-none');
    }else{
        msgDeErro.classList.add('d-none');
    }
    return validarok;
}