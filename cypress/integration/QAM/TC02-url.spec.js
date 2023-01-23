describe('Create and mark-unmark as favorite',function(){
    it('Sing in', function(){
        cy.visit('https://react-redux.realworld.io/#/login?_k=mdvnag')
        cy.title().should('eq','Conduit')
        cy.location('protocol').should('eq','https:')
        cy.get('input[type="email"]').type('marahdaibes@gmail.com')
        cy.get('input[type="password"]').type('marah')
        cy.get('.btn').contains('Sign in').should('be.visible').click()
        cy.contains('Your Feed',{timeout:10000}).should('be.visible')

    })

    it('Create a post',function(){
        cy.contains('New Post').click()
        cy.hash().should('include','#/editor')
        cy.get('input[placeholder="Article Title"]').type('Tlest')
        cy.get('input[placeholder="What\'s this article about?"]').type('test')
        cy.get('textarea[placeholder="Write your article (in markdown)"]').type('test 2')
        cy.contains('Publish Article').click()
        cy.url().should('include','article')



    })
    it('Mark-Unmark as favorite',function(){
        cy.get('.nav-link').contains('marah-daibes').click()
        cy.contains('My Articles').should('be.visible')
        cy.get('.ion-heart').click()
        cy.contains('Favorited Articles').click()
        cy.url().should('include','favorites')
        cy.get('.ion-heart').click()
        cy.reload()
        cy.contains('No articles are here... yet.').should('be.visible')
        cy.go('back')
        cy.go('forward')
        cy.go('back')


    })
})