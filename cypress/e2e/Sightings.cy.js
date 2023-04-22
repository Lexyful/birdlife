describe('Sightings', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://shibe.online/api/birds?count=50&urls=true&httpsUrls=true', {
      statusCode: 200,
      fixture: "sightings.json"
    })
    cy.visit('https://birdlife-lexyful.vercel.app/bird-gallery')
    cy.get('[href="/sightings"] > .nav-button').click()
  })

  it('should have no favorites when first visiting the site', () => {
    cy.visit('https://birdlife-lexyful.vercel.app/sightings')
    cy.get('.sightings').should('have.length', 0)
    cy.get('p').contains('You have not sighted any birds yet...')
  })

  it('should allow a user to favorite a bird image and delete one', () => {
    cy.visit('https://birdlife-lexyful.vercel.app//bird-gallery')
    cy.get(':nth-child(1) > .sighting-button').click()
    cy.get(':nth-child(2) > .sighting-button').click()
    cy.get('[href="/sightings"] > .nav-button').click()
    cy.get(':nth-child(1) > .delete-button').click()
    cy.get(".sightings").should('have.length', 1)
  })

});



