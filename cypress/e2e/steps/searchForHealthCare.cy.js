import { Before, Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import { HomePage } from '../pages/homePage.js'
import { FindCarePage } from '../pages/findCarePage.js'
import { CareOptionsPage } from '../pages/careOptionsPage.js'

const homePage = new HomePage()
const findCarePage = new FindCarePage()
const careOptPage = new CareOptionsPage()

let oscar
Before(() => {
    cy.fixture('example.json').then((data) => {
        return oscar = data
    })
})

Given('User login to Oscar homepage', function () {
    homePage.navigateToPagesByURL(oscar.oscarBaseUrl)
})

When('User navigates to care options page', function () {
    homePage.clickOnElemOnHomePageHeaderByText(oscar.findADoctor)
})

And('User clicks on Search network button', () => {
    careOptPage.clickOnSearchNetworkButton()
})

Then('User verifies Select a Network modal window', () => {
    careOptPage.verifySelectANetworkModalWindow()
})

When('User selects a network', function () {
    careOptPage.clickOnCoverageYearDropdown()
    careOptPage.selectCoverageYear(oscar.year2023)
    careOptPage.clickOnCoverageAccessDropdown()
    careOptPage.selectCoveragePlan(oscar.medicareAdvantage)
    careOptPage.clickOnContinueButton()
})

Then('Verify user is on the Find care page', function () {
    findCarePage.verifyFindCarePage(oscar.findCarePageTitle)
})

When('User searches for Primary care provider', function () {
    findCarePage.searchForCareInNetworkByName(oscar.careProvider)
})

Then('User verifies Primary care provider search result', function () {
    findCarePage.verifySearchResultForPrimaryCareProvider(oscar.careProvider)
})

When('User searches for Hospitals', function () {
    findCarePage.searchForCareInNetworkByName(oscar.hospital)
})

Then('User verifies Hospitals search result', function () {
    findCarePage.verifySearchResultForHospitals(oscar.hospital)
})

When('User searches for Drugs', function () {
    findCarePage.searchForCareInNetworkByName(oscar.drug)
})

Then('User verifies Drugs search result', function () {
    findCarePage.verifySearchResultForDrug(oscar.drug)
})

When('User searches for Invalid keyword', function () {
    findCarePage.searchForInvalidKeyword(oscar.invalidKeyword)
})

Then('User verifies No result message', function () {
    findCarePage.verifyNoResultMessage(oscar.noResult)
})