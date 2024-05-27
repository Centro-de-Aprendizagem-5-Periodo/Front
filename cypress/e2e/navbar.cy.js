import { CursosPageObject } from './page_objects/curso_page_object'
import { click, assertVisible, assertNotVisible, assertChildWithAttribute, getChild, assertText, clickButtonWithText } from './utils/commands'

describe('navbar', () => {
    const page = new CursosPageObject()

    beforeEach(page.visit)

    it('botao de hamburger deve abrir navbar', () => {
        const { navbar } = page
        click(navbar.closeButton)
        click(navbar.openButton)
        assertVisible(navbar.div)
    })

    it('botao sair deve deslogar usuario', () => {
        click(page.logoutButton)
        // aguardando implementacao
    })

    it('botao x deve fechar navbar', () => {
        const { navbar } = page
        click(navbar.closeButton)
        assertNotVisible(navbar.div)
    })

    it('deve conter imagem', () => {
        assertChildWithAttribute({
            parentSelector: page.profileDiv,
            childSelector: 'img',
            attributeName: 'src',
        })
    })

    it('deve conter nome', () => {
        getChild(page.profileDiv, 'p')
    })

    it('botao com icone de caneta deve permitir mudar informacoes do usuario', () => {
        click(page.editButton)
        // aguardando implementacao
    })

    it('botao meus cursos abre pagina de meus cursos', () => {
        clickButtonWithText(page.myCoursesText)
        assertText(page.sectionTitle, page.myCoursesText)
    })

    it('botao meus certificados abre pagina de meus certificados', () => {
        clickButtonWithText(page.myCertificatesText)
        assertText(page.sectionTitle, page.myCertificatesText)
    })

    it('botao todos os cursos abre pagina de todos os cursos', () => {
        clickButtonWithText(page.allCoursesText)
        assertText(page.sectionTitle, page.allCoursesText)
    })
})