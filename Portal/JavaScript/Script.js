function lançar() {
  alert('Lançado com sucesso!')
}

// Botão baixar

function dowload() {
  document.getElementById('btn_imagem2').click()
}

// Botão imprimir

function imprimir() {
  window.print()
}

//ocultar notas

let dropdown = document.getElementById('droplist')
optionPrev = 'null'

function combo(value) {
  if (dropdown.options[dropdown.selectedIndex].value != 1) {
    let option = dropdown.options[dropdown.selectedIndex].value
    if (optionPrev != 'null') {
      let optionHide = document.getElementById(optionPrev)
      optionHide.classList.toggle('hidden')
    }
    let optionShow = document.getElementById(option)
    optionShow.classList.toggle('hidden')
    optionPrev = option
  }
}
dropdown.onchange = combo
console.log(combo)

//ocultar faltas

// function func3() {
//     if (document.getElementById('infosFaltas').style.display == 'none') {
//         document.getElementById('infosFaltas').style.display = 'block';

//     }
//     else{
//         document.getElementById('infosFaltas').style.display = 'none';

//     }
// }

// var btn = document.getElementById('matematica');
// var container = document.querySelector('.table');
// btn.addEventListener('click', function() {

//   if(container.style.display === 'block') {
//       container.style.display = 'none';
//   } else {
//       container.style.display = 'block';
//   }
// });

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
