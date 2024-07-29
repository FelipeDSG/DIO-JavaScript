// Crie um programa que seja capaz de percorrer uma lista de numeros e imprima cada numero par encontrado

const numeros = [6,7,8,9,11,12]



for (i = 0; i < numeros.length; i++) {
    let numeroPar = numeros[i] % 2 ===0 ? console.log(numeros[i]) : null
}