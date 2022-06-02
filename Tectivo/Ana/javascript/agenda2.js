const objs =[
    {
        "Nome" : "Ana Gabriela de Chaves",
        "Turma" : "Sexto ano",
        "Email": "aninha@gmail.com",
        "Compromissos" : ["Prova", "Futsal"],
        "Datas" : ["21.7", "24.6"]

    },

    {
        "Nome" : "Gabriela de Chaves",
        "Turma" : "Segundo ano",
        "Email": "gabi@gmail.com",
        "Compromissos" : ["Prova", "Volei"],
        "Datas" : ["28.7", "22.6"]

    }
]
console.log (objs);
console.log(typeof objs);


 const jsonData = JSON.stringify(objs); 
 console.log (jsonData);
 console.log(typeof jsonData);

 const objson = JSON.parse(jsonData);

 console.log (objson);
 console.log(typeof objson);

 objson.map((agenda2) => {
     console.log(agenda2.Nome);
     console.log(agenda2.Compromissos);
     console.log(agenda2.Datas);
 })