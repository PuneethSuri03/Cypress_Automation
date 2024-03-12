/// <reference types="Cypress" />

import DealerLoginPage from "../../../PageObjects/DealerLoginPage";

describe('login to jetty storefront as Dealer', () => {
    it('Validate - Dealer logged into Jetty Staging Successfully', () => {
        const dealerloginpage = new DealerLoginPage()
        dealerloginpage.DealerJettyLogin()
    })
})