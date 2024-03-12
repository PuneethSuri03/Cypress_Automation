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
    dealerJettyUsernamePassword(){
        cy.get('#ion-input-0').type(dealerLogin.dealerJettyUsername, {force: true}) 
        cy.get('#ion-input-1').type(dealerLogin.dealerJettyPassword, {force: true})
        cy.get('ion-button[type="submit"]').click()
    }
    dealerFairharborUsernamePassword(){
        cy.get('#ion-input-0').type(dealerLogin.dealerFairharborUsername, {force: true}) 
        cy.get('#ion-input-1').type(dealerLogin.dealerFairharborPassword, {force: true})
        cy.get('ion-button[type="submit"]').click()
    }
    dealerBogsUsernamePassword(){
        cy.get('#ion-input-0').type(dealerLogin.dealerBogsUsername, {force: true}) 
        cy.get('#ion-input-1').type(dealerLogin.dealerBogsPassword, {force: true})
        cy.get('ion-button[type="submit"]').click()
    }
    dealerGuenergyUsernamePassword(){
        cy.get('#ion-input-0').type(dealerLogin.dealerGuenergyUsername, {force: true}) 
        cy.get('#ion-input-1').type(dealerLogin.dealerGuenergyPassword, {force: true})
        cy.get('ion-button[type="submit"]').click()
    }
    repJettyUsernamePassword(){
        cy.get('#ion-input-0').type(repLogin.repJettyUsername, {force: true}) 
        cy.get('#ion-input-1').type(repLogin.repJettyPassword, {force: true})
        cy.get('ion-button[type="submit"]').click()
    }
    repFairharborUsernamePassword(){
        cy.get('#ion-input-0').type(repLogin.repFairharborUsername, {force: true}) 
        cy.get('#ion-input-1').type(repLogin.repFairharborPassword, {force: true})
        cy.get('ion-button[type="submit"]').click()
    }
    repBogsUsernamePassword(){
        cy.get('#ion-input-0').type(repLogin.repBogsUsername, {force: true})
        cy.get('#ion-input-1').type(repLogin.repBogsPassword, {force: true})
        cy.get('ion-button[type="submit"]').click()
    }
    repGuenergyUsernamePassword(){
        cy.get('#ion-input-0').type(repLogin.repGuenergyUsername, {force: true}) 
        cy.get('#ion-input-1').type(repLogin.repGuenergyPassword, {force: true})
        cy.get('ion-button[type="submit"]').click()
    }
    jettyIncorrectUsernamePassword(){
        cy.get('#ion-input-0').type(incorrect.usernameIncorrect, {force: true}) 
        cy.get('#ion-input-1').type(incorrect.passwordIncorrect, {force: true})
        cy.get('ion-button[type="submit"]').click()
    }
    fairharborIncorrectUsernamePassword(){
        cy.get('#ion-input-0').type(incorrect.usernameIncorrect, {force: true}) 
        cy.get('#ion-input-1').type(incorrect.passwordIncorrect, {force: true})
        cy.get('ion-button[type="submit"]').click()
    }
    bogsIncorrectUsernamePassword(){
        cy.get('#ion-input-0').type(incorrect.usernameIncorrect, {force: true}) 
        cy.get('#ion-input-1').type(incorrect.passwordIncorrect, {force: true})
        cy.get('ion-button[type="submit"]').click()
    }
    guenergyIncorrectUsernamePassword(){
        cy.get('#ion-input-0').type(incorrect.usernameIncorrect, {force: true}) 
        cy.get('#ion-input-1').type(incorrect.passwordIncorrect, {force: true})
        cy.get('ion-button[type="submit"]').click()
    }
}

export default LoginPage;