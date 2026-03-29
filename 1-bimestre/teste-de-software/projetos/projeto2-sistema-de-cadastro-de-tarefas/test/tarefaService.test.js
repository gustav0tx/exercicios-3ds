const { cadastrarTarefa, totalTarefas, listarTarefas } = require('../services/tarefaService')
const { limpar } = require('../controllers/tarefaController')

beforeEach(() => {

    limpar()

})

describe('Testando service de tarefas', () => {

    test('Tarefa não deve ser cadastrada sem descrição', () => {

        expect(cadastrarTarefa()).toBeFalsy()
        
    })

    test('Deve retornar o total de tarefas cadastradas', () => {

        cadastrarTarefa('ler')

        expect(totalTarefas()).toBe(1)
        
    })

    test('Deve começar com o banco vazio', () => {

        expect(totalTarefas()).toBe(0)
        
    })

    test('Deve conter tarefa cadastrada', () => {

        cadastrarTarefa('estudar')

        expect(listarTarefas()).toContainEqual({descricao: 'estudar'})
        
    })

})