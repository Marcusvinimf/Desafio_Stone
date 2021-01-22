function mapeamentoPraPagar(listaDeCompras, listaDeEmails){

    if(Object.values(listaDeCompras).length == 0 || listaDeEmails.length == 0)
    {
        return ("função não pode ser executada, alguma lista está vazia, certifique-se disso!");
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