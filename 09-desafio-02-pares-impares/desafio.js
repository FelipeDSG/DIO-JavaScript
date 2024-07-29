/* Faça um programa que receba N (quantidade de números)
Imprima o maior numero par e o menor numero impar. */

const { gets, print } = require('./funcoes-auxiliares')

let menorImpar = null
let maiorPar = null
const n = gets()

for (let i = 0; i < n; i++) {
    const valor = gets()
    if (valor % 2 === 0) {
        if (maiorPar === null || valor > maiorPar) {
            maiorPar = valor
        }

    } else {
        if (menorImpar === null || valor < menorImpar) {
            menorImpar = valor
        }

    }
}
print(maiorPar)
print(menorImpar)
