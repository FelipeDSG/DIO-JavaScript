const nota01 = 10
const nota02 = 10
const nota03 = 5

const media = ( nota01 + nota02 + nota03) / 3

console.log('Media: ' + media)

if (media < 5 ){
    console.log('Reprovado')
} else if ( media >= 5 && media < 7){
    console.log('Recuperação')
} else {
    console.log('Aprovado')
}