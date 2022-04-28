// JS - Agenda Provas
function func1() {
    window.alert('Olá, estamos na semana de provas, não esqueça de estudar ;)')
}

// JS - Atv Extras
function func4(){
    window.alert('Olá, conteudo ainda não esta disponivel para ingresso, tente mais tarde!')
}

// JS - Chat
function chat() {
    window.open("https://web.whatsapp.com/", '_blank');
}

// JS - Grade Aulas
// JS - Material
function baixar() {
    window.alert('Conteúdo baixado!');
}

// JS - Notas e Frequencias
function func2() {
    if (document.getElementById('infosNotas').style.display == 'block') {
        document.getElementById('infosNotas').style.display = 'none';
    }else{
        document.getElementById('infosNotas').style.display = 'block';
    }
    
}

function func3() {
    if (document.getElementById('infosFaltas').style.display == 'block') {
        document.getElementById('infosFaltas').style.display = 'none';
        
    }else{
        document.getElementById('infosFaltas').style.display = 'block';
        
    }
}