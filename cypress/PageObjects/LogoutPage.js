import url from "../fixtures/url"
import dealerLogin from "../fixtures/dealerLogin"
import repLogin from "../fixtures/repLogin"
import incorrect from "../fixtures/incorrect.json"

//Jetty
//Fairharbor
//Bogs
//Guenergy

class LoginPage {
    jettyUrl(){
        cy.visit(url.jettyUrl)
    }
    fairharborUrl(){
        cy.visit(url.fairharborUrl)
    }
    bogsUrl(){
        cy.visit(url.bogsUrl)
    }
    guenergyUrl(){
        cy.visit(url.guenergyUrl)
    }
    dealerJettyLogout(){
        cy.get('#ion-input-0').type(dealerLogin.dealerJettyUsername, {force: true}) 
        cy.get('#ion-input-1').type(dealerLogin.dealerJettyPassword, {force: true})
        cy.get('ion-button[type="submit"]').click()
        cy.wait(5000)
        cy.get('ion-menu-button[data-testid="menu-button"]').click()
        cy.wait(5000)
        cy.get('._subMenu_ycjrr_163').click()

    }
    dealerFairharborLogout(){
        cy.get('#ion-input-0').type(dealerLogin.dealerFairharborUsername, {force: true}) 
        cy.get('#ion-input-1').type(dealerLogin.dealerFairharborPassword, {force: true})
        cy.get('ion-button[type="submit"]').click()
        cy.wait(5000)
        cy.get('ion-menu-button[data-testid="menu-button"]').click()
        cy.wait(5000)
        cy.get('._subMenu_ycjrr_163').click()

    }
    dealerBogsLogout(){
        cy.get('#ion-input-0').type(dealerLogin.dealerBogsUsername, {force: true}) 
        cy.get('#ion-input-1').type(dealerLogin.dealerBogsPassword, {force: true})
        cy.get('ion-button[type="submit"]').click()
        cy.wait(5000)
        cy.get('ion-menu-button[data-testid="menu-button"]').click()
        cy.wait(5000)
        cy.get('._subMenu_ycjrr_163').click()

    }
    dealerGuenergyLogout(){
        cy.get('#ion-input-0').type(dealerLogin.dealerGuenergyUsername, {force: true}) 
        cy.get('#ion-input-1').type(dealerLogin.dealerGuenergyPassword, {force: true})
        cy.get('ion-button[type="submit"]').click()
        cy.wait(5000)
        cy.get('ion-menu-button[data-testid="menu-button"]').click()
        cy.wait(5000)
        cy.get('._subMenu_ycjrr_163').click()

    }
    repJettyLogout(){
        cy.get('#ion-input-0').type(repLogin.repJettyUsername, {force: true}) 
        cy.get('#ion-input-1').type(repLogin.repJettyPassword, {force: true})
        cy.get('ion-button[type="submit"]').click()
        cy.wait(5000)
        cy.get('ion-toolbar.md > :nth-child(1) > ._button_2esx6_124').click()
        cy.wait(5000)
        cy.get('ion-menu-button[data-testid="menu-button"]').click()
        cy.wait(5000)
        cy.get('._subMenu_ycjrr_163').click()

    }
    repFairharborLogout(){
        cy.get('#ion-input-0').type(repLogin.repFairharborUsername, {force: true}) 
        cy.get('#ion-input-1').type(repLogin.repFairharborPassword, {force: true})
        cy.get('ion-button[type="submit"]').click()
        cy.wait(5000)
        cy.get('ion-toolbar.md > :nth-child(1) > ._button_2esx6_124').click()
        cy.wait(5000)
        cy.get('ion-menu-button[data-testid="menu-button"]').click()
        cy.wait(5000)
        cy.get('._subMenu_ycjrr_163').click()

        
    }
    repBogsLogout(){
        cy.get('#ion-input-0').type(repLogin.repBogsUsername, {force: true})
        cy.get('#ion-input-1').type(repLogin.repBogsPassword, {force: true})
        cy.get('ion-button[type="submit"]').click()
        cy.wait(5000)
        cy.get('ion-toolbar.md > :nth-child(1) > ._button_2esx6_124').click()
        cy.wait(5000)
        cy.get('ion-menu-button[data-testid="menu-button"]').click()
        cy.wait(5000)
        cy.get('._subMenu_ycjrr_163').click()

    }
    repGuenergyLogout(){
        cy.get('#ion-input-0').type(repLogin.repGuenergyUsername, {force: true}) 
        cy.get('#ion-input-1').type(repLogin.repGuenergyPassword, {force: true})
        cy.get('ion-button[type="submit"]').click()
        cy.wait(5000)
        cy.get('ion-toolbar.md > :nth-child(1) > ._button_2esx6_124').click()
        cy.wait(5000)
        cy.get('ion-menu-button[data-testid="menu-button"]').click()
        cy.wait(5000)
        cy.get('._subMenu_ycjrr_163').click()

    }
    jettyIncorrectLogout(){
        cy.get('#ion-input-0').type(incorrect.usernameIncorrect, {force: true}) 
        cy.get('#ion-input-1').type(incorrect.passwordIncorrect, {force: true})
        cy.get('ion-button[type="submit"]').click()
    }
    fairharborIncorrectLogout(){
        cy.get('#ion-input-0').type(incorrect.usernameIncorrect, {force: true}) 
        cy.get('#ion-input-1').type(incorrect.passwordIncorrect, {force: true})
        cy.get('ion-button[type="submit"]').click()
    }
    bogsIncorrectLogout(){
        cy.get('#ion-input-0').type(incorrect.usernameIncorrect, {force: true}) 
        cy.get('#ion-input-1').type(incorrect.passwordIncorrect, {force: true})
        cy.get('ion-button[type="submit"]').click()
    }
    guenergyIncorrectLogout(){
        cy.get('#ion-input-0').type(incorrect.usernameIncorrect, {force: true}) 
        cy.get('#ion-input-1').type(incorrect.passwordIncorrect, {force: true})
        cy.get('ion-button[type="submit"]').click()
    }
}

export default LoginPage;