import LoginPage from "../PageObjects/LoginPage";


class DealerLoginPage extends LoginPage{
    DealerJettyLogin(){
        const loginPage = new LoginPage()
        loginPage.jettyUrl()
        loginPage.dealerJettyUsernamePassword()
    }
    DealerFairharborLogin(){
        const loginPage = new LoginPage()
        loginPage.fairharborUrl()
        loginPage.dealerFairharborUsernamePassword()
    }
    DealerBogsLogin(){
        const loginPage = new LoginPage()
        loginPage.bogsUrl()
        loginPage.dealerBogsUsernamePassword()
    }
    DealerGuenergyLogin(){
        const loginPage = new LoginPage()
        loginPage.guenergyUrl()
        loginPage.dealerGuenergyUsernamePassword()
    }    
}

export default DealerLoginPage