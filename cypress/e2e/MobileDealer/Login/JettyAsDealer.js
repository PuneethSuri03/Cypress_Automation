/// <reference types="Cypress" />

import DealerLoginPage from "../../../PageObjects/DealerLoginPage";
import IncorrectLogin from "../../../PageObjects/IncorrectLogin";


describe('login to Jetty storefront as Dealer', () => {

    it('Validate - Dealer logged into Jetty Staging unsuccesful', () => {
        const incorrectLogin = new IncorrectLogin()
        incorrectLogin.JettyIncorrectLogin()
        cy.wait(5000)
        cy.get('[class*=_invalidCredentialsMessage]').should('be.visible')
    })

    it('Validate - Dealer logged into Jetty Staging Successfully', () => {
        const dealerloginpage = new DealerLoginPage()
        dealerloginpage.DealerJettyLogin()
        cy.get('[class*=_logoContainer]').should('be.visible')
    })
    
})