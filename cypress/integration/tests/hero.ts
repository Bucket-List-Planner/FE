

describe('<Hero />', () => {
    // Arrange
    beforeEach(() => {
        cy.visit('/')
    })

    // Arrange
    it('Renders without crashing', () => {
        cy.get('h1').should('be.visible')
    })

     // Arrange
     it('Renders without crashing', () => {
        cy.get('#t1').should('be.visible')
    })



})
