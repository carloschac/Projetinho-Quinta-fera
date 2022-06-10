var agenda = [
    
        
            {
                "evento":"Prova de Matemática",
                "data": " -  22/06/2022"
                
            },
            {
                "evento":"Futsal",
                "data": " -  31/07/2022"
                
            }
         
]

console.log(agenda);

var tabela = document.querySelector('td');
 
for (var i = 0; i < agenda.length; i++){
     var myTd = document.createElement('td')
     var myP = document.createElement('p')
    //  var MyTd2 = document.createElement ('td')

     myTd.textContent = agenda[i].evento +' '+ agenda[i].data
    //  myTd2.textContent = agenda[i].data
    tabela.appendChild(myTd)
    tabela.appendChild(myP)
     
}
  
    //  tabela.appendChild(myTd2)
     console.log(myTd)

