export class FindCarePage {

    findCarePageTitle = 'h2.h-16SHiouJ4iMqa3AOPl6sBm'
    searchBox = '.h-3419BW0DMOHRoKSKuyHcvq span'
    primaryCareProviderHeader = '.h-12tUmi2-Ia0AlTFP46GUJZ.o-headerContainer'
    hospitalHeader = '.h-TT71KzTXSTgNuDkLjcvS0.o-container'
    drugHeader = '.h-CrYHhFWSis_oo-mvsW61V.o-primaryInfoContainer'
    searchSuggestionContainer = '.h-1WRxo7WevgPEQQIqQcSlA4.o-resultsContainer'

    searchForCareInNetworkByName(value) {
        cy.get(this.searchBox).type(value)
        cy.get(this.searchSuggestionContainer).contains(value).click()
    }

    searchForInvalidKeyword(value) {
        cy.get(this.searchBox).type(value)
    }

    verifyFindCarePage(title) {
        cy.get(this.findCarePageTitle).contains(title).should('be.visible')
    }

    verifySearchResultForPrimaryCareProvider(result) {
        cy.get(this.primaryCareProviderHeader, { timeout: 10000 }).contains(result).should('be.visible')
    }

    verifySearchResultForHospitals(result) {
        cy.get(this.hospitalHeader, { timeout: 10000 }).contains(result).should('be.visible')
    }

    verifySearchResultForDrug(result) {
        cy.get(this.drugHeader, { timeout: 10000 }).contains(result).should('be.visible')
    }

    verifyNoResultMessage(result) {
        cy.get(this.searchSuggestionContainer, { timeout: 10000 }).contains(result).should('be.visible')
    }
}