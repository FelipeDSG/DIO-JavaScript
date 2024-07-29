let precoCombustivel = 5.61
let distanciaViagemKm = 500
let kmPorLitro = 10

const valorViagem = (distanciaViagemKm / kmPorLitro) * precoCombustivel

console.log(valorViagem.toFixed(2))