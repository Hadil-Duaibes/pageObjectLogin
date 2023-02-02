// const { default: LoginPage } = require("../../pages/loginPage");
import LoginPage from "../../pages/loginPage";

const loginPage = new LoginPage();

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
  });
  
  Then('{string} should be shown', (content) => {
    loginPage.showString(content)
  });

  