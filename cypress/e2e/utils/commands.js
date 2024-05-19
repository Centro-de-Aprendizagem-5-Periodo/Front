export const click = (selector) => cy.get(selector).click()

export const clickButtonWithText = (text) => cy.contains(text).click()

export const assertVisible = (selector) => cy.get(selector).should('be.visible')

export const assertNotVisible = (selector) => cy.get(selector).should('not.be.visible')

export const getChild = (parent, child) => cy.get(parent).find(child).eq(0).click()

export const assertChildWithAttribute = (args) => {
    const child = getChild(args.parentSelector, args.childSelector)
    child.should('have.attr', args.attributeName)
}

export const assertText = (selector, text) => cy.get(selector).contains(text)