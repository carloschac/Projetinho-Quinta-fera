var boleto = [
    
        
    {
        "aluno":"Ana Gabriela de Chaves",
        "valor": " - R$ 455,90",
        "data":  " - 24/07/2022"

        
    },
    {
        "aluno":"Carina Rosa",
        "valor": " - R$ 788,90",
        "data":  " - 10/07/2022"
        
    },
    {
        "aluno":"Carlos Camilo",
        "valor": " - R$ 155,90",
        "data":  " - 10/09/2022"
        
    }
 
]

var tabela = document.querySelector('td');
 
for (var i = 0; i < boleto.length; i++){
     var myTd = document.createElement('td')
     var myP = document.createElement('p')


     myTd.textContent = boleto[i].aluno +' '+ boleto[i].valor+' '+ boleto[i].data
   
    tabela.appendChild(myTd)
    tabela.appendChild(myP)
     
}
