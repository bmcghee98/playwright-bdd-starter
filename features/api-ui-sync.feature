Feature: API + UI sync

  Scenario: Dashboard shows data created by API
    Given I am logged in 
    When I create a record via API
    And I open the dashboard
    Then I see the new record
