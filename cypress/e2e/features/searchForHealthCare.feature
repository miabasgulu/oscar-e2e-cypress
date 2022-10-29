@Regression @HealthCareSearch
Feature: Search for Oscar Health care

    @HealthCareSearch1 @Smoke
    Scenario: Search for Primary care providers
        Given User login to Oscar homepage
        When User navigates to care options page
        And User clicks on Search network button
        Then User verifies Select a Network modal window
        When User selects a network
        Then Verify user is on the Find care page
        When User searches for Primary care provider
        Then User verifies Primary care provider search result

    @HealthCareSearch2
    Scenario: Search for Hospitals
        Given User login to Oscar homepage
        When User navigates to care options page
        And User clicks on Search network button
        Then User verifies Select a Network modal window
        When User selects a network
        Then Verify user is on the Find care page
        When User searches for Hospitals
        Then User verifies Hospitals search result

    @HealthCareSearch3
    Scenario: Search for Drugs
        Given User login to Oscar homepage
        When User navigates to care options page
        And User clicks on Search network button
        Then User verifies Select a Network modal window
        When User selects a network
        Then Verify user is on the Find care page
        When User searches for Drugs
        Then User verifies Drugs search result

    @HealthCareSearch4
    Scenario: Search for Invalid keyword
        Given User login to Oscar homepage
        When User navigates to care options page
        And User clicks on Search network button
        Then User verifies Select a Network modal window
        When User selects a network
        Then Verify user is on the Find care page
        When User searches for Invalid keyword
        Then User verifies No result message