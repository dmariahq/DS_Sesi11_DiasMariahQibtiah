const { $, expect } = require('@wdio/globals')
const Page = require('./page');


const element = {
    fieldUsername: $('#user-name'),
    fieldPassword: $('#password'),
    buttonLogin: $('#login-button'),
    errorLockedOutUser: (dynamicMessage) => $(`//h3[text()="${dynamicMessage}"]`)
}

class LoginPage extends Page {
    async login (username) {
        await element.fieldUsername.waitForDisplayed({ timeout: 2500 });
        await element.fieldUsername.setValue(username);
        await element.fieldPassword.setValue('process.env.PASSWORD_SAUCEDEMO');
        await element.buttonLogin.click();
    }

    async validateLockedOutUserError (dynamicMessage) {
        // await element.errorLockedOutUser(dynamicMessage).waitForDisplayed({ timeout: 2500 });
        expect(element.errorLockedOutUser(dynamicMessage)).toBeDisplayed()
    }

    // async validatePerformanceGlitchUserCredentials (username) {
    //     // console.log (`USERNAME: ${process.env.PERFORMANCE_GLITCH_USER}`)
    //     // console.log (`PASSWORD: ${process.env.PASSWORD_SAUCEDEMO}`)
    //     await this.fieldUsername.waitForDisplayed({ timeout: 2500 });
    //     await this.fieldUsername.setValue(username);
    //     await this.fieldPassword.setValue('process.env.PASSWORD_SAUCEDEMO');
    //     await this.buttonLogin.click();
    //     expect(this.PerformanceGlitchUser(username)).toBeDisplayed()
    // }



    open () {
        return super.open('/'); // NOTE: will open https://www.saucedemo.com/
    }
}

module.exports = new LoginPage();