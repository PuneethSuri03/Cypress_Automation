/// <reference types="Cypress" />

import RepLogoutPage from "../../../PageObjects/RepLogoutPage";


describe('login to Fairharbor storefront as Rep', () => {

    it('Validate - Rep logged out Fairharbor Staging Successfully', () => {
        const repLogoutPage = new RepLogoutPage()
        repLogoutPage.RepFairharborLogout()
        cy.wait(5000)
        cy.get('._logo_tybup_137').should('be.visible')
    })
    
})