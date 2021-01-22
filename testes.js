function mapeamentoPraPagar(listaDeCompras, listaDeEmails){

    if(Object.values(listaDeCompras).length == 0 || listaDeEmails.length == 0)
    {
        return ("função não pode ser executada, alguma lista está vazia, certifique-se disso!")
    }

    let arrQtd = [];
    let arrPreco = [];
    
    for (let i in listaDeCompras)
    {
        arrQtd.push(listaDeCompras[i].qtd);
        arrPreco.push(listaDeCompras[i].preco);
    }

    let multiplicacao = [];

    for(let i=0; i<arrQtd.length; i++)
    {
        multiplicacao.push(arrQtd[i] * arrPreco[i]);
    } 

    let soma = 0;

    for(let s of multiplicacao)
    {
        soma += s;
    }

    let divisao = soma/listaDeEmails.length;
    let divisaomid = Math.floor(divisao);
    let divisaoLast = soma - divisaomid * (listaDeEmails.length - 1);

    let mapa = new Map();
    
    for(let i=0; i<listaDeEmails.length -1; i++)
    {
        mapa.set(listaDeEmails[i], divisaomid);
    } 
    
    mapa.set(listaDeEmails[listaDeEmails.length -1], divisaoLast);

    return mapa;
}

let lista = [{
    item: "batata",
    qtd: 1,
    preco: 24
}];

let emails = [
    "1@email.com",
    "2@email.com",
    "3@email.com",
    "4@email.com",
    "5@email.com",
    
];

let lista2 = [];
let emails2 = [];

let lista3 = [{
    item: "pera",
    qtd: 1,
    preco: 50
},
{
    item: "uva",
    qtd: 1,
    preco: 25
},
{
    item: "maça",
    qtd: 1,
    preco: 25
}];

let emails3 = [
    "1@email.com",
    "2@email.com",
    "3@email.com"
];

let lista4 = [{
    item: "pera",
    qtd: 56,
    preco: 50
},
{
    item: "uva",
    qtd: 12,
    preco: 25
},
{
    item: "maça",
    qtd: 18,
    preco: 25
}];

let emails4 = [
    "1@email.com",
    "2@email.com",
    "3@email.com"
];

console.log(mapeamentoPraPagar(lista, emails));

console.log(mapeamentoPraPagar(lista2, emails));

console.log(mapeamentoPraPagar(lista, emails2));

console.log(mapeamentoPraPagar(lista2, emails2));

console.log(mapeamentoPraPagar(lista2, emails3));

console.log(mapeamentoPraPagar(lista3, emails2));

console.log(mapeamentoPraPagar(lista3, emails));

console.log(mapeamentoPraPagar(lista, emails3));

console.log(mapeamentoPraPagar(lista3, emails3));

console.log(mapeamentoPraPagar(lista4, emails4));