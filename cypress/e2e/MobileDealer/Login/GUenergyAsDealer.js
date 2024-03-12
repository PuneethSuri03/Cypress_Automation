/// <reference types="Cypress" />

import DealerLoginPage from "../../../PageObjects/DealerLoginPage";

describe('login to Guenergy storefront as Dealer', () => {
    it('Validate - Dealer logged into Guenergy Staging Successfully', () => {
        const dealerloginpage = new DealerLoginPage()
        dealerloginpage.DealerGuenergyLogin()
    })
})