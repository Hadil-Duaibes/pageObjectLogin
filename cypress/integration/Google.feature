# Feature: Google Main Page

#   I want to open a search engine
  
# #   @focus
#   Scenario: Opening a search engine page
#     Given I open Google page
#     Then I see "Google" in the title

Feature: Background Section
  
   Background:
    Given counter has been reset

   Scenario: Basic example #1
     When counter is incremented
     Then counter equals 1

   Scenario: Basic example #2
     When counter is incremented
     When counter is incremented
     Then counter equals 2    