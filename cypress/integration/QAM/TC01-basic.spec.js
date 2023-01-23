describe('Login', function(){
    it('Sing in', function(){
        cy.visit('https://react-redux.realworld.io/#/login?_k=mdvnag')
        cy.get('input[type="email"]').type('marahdaibes@gmail.com')
        cy.get('input[type="password"]').type('marah')
        cy.get('.btn').contains('Sign in').should('be.visible').click()

    })
})