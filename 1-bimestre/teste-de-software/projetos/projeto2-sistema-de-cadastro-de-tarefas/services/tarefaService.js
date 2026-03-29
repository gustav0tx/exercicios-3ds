const { adicionarTarefa, listaTarefas } = require('../controllers/tarefaController')

const cadastrarTarefa = (descricao) => {

    if (!descricao) { return false }

    const tarefa = { descricao: descricao }

    adicionarTarefa(tarefa)

    return true

}

const totalTarefas = () => {

    return listaTarefas().length

}

const listarTarefas = () => {

    return listaTarefas()

}

module.exports = {
    cadastrarTarefa,
    totalTarefas,
    listarTarefas
}