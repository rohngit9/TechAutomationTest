# TechAutomationTest
Name: Rohini rudraraju
Non-functional requirements:
Project is build using javascript, Protractor, Jasmine Framework 

Why Protractor?

It is a end-to-end tests framework for Angular,Angular JS applications
Having new locator strategies and functions specifically for Angular apps
It can also be used for Non Angular Applications
It is a wrapper around Selenium WebDriverJS and Selenium Server
Can take advantage of the Selenium grid to run multiple browsers at once
Can run test on both real and headless browsers

Can use Jasmine or Mocha or Cucumber to write your test
The project has used Jasmine because Protractor internally uses Jasmine framework to Automate test cases

About Jasmine:

Jasmine is behavior-driven development framework for testing Javascript code
Protractor internally uses Jasmine framework to Automate test cases
It is Javascript Unit testing Framework
Jasmine helps to create the test
Protractor helps to run the test
Selenium Server helps to manage browsers
Selenium WebDriver helps to invoke browsers APIs

How to install Protractor on Windows os:

Step 1 : Download and install node.js
 https://nodejs.org/en/download/

Step 2 : Install Protractor
 npm install -g protractor
 protractor --version

Step 3 : Run command
 webdriver-manager update

Step 4 : Find conf.js file at C:\Users\Admin\AppData\Roaming\npm\node_modules\protractor\example

On cmd goto the location of this file and run command
 protractor conf.js
Step 5: Create a new folder and open in VS Code explorer

Step 6: Inside ProtractorDemo folder create 2 folders
 conf
 testcases

Step 7 : Goto the folder 

  C:\Users\admin\AppData\Roaming\npm\node_modules\protractor\example

Copy conf.js into conf folder in VSCode
Copy example_spec.js into testcases folder in VSCode

Step 8 : In conf.js update location of spec file

Step 9 : Run conf.js in protractor
 protractor conf.js
