/// <reference types="Cypress" />

import DealerLogoutPage from "../../../PageObjects/DealerLogoutPage";


describe('login to Jetty storefront as Dealer', () => {

    it('Validate - Dealer logged out Jetty Staging Successfully', () => {
        const dealerLogoutPage = new DealerLogoutPage()
        dealerLogoutPage.DealerJettyLogout()
        cy.wait(5000)
        cy.get('._logo_tybup_137').should('be.visible')
    })
    
})