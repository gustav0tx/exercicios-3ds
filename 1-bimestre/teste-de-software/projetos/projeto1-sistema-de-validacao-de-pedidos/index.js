const validarPedido = (pedido) => {
    if(pedido.total <= 0) {
        return false
    } else if (pedido.cliente == null) {
        return false
    } else if (pedido.itens == null) {
        return false
    } else {
        return true
    }
}

module.exports = validarPedido