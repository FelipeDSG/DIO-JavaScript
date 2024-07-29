

const { gets, print } = require('./funcoes-auxiliares')
//const funcoes = require('./funcoes-auxiliares')

//console.log(gets())

/*const numerosSorteados = []

for (i = 0; i < 5; i++) {
    const numeroSorteado = gets()
    numerosSorteados.push(numeroSorteado)
}

let maiorValor = 0

for (i = 0; i < numerosSorteados.length; i++) {
    const numeroSorteado = numerosSorteados[i]
    if (numeroSorteado > maiorValor) {
        maiorValor = numeroSorteado
    }

}

print(numerosSorteados)
print(maiorValor)*/

let maiorValorEncontrado = 0

for (i = 0; i < 5; i++) {
    const numeroSorteado = gets()
    if (numeroSorteado > maiorValorEncontrado) {
        maiorValorEncontrado = numeroSorteado
    }
}

print(maiorValorEncontrado)