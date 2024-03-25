/// <reference types="Cypress" />

import RepLogoutPage from "../../../PageObjects/RepLogoutPage";


describe('login to Bogs storefront as Rep', () => {

    it('Validate - Rep logged out Bogs Staging Successfully', () => {
        const repLogoutPage = new RepLogoutPage()
        repLogoutPage.RepBogsLogout()
        cy.wait(5000)
        cy.get('._logo_tybup_137').should('be.visible')
    })
    
})