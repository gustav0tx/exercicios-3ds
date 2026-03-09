const calcularTaxa = require('../services/taxaService')

describe('Testando função calcularTaxa', () => {

    let valor = 0

    beforeEach(() => {
        valor = 0
    })

    test('Se o valor for maior que 500 recebe taxa de 5%', () => {
        
        valor = 520
        
        expect(calcularTaxa(valor)).toBe(546)

    })

    test('Se o valor for menor que 500 sem taxa de 5%', () => {
        
        valor = 490

        expect(calcularTaxa(valor)).toBe(490)

    })

})