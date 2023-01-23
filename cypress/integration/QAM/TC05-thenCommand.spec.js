describe('Create and mark-unmark as favorite',function(){
    
    Cypress.config('pageLoadTimeout',100000)
    
    before( function(){
       cy.SignIn()

    })


    it('Create a post',function(){
        cy.get('ul.navbar-nav').children().contains('New Post').click()
        cy.hash().should('include','#/editor')
        cy.get('form').within(($form) => { 
            cy.get('input').first().type('TqTest')
            cy.get('input').eq(1).type('test')
            cy.get('textarea').last().type('test 2')
            cy.contains('Publish Article').click()
        })
        // cy.url().should('include','article')
    })
          
    it('Mark-Unmark as favorite',function(){
        cy.get('ul.navbar-nav').children().contains('marah-daibes').click()
        cy.contains('My Articles').should('be.visible')
        cy.get('.ion-heart').first().click()
        cy.contains('Favorited Articles').click()
        cy.url().should('include','favorites')
        cy.get('.btn-primary').first().then( ($fav) => {
            const favConst = $fav.text()
            expect(parseInt(favConst)).to.eql(1)
        })
    


    })
})