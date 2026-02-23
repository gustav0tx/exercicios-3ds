const validarPedido = require('../index')

test('O pedido deve ter valor total maior que 0', () => {
    const pedido = { cliente: 'guga', total: 0, itens: ['Produto 1'] }
    expect(validarPedido(pedido)).toBeFalsy()
})

test('O pedido deve possuir a propriedade cliente', () => {
    const pedido = { total: 12, itens: ['Produto 1'] }
    expect(validarPedido(pedido)).toBeFalsy()
})

test('O pedido deve possuir um array itens', () => {
    const pedido = { cliente: 'guga', total: 123 }
    expect(validarPedido(pedido)).toBeFalsy()
})

test('Pedido válido, deve retornar true', () => {
    const pedido = { cliente: 'guga', total: 1711, itens: ['Produto 1'] }
    expect(validarPedido(pedido)).toBeTruthy()
})