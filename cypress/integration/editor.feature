Feature: create new post

  I want to create new post in Conduit
  
  # @smoke
  Scenario: Conduit Login
    Given I open Conduit login page
    When I type in
            | username | password |
        | marahdaibes@gmail.com | marah |
    And I click on Sign in button
    Then "Your Feed" should be shown
     
   Scenario: new post
      When user cliks in new post
      And user type in Artical title field
      And user type in what is Artical about field
      And user type in write your Artical field
      And cliks on Publish Article button




    
     