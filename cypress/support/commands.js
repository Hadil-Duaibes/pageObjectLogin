import 'cypress-file-upload';

Cypress.Commands.add('SignIn', () => {

    cy.visit('/#/login?_k=mdvnag')
    cy.title().should('eq','Conduit')
    cy.location('protocol').should('eq','https:')
    cy.get('form').within(($form) => { 
       cy.get('input[type="email"]').type('marahdaibes@gmail.com')
        cy.get('input[type="password"]').type('marah')
         cy.root().submit() 
    })
    cy.contains('Your Feed',{timeout:10000}).should('be.visible')
})
