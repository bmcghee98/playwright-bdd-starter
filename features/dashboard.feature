@smoke @dashboard
Feature: Dashboard access

  @happy-path
  Scenario: User views dashboard
    Given I am logged in
    When I open the dashboard
    Then I see the welcome message
