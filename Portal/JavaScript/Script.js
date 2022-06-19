function lançar() {
    alert("Notas e Faltas lançadas com sucesso!")
}

// Botão baixar

function dowload(){
    document.getElementById('btn_imagem2').click();    
}

// Botão imprimir

function imprimir() {
    window.print();
}

// Função para puxar Json

// var disc = [ 
        
//     {
//         "Disciplina":"Matemática",
//         "Nota" : "5.5", 
//         "Faltas" : "3"

//     },
//     {
//         "Disciplina":"Portugues",
//         "Nota" : "7", 
//         "Faltas" : "13"        
//     },
//     {
//         "Disciplina":"Geografia",
//         "Nota" : "9.5", 
//         "Faltas" : "0"        
//     },
//     {
//         "Disciplina":"Artes",
//         "Nota" : "6", 
//         "Faltas" : "1"        
//     }
 
// ]

// console.log(disc);
// var tabela = document.querySelector('td');
 
// for (var i = 0; i < disc.length; i++){
//     var myTd = document.createElement('td')
//     var myP = document.createElement('p')

//     myTd.textContent = disc[i].Disciplina +' '+ disc[i].Nota
//     myTd.textContent = disc[i].Disciplina +' '+ disc[i].Faltas
   
//     tabela.appendChild(myTd)
//     tabela.appendChild(myP)     
// }    
//     console.log(myTd)