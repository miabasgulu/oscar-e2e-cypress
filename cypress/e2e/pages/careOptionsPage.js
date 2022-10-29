export class CareOptionsPage {

    searchNetworkBtn = 'div.Button_content__yNdi7'
    selectANetworkModalWindow = '.Modal_modalContentWrapper__1Yv-1'
    listOfSelectNetworkDropdowns = 'div.Dropdown_value__3n1NL'
    selectNetworkDropdownMenu = 'ul[role="listbox"]'

    clickOnSearchNetworkButton() {
        cy.get(this.searchNetworkBtn).click()
    }

    clickOnContinueButton() {
        cy.get(this.selectANetworkModalWindow).contains('Continue').click()
    }

    clickOnCoverageYearDropdown() {
        cy.get(this.listOfSelectNetworkDropdowns).eq(0).click({ force: true })
    }

    clickOnCoverageAccessDropdown() {
        cy.get(this.listOfSelectNetworkDropdowns).eq(1).click({ force: true })
    }

    selectCoverageYear(year) {
        cy.get(this.selectNetworkDropdownMenu).contains(year).click()
    }

    selectCoveragePlan(plan) {
        cy.get(this.selectNetworkDropdownMenu).contains(plan).click()
    }

    verifySelectANetworkModalWindow() {
        cy.get(this.selectANetworkModalWindow).contains('Select a network').should('be.visible')
    }
}