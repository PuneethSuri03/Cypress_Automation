/// <reference types="Cypress" />

import DealerLoginPage from "../../../PageObjects/DealerLoginPage";
import IncorrectLogin from "../../../PageObjects/IncorrectLogin";


describe('login to Fairharbor storefront as Dealer', () => {

    it('Validate - Dealer logged into Fairharbor Staging unsuccesful', () => {
        const incorrectLogin = new IncorrectLogin()
        incorrectLogin.FairharborIncorrectLogin()
        cy.wait(5000)
        cy.get('._invalidCredentialsMessage_1n567_124').should('be.visible')
    })

    it('Validate - Dealer logged into Fairharbor Staging Successfully', () => {
        const dealerloginpage = new DealerLoginPage()
        dealerloginpage.DealerFairharborLogin()
        cy.get('._logoContainer_s3tr3_129').should('be.visible')
    })
    
})