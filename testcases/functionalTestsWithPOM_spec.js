var Mainpage = require('../pages/mainPage');
var Loginpage = require('../pages/loginPage');
var Studiespage = require('../pages/studiesPage');


describe('Functional Requirements of Application', function() {
  

     beforeAll(async function(){

         await Loginpage.get('https://ryze-staging.formedix.com/sign-in');

         await Loginpage.browserMaximise();
      })
      afterAll(async function(){

         await browser.close();

      })

      it('user should be able to login with the details provided', async function() {
         
         await Loginpage.loginfunction('testteamtechtest','T3chtester');

         await Loginpage.verifyPageTitle('Home - ryze');
        
      });  
      xit('Negative test : user should not be able to login with the details provided', async function() {
         
         await Loginpage.loginfunction('xxxxxxxxxx','yyyyyyyyyy');

         await Loginpage.errorMessage();

      });    

      it('Navigate to repository , select Studies and perform the following actions', async function(){
       
      //Navigate to repository and select Studies 
       
      await Mainpage.navigateToRepositorySelectStudies();
      

      await Mainpage.verifyPageTitle('Studies - ryze');

      // a) Confirm the options on the 'Tech Study' menu (three bar button on right hand side) 
       await Studiespage.confirmOptions();
      
      //confirm the count of the options is equal to 4

       await Studiespage.confirmOptionsCount();
     
      //confirm first element of dropdown list is 'View'

       await Studiespage.confirmViewOption();

      //confirm second element of dropdown list is 'Edit'

      await Studiespage.confirmEditOption();

      //confirm first element of dropdown list is 'Remove this study'

      await Studiespage.confirmRemoveOption();

      //confirm first element of dropdown list is 'Transition this study'

      await Studiespage.confirmTransitionOption();

       // b) Enter the tech test study view   

       await Studiespage.clickDropdownMenuBar();

       await Studiespage.clickViewOption();

       await Studiespage.checkTechStudyIconIsPresent();

      // c) Enter the 'Data acquisition' asset group view 
   

      await Studiespage.enterDataAcquisitionView();

      await Studiespage.chechDataAcquisitionIconIsPresent();

      // d) Select to view 'Forms'
      await Studiespage.selectFormsView();

      await Studiespage.checkFormViewIconIsPresent();

         
       });

       it('Perform the following user actions', async function(){

     // a) Select to view the 'Medical History' form       

          await Studiespage.clickFormsDropdownMenu();

          await Studiespage.clickAllAssetsOption();

          await Studiespage.enterMedicalHistoryInThenInput();

          await tudiespage.selectMedicalHistoryFormsView();

 // b) Select to edit the form by adding a 'Description' property to the form

         await Studiespage.clickEditForm();

         await Studiespage.scrollToViewDescriptionTextArea();

         await Studiespage.addDescriptionToForm();

 // c) Save the change

        // Auto Save

// d) Confirm the user update has been preserved on property panel, and on the main form view        

        await Studiespage.checkUserUpdateIsPreserved();


    })

      it('Logout of Application', async function(){

// a) Sign out is accessed by expanding the menu when the mouse is over the user icon on the bottom left hand side of the menu bar 

         await Mainpage.logOutOfApplication();

        await Mainpage.verifyPageTitle('Sign in - ryze');
         
         
       });
    
  
    
  });
   