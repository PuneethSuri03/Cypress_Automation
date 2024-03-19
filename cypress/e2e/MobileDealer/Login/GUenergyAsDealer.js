/// <reference types="Cypress" />

import DealerLoginPage from "../../../PageObjects/DealerLoginPage";
import IncorrectLogin from "../../../PageObjects/IncorrectLogin";


describe('login to Guenergy storefront as Dealer', () => {

    it('Validate - Dealer logged into Guenergy Staging unsuccesful', () => {
        const incorrectLogin = new IncorrectLogin()
        incorrectLogin.GuenergyIncorrectLogin()
        cy.wait(5000)
        cy.get('[class*=_invalidCredentialsMessage]').should('be.visible')
    })

    it('Validate - Dealer logged into Guenergy Staging Successfully', () => {
        const dealerloginpage = new DealerLoginPage()
        dealerloginpage.DealerGuenergyLogin()
        cy.get('[class*=_logoContainer]').should('be.visible')
    })
    
})