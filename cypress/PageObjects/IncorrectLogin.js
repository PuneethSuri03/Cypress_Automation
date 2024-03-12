import LoginPage from "../PageObjects/LoginPage";

class IncorrectLogin extends LoginPage{
    JettyIncorrectLogin(){
        const loginPage = new LoginPage()
        loginPage.jettyUrl()
        loginPage.jettyIncorrectUsernamePassword()
    }
    FairharborIncorrectLogin(){
        const loginPage = new LoginPage()
        loginPage.fairharborUrl()
        loginPage.fairharborIncorrectUsernamePassword()
    }
    BogsIncorrectLogin(){
        const loginPage = new LoginPage()
        loginPage.bogsUrl()
        loginPage.bogsIncorrectUsernamePassword()
    }
    GuenergyIncorrectLogin(){
        const loginPage = new LoginPage()
        loginPage.guenergyUrl()
        loginPage.guenergyIncorrectUsernamePassword()
    }    
}

export default IncorrectLogin