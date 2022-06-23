var boleto = [
    
        
    {
        "disciplina":"Natação",
        "valor": " - R$100,00",
        "data":  " - 10/07/2000"

        
    },
    {
        "disciplina":"Futsal",
        "valor": " - R$90,00",
        "data":  " - 10/07/2000"
        
    },
    {
        "disciplina":"Mensalidade Escola TECTIVO",
        "valor": " - R$ 400,00",
        "data":  " - 10/07/2022"
        
    }
 
]

var tabela = document.querySelector('td');
 
for (var i = 0; i < boleto.length; i++){
     var myTd = document.createElement('td')
     var myP = document.createElement('p')


     myTd.textContent = boleto[i].disciplina +' '+ boleto[i].valor+' '+ boleto[i].data
   
    tabela.appendChild(myTd)
    tabela.appendChild(myP)
     
}