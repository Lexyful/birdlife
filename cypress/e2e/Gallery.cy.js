describe('Gallery', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://shibe.online/api/birds?count=50&urls=true&httpsUrls=true', {
      fixture: "gallery.json"
    })
    cy.visit('http://localhost:3000/bird-gallery')
    cy.get('[href="/bird-gallery"] > .nav-button')
  })

  it('should display all of the birds', () => {
    cy.get(".bird-card").should('have.length', 6 )
  })

  it('Should have the images and buttons for each card', () => {
    cy.get('.gallery-container > :nth-child(1)').find('img').should('have.attr', 'src', "https://cdn.shibe.online/birds/aec6e08e344aed0a0331fe86df0e6e58170952e1.jpg")
    cy.get('.gallery-container> :nth-child(1)').find('.favorite-button')
    cy.get('.gallery-container > :nth-child(6)').find('img').should('have.attr', 'src', "https://cdn.shibe.online/birds/a013ab07774e8a693fe676d92d93c93b7578ac8f.jpg")
    cy.get('.gallery-container > :nth-child(6)').find('.favorite-button')
  })
  
})