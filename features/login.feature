Feature: User Login
  As a valid user
  I want to log into the application
  So that I can access my dashboard

  Scenario: Login with valid credentials
    Given I navigate to the login page
    When I enter valid login details
    And I submit the form
    Then I should see my dashboard
