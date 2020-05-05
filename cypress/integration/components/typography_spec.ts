/// <reference types="cypress" />

describe('<Typography />', () => {
    // Arrange
    beforeEach(() => {
        cy.visit('/')
    })

    it('Renders without crashing', () =>{
        cy.get('[data-cy]=typography').should('be.visible')
    })
})