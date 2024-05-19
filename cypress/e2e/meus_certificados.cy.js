import { CursosPageObject } from "./page_objects/curso_page_object"
import { click } from './utils/commands'

describe('pagina meus certificados', () => {
  const page = new CursosPageObject();

  beforeEach(() => {
    page.visit()
    click(page.myCertificatesText)
  })

  // it('Abrir card de curso ao clicar no título do curso', () => {testeteste
    
  // })
})