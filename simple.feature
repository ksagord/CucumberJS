Feature: Example

  @test1
  Scenario: Reading page
    Given I am on calculator.com
    When I click on 6
    And I click on divide
    And I click on 3
    Then result is 2