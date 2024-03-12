import LogoutPage from "../PageObjects/LogoutPage";


class RepLogoutPage extends LogoutPage{
    RepJettyLogout(){
        const logout = new LogoutPage()
        logout.jettyUrl()
        logout.repJettyLogout()
    }
    RepFairharborLogout(){
        const logout = new LogoutPage()
        logout.fairharborUrl()
        logout.repFairharborLogout()
    }
    RepBogsLogout(){
        const logout = new LogoutPage()
        logout.bogsUrl()
        logout.repBogsLogout()
    }
    RepGuenergyLogout(){
        const logout = new LogoutPage()
        logout.guenergyUrl()
        logout.repGuenergyLogout()
    }    
}

export default RepLogoutPage