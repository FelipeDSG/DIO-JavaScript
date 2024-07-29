/* Faça um programa que calcule e imprima a ser transferido para um funcionario.
Para realizar o calculo receba o valor bruto do salário e o adicional dos benefícios.
O slario a ser transferido é calculado da seguinte maneira:

Valor bruto do salario - percentual de imposto mediante a faixa salarial  + adicional dos beneficios.

para calcular o percentual de imposto seguem as aliquotas:

De R$ 0.00 a R$ 1100.00 = 5.00%
De R$ 1100.01 a R$ 2500.00 = 10%
Maior que 2500.00 = 15.00%
*/

const { gets, print } = require('./funcoes-auxiliares')

const salario = gets()
const adicionalBeneficio = gets()

function calcularPorcentagemDesconto(valor, porcentagem) {
     return valor * porcentagem
}

function calcularSalarioReceber(valor, desconto, adicional) {
     return valor - desconto + adicional
}

function pegarAliquota(salario) {

     if (salario <= 1100.00) {
          return 0.05
     } else if (salario > 1100.00 && salario <= 2500.00) {
          return 0.10
     } else {
          return 0.15
     }
}

const aliquotaImposto = pegarAliquota(salario)
const valorImposto = calcularPorcentagemDesconto(salario, aliquotaImposto )
const salarioReceber = calcularSalarioReceber(salario, valorImposto, adicionalBeneficio)

print(salarioReceber)