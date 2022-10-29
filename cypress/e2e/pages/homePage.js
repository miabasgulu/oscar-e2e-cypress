export class HomePage {

    homePageHeader = 'header.NavWrapper_header__3FUS-'

    navigateToPagesByURL(url) {
        cy.visit(url)
    }

    clickOnElemOnHomePageHeaderByText(text) {
        cy.get(this.homePageHeader).contains(text).click()
    }
}