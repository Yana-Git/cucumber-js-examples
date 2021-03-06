Feature: Cucumber documentation
    As a user of cucumber.js
    I want to have documentation on cucumber
    So I can write better applications


    Scenario: Usage documentation
        Given I am on the cucumber.js GitHub repository
        When I go to the README file
        Then I should not see a "Usage" section


    Scenario: Status badges
        Given I am on the cucumber.js GitHub repository
        When I go to the README file
        Then I should see a "Dependencies" badge
        And I can see a "Build" badge
