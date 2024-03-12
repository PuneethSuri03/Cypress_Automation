/// <reference types="Cypress" />

import RepLogoutPage from "../../../PageObjects/RepLogoutPage";


describe('login to Jetty storefront as Rep', () => {

    it('Validate - Rep logged out Jetty Staging Successfully', () => {
        const repLogoutPage = new RepLogoutPage()
        repLogoutPage.RepJettyLogout()
        cy.wait(5000)
        cy.get('._logo_tybup_137').should('be.visible')
    })
    
})