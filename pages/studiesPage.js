var Studiespage = function(){

    var dropdownMenu = element.all(by.xpath("//ul[@class='dropdown-menu']/li"));
    var dropdownViewOption = element(by.xpath("//ul[@class='dropdown-menu']/li[@id='fdxMdbContainerListItem0View']"));
    var dropdownEditOption= element(by.xpath("//ul[@class='dropdown-menu']/li[@id='fdxMdbContainerListItem0Edit']"));
    var dropdownRemoveOption=element(by.xpath("//ul[@class='dropdown-menu']/li[@id='fdxMdbContainerListItem0Delete']"));
    var dropdownTransitionOption=element(by.xpath("//ul[@class='dropdown-menu']/li[@id='fdxMdbContainerListItem0Transition']"));
    var dropdownMenubar= element(by.id("fdxMdbContainerListItem0MenuToggle"));
    var viewOption =  element(by.id("fdxMdbContainerListItem0View"));
    var techStudyIcon = element(by.id('crumb-containerDetails'));
    var dataAcquisitionView =element(by.id("dataAcquisitionName"));
    var dataAcquisitionIcon = element(by.id('crumb-agDetails'));
    var forms = element(by.id("FORMTypeName"));
    var formsViewIcon = element(by.id('crumb-assetDetails'));
    var formsDropdown =element(by.xpath("//*[@id='searchableDropdownToggle']/div[1]/div[2]"));
    var allAssetsOption = element(by.xpath("//*[@id='all']/div/span[2]"));
    var assetSearchInput =element(by.id("assetLabelSearch"));
    var medicalHistoryAsset = element(by.xpath("//*[@id='uuid-eb65cabf-c3f4-497c-893d-7ab4d81d5a25']/div/div/span[2]/div[2]/span[text()='Medical History']"));
    var editMedicalHistory =  element(by.id("switchEditMode"));
    var descriptionTextArea = element(by.id("assetLocaleEditTextTextareadescriptionxx"));
    var update = element(by.id("sectionDescription"));

 
    // a) Confirm the options on the 'Tech Study' menu (three bar button on right hand side)
    

 this.confirmOptions = async function() {

   // var texts = await dropdownMenu.map(function (elm) {
    expect(await dropdownMenu.get(0).getAttribute('innerText')).toEqual('View');
    expect(await dropdownMenu.get(1).getAttribute('innerText')).toEqual('Edit');
    expect(await dropdownMenu.get(2).getAttribute('innerText')).toEqual('Remove this study');
    expect(await dropdownMenu.get(3).getAttribute('innerText')).toEqual('Transition this study');
    
   
 };

 //confirm the count of the options is equal to 4
  this.confirmOptionsCount = async function(){
    let count = await dropdownMenu.count();
     console.log(count);
      expect(await  dropdownMenu.count()).toEqual(4);
  }

//confirm first element of dropdown list is 'View'

  this.confirmViewOption = async function() {

    return expect(await dropdownViewOption).getAttribute('innerText').toEqual('View');
    
};
//confirm first element of dropdown list is 'Edit'
this.confirmEditOption = async function() {

    return expect(await dropdownEditOption).getText().toEqual('Edit');
    
};
//confirm first element of dropdown list is 'Remove this study'
this.confirmRemoveOption = async function() {

    return expect(await dropdownRemoveOption).getText().toEqual('Remove this study');
    
};
//confirm first element of dropdown list is 'Transition this study'
this.confirmTransitionOption = async function() {

    return expect(await dropdownTransitionOption).getText().toEqual('Transition this study');
    
};


 // b) Enter the tech test study view
    
  this.clickDropdownMenuBar = async function(){
    await dropdownMenubar.click();
  }

  this.clickViewOption = async function(){
        await viewOption.click();
    }
   this.checkTechStudyIconIsPresent = async function(){
     await expect(techStudyIcon).isPresent().toBe(true);
   } 
    
    
        
// c) Enter the 'Data acquisition' asset group view 
 
  this.enterDataAcquisitionView = async function() {

    await dataAcquisitionView.click();
};
 
  this.chechDataAcquisitionIconIsPresent = async function(){

    await expect(dataAcquisitionIcon).isPresent().toBe(true);
 }

     

  // d) Select to view 'Forms'
  this.selectFormsView = async function() {

    await forms.click();
     
};
 
 this.checkFormViewIconIsPresent = async function(){

    await expect(formsViewIcon).isPresent().toBe(true);

}
     
     
  // a) Select to view the 'Medical History' form
  this.clickFormsDropdownMenu = async function(){

    await formsDropdown.click();
  }
  this.clickAllAssetsOption = async function(){
      
    await allAssetsOption.click();
  }
  this.enterMedicalHistoryInThenInput = async function(){
      
    await assetSearchInput.sendKeys('Medical History');
  }
  this.selectMedicalHistoryFormsView = async function() {

    await medicalHistoryAsset.click();
};

   
// b) Select to edit the form by adding a 'Description' property to the form
this.clickEditForm = async function() {

    await editMedicalHistory .click();
};
this.scrollToViewDescriptionTextArea = async function(){

    await browser.executeScript("arguments[0].scrollIntoView();", descriptionTextArea);
}
this.addDescriptionToForm = async function(){

    await descriptionTextArea.clear().sendKeys('Not Well');
}

// c) Save the change

// Auto Save

// d) Confirm the user update has been preserved on property panel, and on the main form view
this.checkUserUpdateIsPreserved = async function(){

    expect(await update.getText()).toEqual('Not Well');

}

}

module.exports = new Studiespage();