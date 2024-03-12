/// <reference types="Cypress" />

import RepLogoutPage from "../../../PageObjects/RepLogoutPage";


describe('login to Guenergy storefront as Rep', () => {

    it('Validate - Rep logged out Guenergy Staging Successfully', () => {
        const repLogoutPage = new RepLogoutPage()
        repLogoutPage.RepGuenergyLogout()
        cy.wait(5000)
        cy.get('._logo_tybup_137').should('be.visible')
    })
    
})