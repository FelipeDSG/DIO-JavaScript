const preco = 100

const formPagamento = 4 // 1 - debito / 2 - dineiro ou pix / 3 - 2x  / 4 - 3x ou mais

if (formPagamento === 1) {
    const totalPagar = preco * 0.9
    console.log(totalPagar)
} else if (formPagamento === 2) {
    const totalPagar = preco * 0.85
    console.log(totalPagar)
} else if (formPagamento === 3) {
    console.log(preco)
} else if (formPagamento === 4) {
    const totalPagar = preco * 1.1
    console.log(totalPagar)
}