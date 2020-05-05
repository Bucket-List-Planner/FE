/// <reference types="cypress" />

describe('<Hero />', () => {
    // Arrange
    beforeEach(() => {
        cy.visit('/')
    })

    // Arrange
    // it('Renders without crashing', () => {
    //     cy.get('[data-cy-title]').should('be.visible')
    // })

    // Arrange
    it('Renders without crashing', () => {
        cy.get('[data-cy=keyTitle]').should('be.visible')
    })

     // Arrange
    //  it('Renders without crashing', () => {
    //     cy.get('.jDZebt').should('be.visible')
    // })



})
