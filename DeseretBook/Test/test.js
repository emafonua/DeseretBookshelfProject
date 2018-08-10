accountPage = {}
module.exports = {
    beforeEach: browser => {
        accountPage = browser.page.pageObject()
        accountPage.navigate()
    },
    after: browser => {
        browser.end()
    },
    //Test DB create account, add address and logout 
    'login': browser => {
        accountPage
        .setValue('@emailSignUp','qatest61@test.com')
             .setValue('@firstName','QA')
            .setValue('@lastName','Testing')
            .click('@monthDropdown')
            .click('@dayDropdown')
            .setValue('@password', '123456')
            .setValue('@confirmPassword', '123456')
            .click('@privacyPolicy')
            .click('@createButton')
            .waitForElementVisible('@flashSaveNew', 10000 )
            .click('@myAccount')
            .waitForElementPresent('@addresses', 10000)
            .click('@addresses')
            .click('@addNewAddress')
            .setValue('@addressFirstName','QA')
            .setValue('@addressLastName', 'Testing')
            .setValue('@addressLineOne', '2240 W 1500 S')
            .setValue('@addressCity', 'Salt Lake City')
            .click('@addressState')
            .setValue('@addressZip', 84104)
            .setValue('@addressPhone', '18003424532')
            .click('@addressSave')
            .waitForElementVisible('@flashSaveAddresses', 10000)
            //.waitForElementVisible('@settingsBuyNow', 10000)
            .waitForElementVisible('@headerMyAddresses', 10000)
            //browser.url('https://deseretbook.net/account/buy_now')
            //accountPage
           // .click('@headerMySub')
            //.click('@settingsBuyNow')
            //.waitForElementVisible('@headerMyAddresses', 10000)
            //.setValue('@ccBuyNow', '41111111111111111')
            //.setValue('@expirationBuyNow', '10 20')
            //.setValue('@cvvBuyNow', '123')
            //.setValue('@addressBuyNow', '2240 W 1500 S')
            //.setValue('@cityBuyNow', 'Salt Lake City')
            //.click('@stateBuyNow')
            //.setValue('@zipBuyNow', '84104')
            //.setValue('@phoneBuyNow', '18004534532')
            //.click('@activateBuyNow')
           //.click('@activateBuyNow')
            //.waitForElementVisible('@flashBuyNow', 10000)
            .click('@logOut')
            .waitForElementVisible('@flashLogOut', 10000)
            .click('@logIn')
            .waitForElementVisible('@loginHeader', 10000)
            .setValue('@loginEmail','qatest61@test.com')
            .setValue('@loginPass','123456')
            .click('@loginBtn')
            .waitForElementVisible('@flashLogin', 10000)
            
         
    }
}