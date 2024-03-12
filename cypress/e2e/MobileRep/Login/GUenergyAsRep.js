/// <reference types="Cypress" />

import RepLoginPage from "../../../PageObjects/RepLoginPage";

describe('login to Guenergy Storefront as Rep', () => {
    it('Validate - Rep logged in to Guenergy Staging successfully', () => {
        const repLoginPage = new RepLoginPage()
        repLoginPage.RepGuenergyLogin()
        cy.get('body.backdrop-no-scroll:nth-child(2) ion-app.md.ion-page ion-modal._menuWrapper_155h0_124._chooseCustomerModal_14g88_124.md.modal-default.show-modal:nth-child(3) div.ion-delegate-host.ion-page ion-searchbar._customerSearchbox_14g88_133.sc-ion-searchbar-md-h.sc-ion-searchbar-md-s.md.searchbar-left-aligned.searchbar-should-show-clear div.searchbar-input-container.sc-ion-searchbar-md > input.searchbar-input.sc-ion-searchbar-md').should('be.visible')
    })
})