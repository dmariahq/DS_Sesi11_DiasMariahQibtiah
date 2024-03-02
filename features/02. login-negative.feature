@digital-skola @login
Feature: Swag Labs - Login - Negative

  @negative
  Scenario: As a locked_out_user, I should get error message
    Given Dias is on the login page
    When Dias login with "locked_out_user" credential
    Then Dias should see error "Epic sadface: Sorry, this user has been locked out."