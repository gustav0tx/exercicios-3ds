let tarefas = require('../database/tarefaDatabase')

const adicionarTarefa = (tarefa) => {

    tarefas.push(tarefa)

}

const listarTarefas = () => {

    return tarefas

}

const limpar = () => {

    tarefas = []

}

module.exports = {
    adicionarTarefa,
    listarTarefas,
    limpar
}