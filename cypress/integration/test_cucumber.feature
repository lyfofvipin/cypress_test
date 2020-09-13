Feature: The GitHub
 
  Test the login Feature of GitHub
  
  Scenario: I Login to GitHub
    Given I open GitHub login page
    When I enter username
    And I enter password
    And I Click on Login button
    Then I am able to login
    