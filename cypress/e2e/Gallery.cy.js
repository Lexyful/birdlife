describe('Gallery', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://shibe.online/api/birds?count=50&urls=true&httpsUrls=true', {
      fixture: "gallery.json"
    })
    cy.visit('https://birdlife-lexyful.vercel.app/bird-gallery')
    cy.get('[href="/bird-gallery"] > .nav-button').click()
  })

  it('should display all of the birds', () => {
    cy.get(".bird-card").should('have.length', 6 )
  })

  it('Should have the images and buttons for each card', () => {
    cy.get(':nth-child(1) > .bird-card').should('have.attr', 'src', "https://cdn.shibe.online/birds/1be4e2a29bfea578c0dd53cc8354f5bdeb255eb8.jpg")
    cy.get(':nth-child(1) > .sighting-button')
    cy.get(':nth-child(2) > .bird-card').should('have.attr', 'src', "https://cdn.shibe.online/birds/aec6e08e344aed0a0331fe86df0e6e58170952e1.jpg")
    cy.get(':nth-child(2) > .sighting-button')
  
  })

  it('Should show an error message when random bird can/t be fetched', () => {
      cy.intercept('GET', 'https://shibe.online/api/birds?count=50&urls=true&httpsUrls=true', {
        statusCode: 404,  
      })
      cy.visit('https://birdlife-lexyful.vercel.app/bird-gallery')
      cy.get('[href="/bird-gallery"] > .nav-button').click()
      cy.get('.error-message')
    })
  })
  
  
