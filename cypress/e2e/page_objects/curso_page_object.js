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
    myCertificatesText = 'svg[data-icon=scroll]'
    allCoursesText = 'Todos os cursos'
    dadCardCurso = 'div[class=card]'
    childCardCurso = 'p'
    dadTilteSection = 'div[id=content-itens]'
    childTitleSection = 'svg'
    inputLogin = 'input[id=campo-email]'
    inputSenha = 'input[id=campo-senha]'
    inputNome = 'input[id=campo-nome]'
    maskPass = 'svg[data-icon=eye-slash]'
    saveButton = 'button[id=salvar]'
    inputData = 'input[id=campo-data]'
    inputTelefone = 'input[id=campo-telefone]'
    inputIdent = 'input[id=campo-ident]'
    inputNumCasa = 'input[id=campo-numeroCasa]'
    inputComplemento = 'input[id=campo-complemento]'
    inputLogradouro = 'input[id=campo-logradouro]'
    inputBairro = 'input[id=campo-bairro]'
    inputCep = 'input[id=campo-cep]'
    inputCidade = 'input[id=campo-cidade]'
    selectorUF = 'select[id=campo-uf]'
    downloadButton = 'div[class=box-certificado]'
    visit = () => cy.visit('http://localhost:5173/meus-cursos')
}