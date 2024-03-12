/// <reference types="Cypress" />

import DealerLogoutPage from "../../../PageObjects/DealerLogoutPage";


describe('login to Guenergy storefront as Dealer', () => {

    it('Validate - Dealer logged out Guenergy Staging Successfully', () => {
        const dealerLogoutPage = new DealerLogoutPage()
        dealerLogoutPage.DealerGuenergyLogout()
        cy.wait(5000)
        cy.get('._logo_tybup_137').should('be.visible')
    })
    
})