import { CursosPageObject } from "./page_objects/curso_page_object"
import { click } from './utils/commands'

describe('pagina todos os cursos', () => {
    const page = new CursosPageObject();

    beforeEach(() => {
        page.visit()
    })

    it('Abrir curso clicando no card de curso', () => {
        const { navbar } = page
        click(navbar.closeButton)
        cy.get(page.dadCardCurso).eq(0).click()
    })
})