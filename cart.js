let valorTotal = [0,0,0,0];
let valorProduto = [129.00, 186.00, 142.00, 156.00];
let qtd = [0, 0, 0, 0];

function adicionarQtd(item){
    let quantidade = document.getElementById("quantidade" + item);
    let total = document.getElementById("total" + item);
    qtd[item]++;
    valorTotal[item] = Number.parseFloat(valorProduto[item].toFixed(2)) * qtd[item];
    quantidade.innerHTML = qtd[item];
    total.innerHTML = valorTotal[item].toFixed(2);
    subTotal();
}

function removerQtd(item){
    if(qtd[item] > 0){
         let quantidade = document.getElementById("quantidade" + item);
         let total = document.getElementById("total" + item);
         qtd[item]--;
         valorTotal[item] = Number.parseFloat(valorProduto[item].toFixed(2)) * qtd[item];
         quantidade.innerHTML = qtd[item];
         total.innerHTML = valorTotal[item].toFixed(2);
         subTotal();
    }
}

function subTotal(){ 
    let valorTotalCompra = document.getElementById("valorTotalCompra");
    let valor = 0;
    for(let i = 0; i < valorTotal.length; i++){    
        valor += valorTotal[i];
    }
    valorTotalCompra.innerHTML = valor.toFixed(2);
}