const login = require("../src/index")

describe('Função login', () => {

    test("Deve retornar true para login válido", () => {
        const user = 'admin'
        const pass = '123'

        const logar = login(user, pass)
        
        expect(logar).toBeTruthy()
    })

    test("Deve retornar false para senha incorreta", () => {
        const user = 'admin'
        const pass = '456'

        const logar = login(user, pass)
        
        expect(logar).toBeFalsy()
    })

    test("Deve retornar false para usuário incorreto", () => {
        const user = 'guga'
        const pass = '123'

        const logar = login(user, pass)
        
        expect(logar).toBeFalsy()
    })

    test("Deve retornar false quando dados não forem informados", () => {
        const user = null
        const pass = null

        const logar = login(user, pass)
        
        expect(logar).toBeFalsy()
    })

})