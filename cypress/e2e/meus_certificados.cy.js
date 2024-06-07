import { CursosPageObject } from "./page_objects/curso_page_object"
import { click } from './utils/commands'

describe('pagina meus certificados', () => {
const page = new CursosPageObject();

    beforeEach(() => {
        page.visit()
        clickButtonWithText(page.myCertificatesText)
    })

    it('Clicar no card de certificado baixa um certificado', () => {
        const { navbar } = page
        click(navbar.closeButton)
        cy.get(page.downloadButton).eq(0).click()
    })
})