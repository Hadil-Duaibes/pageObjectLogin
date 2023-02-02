Feature: Log in

  I want to Login in Conduit
  
  # @smoke
  Scenario: Conduit Login
    Given I open Conduit login page
    When I type in
            | username | password |
        | marahdaibes@gmail.com | marah |
    And I click on Sign in button
    Then "Your Feed" should be shown
     
   




    
     