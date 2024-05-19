import { CursosPageObject } from "./page_objects/curso_page_object"
import { assertText, click, clickButtonWithText, getChild } from './utils/commands'

describe('pagina meus cursos', () => {
  const page = new CursosPageObject();

  beforeEach(() => {
    page.visit()
  })

  it('Verifica texto Cursos em andamento no título da seção', () => {
    cy.get(page.childTitleSection)
  })

  it('Abrir curso clicando no card de curso', () => {
    const { navbar } = page 
    click(navbar.closeButton)
    cy.get(page.dadCardCurso).eq(0).click()
  })
})