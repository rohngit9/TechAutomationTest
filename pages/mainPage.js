
var Loginpage = require('./loginPage.js');
var StudiesPage = require('./studiesPage.js');

var Mainpage = function(){


var repository = element(by.xpath("//div[@id='fdxMainNav']/ul/li[@id='menuMdb']"));
var studies = element(by.xpath("//div[@id='fdxSubNav']/div/ul/li[@id='menuMdbStudies']"));
var techTest = element(by.id("menuUser"));
var logOut = element(by.xpath("//div[@id='fdxSubNav']/div/ul/li[@id='menuUserLogout']"));

//Navigate to repository and select Studies
this.navigateToRepositorySelectStudies = async function() {
    
    await repository.click();
    await studies.click();
    
};



this.verifyPageTitle = async function(pageTitle){
    
    expect(await browser.getTitle()).toEqual(pageTitle);

}

 // a) Sign out is accessed by expanding the menu when the mouse is over the user icon on the bottom left hand side of the menu bar 
         
this.logOutOfApplication = async function() {

    await techTest.click();
    await logOut.click();
    
};


};

/*Mainpage.prototype = Loginpage;
Mainpage.prototype = StudiesPage;*/
module.exports = new Mainpage();