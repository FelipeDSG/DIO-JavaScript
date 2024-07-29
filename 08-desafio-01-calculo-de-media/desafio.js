/* Faça um programa que receba a media de um aluno.
    Caso a media seja < 5 imprima "Reprovado"
    Caso a media seja >= 5 e < 7 imprima "Recuperação
    Caso a media seja >= 7 imprima "Aprovado" */

    const { gets, print } = require('./funcoes-auxiliares')



    const media = gets()
    if (media < 5) {
        print('Reprovado')
    }
    else if (media >= 5 && media < 7) {
        print('Recuperação')
    }
    else {
        print('Aprovado')
    }