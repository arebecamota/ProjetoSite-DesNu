let valorTotal = [0,0,0,0]
let valorProduto = [156.00,142.00,154.00,129.00]
let qtd = [0,0,0,0]

function adicionarItem(item) {
    let quantidade = document.getElementById('quantidade' + item);
    let total = document.getElementById('total' + item);
    qtd[item]++
    valorTotal[item] = qtd[item] * Number.parseFloat(valorProduto[item]);
    quantidade.innerHTML = qtd[item];
    total.innerHTML = valorTotal[item].toFixed(2);
    subTotal()
}

function removerItem(item) {
    let quantidade = document.getElementById('quantidade' + item);
    let total = document.getElementById('total' + item);
    if (qtd[item] > 0){    
        qtd[item]--;
        valorTotal[item] = qtd[item] * Number.parseFloat(valorProduto[item]);
        quantidade.innerHTML = qtd[item];
        total.innerHTML = valorTotal[item].toFixed(2);   
    }   
    subTotal()
}

function subTotal() {
     let valorTotalCompra = document.getElementById('valorTotalCompra');
     let valor = 0;

     for (let i = 0; i < valorTotal.length; i++) {
        valor += valorTotal[i];   
     }
     valorTotalCompra.innerHTML = valor.toFixed(2)
}