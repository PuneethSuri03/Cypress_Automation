/// <reference types="Cypress" />

import DealerLogoutPage from "../../../PageObjects/DealerLogoutPage";


describe('login to Fairharbor storefront as Dealer', () => {

    it('Validate - Dealer logged out Fairharbor Staging Successfully', () => {
        const dealerLogoutPage = new DealerLogoutPage()
        dealerLogoutPage.DealerFairharborLogout()
        cy.wait(5000)
        cy.get('._logo_tybup_137').should('be.visible')
    })
    
})