import LogoutPage from "../PageObjects/LogoutPage";


class DealerLogoutPage extends LogoutPage{
    DealerJettyLogout(){
        const logout = new LogoutPage()
        logout.jettyUrl()
        logout.dealerJettyLogout()
    }
    DealerFairharborLogout(){
        const logout = new LogoutPage()
        logout.fairharborUrl()
        logout.dealerFairharborLogout()
    }
    DealerBogsLogout(){
        const logout = new LogoutPage()
        logout.bogsUrl()
        logout.dealerBogsLogout()
    }
    DealerGuenergyLogout(){
        const logout = new LogoutPage()
        logout.guenergyUrl()
        logout.dealerGuenergyLogout()
    }    
}

export default DealerLogoutPage