Feature: Add a new item
   I want add a item

   Scenario: added a new item
     Given I go to the add new item page
     When  I add a new item
     Then I see new item added
     Then I can add another item