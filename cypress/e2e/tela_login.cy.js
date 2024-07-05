import { CursosPageObject } from "./page_objects/curso_page_object"
import { selectValue, shouldHave, click, typeText } from './utils/commands'

describe('Cadastro de usuário', () => {
    const page = new CursosPageObject();

    beforeEach(() => {
        page.visit()
        click(page.logoutButton)
        click(page.cadastro)
        const { navbar } = page
        cy.get(navbar.div).invoke('remove');
    })

    it('Validar formulario', () => {
        typeText(page.inputLogin, 'aaaa')
        typeText(page.inputSenha, '1234')
        typeText(page.inputNome, 'Teste')
        typeText(page.inputTelefone, '21965847415')
        typeText(page.inputData, '2000-01-01')
        typeText(page.inputIdent, '26598475165')
        typeText(page.inputNumCasa, '654')
        typeText(page.inputComplemento, 'Fundos')
        typeText(page.inputLogradouro, 'Luiz Meirelles')
        typeText(page.inputBairro, 'Varzea')
        typeText(page.inputCep, '12698456')
        typeText(page.inputCidade, 'Teresópolis')
        selectValue(page.selectorUF, "Rio de Janeiro")
        click(page.cadastroButton)
    })

    it('Validar botao de mostrar senha', () => {
        typeText(page.inputSenha, '1234')
        shouldHave(page.inputSenha, 'have.prop', 'nodeName', 'INPUT').and('have.attr', 'type', 'password')
        click(page.maskPass)
        shouldHave(page.inputSenha, 'have.prop', 'nodeName', 'INPUT').and('have.attr', 'type', 'text')
    })

    it('Login', () => {
        page.visit()
        click(page.logoutButton)

        typeText(page.login, 'aaaa')
        typeText(page.loginPass, '1234')
        click(page.entrarButton)
    })
})