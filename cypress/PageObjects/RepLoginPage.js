import LoginPage from "../PageObjects/LoginPage";


class RepLoginPage extends LoginPage{
    RepJettyLogin(){
        const loginPage = new LoginPage()
        loginPage.jettyUrl()
        loginPage.repJettyUsernamePassword()
    }
    RepFairharborLogin(){
        const loginPage = new LoginPage()
        loginPage.fairharborUrl()
        loginPage.repFairharborUsernamePassword()
    }
    RepBogsLogin(){
        const loginPage = new LoginPage()
        loginPage.bogsUrl()
        loginPage.repBogsUsernamePassword()
    }
    RepGuenergyLogin(){
        const loginPage = new LoginPage()
        loginPage.guenergyUrl()
        loginPage.repGuenergyUsernamePassword()
    }
}

export default RepLoginPage