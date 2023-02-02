class EditerPage {
   
    clickNewPost(){
        cy.get('ul.navbar-nav').children().contains('New Post').click()
    }

    typeTitle(){
    cy.get('input').first().type('Test')
    }

    typeArticleAbout(){
        cy.get('input').eq(1).type('test')
    }
    
    typeArticle(){
        cy.get('textarea').last().type('test 2')
    }
    clickOnButton(){
        cy.contains('Publish Article').click()
    }

}
export default EditerPage