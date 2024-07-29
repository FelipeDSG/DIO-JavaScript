/*Crie um programa que dado um número imprima sua tabuada*/

const numero = 5

function multiplicar( x, y){
    return x*y
}

for (i = 0; i < 10; i++) {
    tabuada = multiplicar( numero, (i+1))
    console.log(`${numero} * ${i+1} = ${tabuada}`)
}