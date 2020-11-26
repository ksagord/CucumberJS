var seleniumWebdriver = require('selenium-webdriver');
var {defineSupportCode} = require('cucumber');

public
defineSupportCode(function ({Given, When, Then}) {
    Given('I am on calculator.com', function () {
        return this.driver.get('http://calculator.com/')
    });



    When('I click on 6', function (text) {
        return this.driver.findElement({linkText: text}).then(function (element) {
            return element.click();
        });
    });


});