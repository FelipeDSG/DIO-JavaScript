/* 1- Crie uma classe para represntar carros.
Os carros possuem uma marca, uma cor e um gasto médio de combustível por km rodado.
Crie um método que dado a quantidade de KM e o preço do combustível nos dê o valor gasto em reais para realizar este percurso
*/

class Carro {
    marca
    cor
    gastoMedioKmRodado

    constructor(marca, cor, gastoMedioKmRodado) {
        this.marca = marca
        this.cor = cor
        this.gastoMedioKmRodado = gastoMedioKmRodado
    }

    calculaViajem(precoCombustivel, kmRodado) {
        return this.gastoMedioKmRodado * precoCombustivel * kmRodado
    }

    descrever(precoCombustivel, kmRodado) {
        const valorGasto = this.calculaViajem(precoCombustivel, kmRodado)
        console.log(`O carro de marca ${this.marca} e cor ${this.cor} fazem ${this.gastoMedioKmRodado.toFixed(2)} litros por KM gastou ${valorGasto.toFixed(2)} reais para percorrer ${kmRodado} KM.`)
    }

}

const gol = new Carro('VW', 'Vermelha', 1 / 12)


gol.descrever(6, 100)