let precoGasolina = 5.61
let precoEtanol = 5.00
let distanciaViagemKm = 500
let kmPorLitro = 10
const tipoCombustivelUsado = 'Etanol'

const totalLitros = distanciaViagemKm / kmPorLitro
let valorViagem = ''

if (tipoCombustivelUsado === 'gasolina') {
    valorViagem = totalLitros * precoGasolina
} else {
    valorViagem = totalLitros * precoEtanol
}

console.log(valorViagem.toFixed(2))