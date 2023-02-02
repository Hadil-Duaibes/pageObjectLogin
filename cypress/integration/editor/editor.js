import LoginPage from "../../pages/loginPage";
import EditerPage from "../../pages/editorPage";

const loginPage = new LoginPage();
const editerPage = new EditerPage();

  Given('I open Conduit login page', () => {
    // cy.visit('https://react-redux.realworld.io/#/login')
    loginPage.openLoginPage();
  });
  
  When('I type in', (datatable) => { 
    datatable.hashes().forEach(element => {
        loginPage.typeInUsername(element.username)
        loginPage.typeInPassword(element.password)
    })
  })
  
  When('I click on Sign in button', () => {
    loginPage.clickOnSinginButton()
  })
  
  Then('{string} should be shown', (content) => {
    loginPage.showString(content)
  })

  When('user cliks in new post',() => {
    editerPage.clickNewPost()
  })

  When('user type in Artical title field',() => {
    editerPage.typeTitle()
  })
  When('user type in what is Artical about field',() => {
     editerPage.typeArticleAbout()
  })

  When('user type in write your Artical field',() => {
    editerPage.typeArticle()
  })

  When('cliks on Publish Article button',() => {
    editerPage.clickOnButton()
  })
  

 