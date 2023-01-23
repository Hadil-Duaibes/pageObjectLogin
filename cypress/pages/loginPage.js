class LoginPage {

    openLoginPage() {
        cy.visit('https://react-redux.realworld.io/#/login')
    }

    typeInUsername(username) {
        cy.get('input[type="email"]').type(username)
    
    }

    typeInPassword(pwd) {
        cy.get('input[type="password"]').type(pwd)
    
    }

    clickOnSinginButton(){
        cy.get('.btn').contains('Sign in').should('be.visible').click()
    }

    showString(content){
        cy.contains(content, {timeout:10000}).should('be.visible')
    }


}

export default LoginPage