function lançar() {
    alert("Notas e Faltas lançadas com sucesso!")
}

function imprimir() {
    window.print();
}

// Função para puxar Json

var disciplina = [ 
        
    {
        "Disciplina":"Matemática",
        "Nota" : "5.5", 
        "Faltas" : "3"

    },
    {
        "Disciplina":"Portugues",
        "Nota" : "7", 
        "Faltas" : "13"        
    },
    {
        "Disciplina":"Geografia",
        "Nota" : "9.5", 
        "Faltas" : "0"        
    },
    {
        "Disciplina":"Artes",
        "Nota" : "6", 
        "Faltas" : "1"        
    }
 
]

console.log(disciplina);