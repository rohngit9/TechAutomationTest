describe('Functional Requirements of Application', function() {

      beforeAll(async function(){

         await browser.get('https://ryze-staging.formedix.com/sign-in');

         await browser.manage().window().maximize();
   })

      it('user should be able to login with the details provided', async function() {
         
         
         await element(by.model('$ctrl.userId')).sendKeys('testteamtechtest');

         await element(by.model('$ctrl.password')).sendKeys('T3chtester');

         await element(by.buttonText('SIGN IN')).click();
  
       
         expect(await browser.getTitle()).toEqual('Home - ryze');

      }); 
       
      xit('Negative test : user should not be able to login with the details provided', async function() {
         
         await element(by.model('$ctrl.userId')).sendKeys('xxxxxxxxxxx');
          
         await element(by.model('$ctrl.password')).sendKeys('yyyyyyyyyyy');
          
         await element(by.buttonText('SIGN IN')).click();
         
         expect(await element(by.css('alert-danger-text ng-scope')).getText()).toContain('invalid');
        
      });     

      it('Navigate to repository , select Studies and perform the following actions', async function(){

       //Navigate to repository and select Studies  
         var repository = element(by.xpath("//div[@id='fdxMainNav']/ul/li[@id='menuMdb']"));

         var studies = element(by.xpath("//div[@id='fdxSubNav']/div/ul/li[@id='menuMdbStudies']"));

         await repository.click();

         studies.click();

         expect( await browser.getTitle()).toEqual('Studies - ryze');
       
       // a) Confirm the options on the 'Tech Study' menu (three bar button on right hand side)

       var texts = element.all(by.xpath("//ul[@class='dropdown-menu']/li")).map(function (elm) {

         return elm.getAttribute('innerText');

      });

      expect(texts).toEqual(['View','Edit','Remove this study','Transition this study']);
      
       //confirm first element of dropdown list is 'View'
      
      
       
       expect(element(by.xpath("//ul[@class='dropdown-menu']/li[@id='fdxMdbContainerListItem0View']")).getAttribute('innerText')).toEqual('View');

      
       // b) Enter the tech test study view

          await element(by.id("fdxMdbContainerListItem0MenuToggle")).click();

          await  element(by.id("fdxMdbContainerListItem0View")).click();

          expect(element(by.id('crumb-containerDetails')).isPresent()).toBe(true);

          expect( await browser.getTitle()).toEqual('ryze');

       // c) Enter the 'Data acquisition' asset group view 

          await element(by.id("dataAcquisitionName")).click();

          expect(element(by.id('crumb-agDetails')).isPresent()).toBe(true);

       // d) Select to view 'Forms'
          
          await element(by.id("FORMTypeName")).click();

           expect(element(by.id('crumb-assetDetails')).isPresent()).toBe(true);

       });

       it('Perform the following user actions', async function(){

         
        // a) Select to view the 'Medical History' form

        element(by.xpath("//*[@id='searchableDropdownToggle']/div[1]/div[2]")).click();

        element(by.xpath("//*[@id='all']/div/span[2]")).click();

        element(by.id("assetLabelSearch")).sendKeys('Medical History');

        element(by.xpath("//*[@id='uuid-eb65cabf-c3f4-497c-893d-7ab4d81d5a25']/div/div/span[2]/div[2]/span[text()='Medical History']")).click();

        // b) Select to edit the form by adding a 'Description' property to the form

        await element(by.id("switchEditMode")).click();

        var descriptionTextArea = element(by.id("assetLocaleEditTextTextareadescriptionxx"));

        await browser.executeScript("arguments[0].scrollIntoView();", descriptionTextArea);
        
        descriptionTextArea.clear().sendKeys('Not Well');

        // c) Save the change

        // Auto Save

        // d) Confirm the user update has been preserved on property panel, and on the main form view

          var update = element(by.id("sectionDescription"));

         expect(await update.getText()).toEqual('Not Well');

       })

      it('Logout of Application', async function(){

        
         // a) Sign out is accessed by expanding the menu when the mouse is over the user icon on the bottom left hand side of the menu bar 
         
          var techTest = element(by.id("menuUser"));

          //move right 
          var logOut = element(by.xpath("//div[@id='fdxSubNav']/div/ul/li[@id='menuUserLogout']"));

          await techTest.click();

          logOut.click();

         
          expect(await browser.getTitle()).toEqual('Sign in - ryze');
          
       });
    
  
    
  });
   