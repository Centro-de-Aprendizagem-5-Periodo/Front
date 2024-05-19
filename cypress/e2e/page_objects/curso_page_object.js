export class CursosPageObject {
    navbar = {
        div: 'div[id=nav-bar]',
        openButton: 'svg[data-icon=bars]',
        closeButton: 'svg[data-icon=xmark]'
    }
    logoutButton = 'svg[data-icon=arrow-right-from-bracket]'
    profileDiv = 'div[id=profile]'
    editButton = 'svg[data-icon=pencil]'
    sectionTitle = 'button[class=selected]'
    myCoursesText = 'Meus cursos'
    myCertificatesText = 'Meus certificados'
    allCoursesText = 'Todos os cursos'
    dadCardCurso = 'div[id=card]'
    childCardCurso = 'p'
    dadTilteSection = 'div[id=content-itens]'
    childTitleSection = 'svg'
    visit = () => cy.visit('http://localhost:5173')
}