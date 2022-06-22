var agenda = [
    
        
            {
                "evento":"Prova de Matemática",
                "data": " -  22/06/2022"
                
            },
            {
                "evento":"Futsal",
                "data": " -  31/07/2022"
                
            },
            {
                "evento":"Entrega de Trabalho",
                "data": " -  01/07/2022"
                
            }
         
]

console.log(agenda);

var tabela = document.querySelector('td');
 
for (var i = 0; i < agenda.length; i++){
     var myTd = document.createElement('td')
     var myP = document.createElement('p')


     myTd.textContent = agenda[i].evento +' '+ agenda[i].data
   
    tabela.appendChild(myTd)
    tabela.appendChild(myP)
     
}


