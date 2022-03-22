var Loginpage = function() {

    var userIdInput = element(by.model('$ctrl.userId'));
    var passwordInput = element(by.model('$ctrl.password'));
    var signInButton = element(by.buttonText('SIGN IN'));
    var errorText= element(by.css('alert-danger-text ng-scope'));

    this.get = async function(url){
        await browser.get(url);
    }

    this.browserMaximise = async function(){
        await browser.manage().window().maximize();
    }
    this.loginfunction = async function(userId,password) {

        await userIdInput.sendKeys(userId);
        await passwordInput.sendKeys(password);
        await signInButton.click();
        
        };

    /*this.getPageTitle = function() {
        return browser.getTitle();
      };

    this.verifyPageTitle = async function(pageTitle){
        expect(await this.getPageTitle.toEqual(pageTitle))
    }*/
    this.verifyPageTitle = async function(pageTitle){
        //let getPageTitle = browser.getTitle();
        expect(await browser.getTitle()).toEqual(pageTitle)
    
    }
    this.errorMessage = async function(){
        expect(await errorText).getText().toContain('invalid');
    }

  
};
  module.exports = new Loginpage();