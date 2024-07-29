

function aplicarDesconto(valor, desconto) {
    return (valor - (valor * desconto / 100))
}
function aplicarJuros(valor, juros) {
    return (valor + (valor * juros / 100))
}

const preco = 100

const formPagamento = 1 // 1 - debito / 2 - dineiro ou pix / 3 - 2x  / 4 - 3x ou mais

if (formPagamento === 1) {
    console.log(aplicarDesconto(preco, 10))
} else if (formPagamento === 2) {
    console.log(aplicarDesconto(preco, 15))
} else if (formPagamento === 3) {
    console.log(preco)
} else if (formPagamento === 4) {
    console.log(aplicarJuros(preco, 10))
}