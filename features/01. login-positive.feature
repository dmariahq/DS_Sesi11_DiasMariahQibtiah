@digital-skola @login
Feature: Swag Labs - Login - Positive

  @positive
  Scenario: As a standard_user, I want to log in successfully
    Given Dias is on the login page
    When Dias login with "standard_user" credential
    And Dias should see home page