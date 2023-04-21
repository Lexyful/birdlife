describe('Home Page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://shibe.online/api/birds?count=50&urls=true&httpsUrls=true', {
      statusCode: 200,  
      fixture: "randomBird.json"
    })
    cy.visit('http://localhost:3000')
  })

  it('should have a title', () => {
    cy.get('h1').contains('Birdlife')
  })

  it('should have a nav bar with buttons', () => {
    cy.get('.nav-buttons')
    cy.get('.nav-button').contains('Home')
    cy.get('.nav-button').contains('Gallery')
    cy.get('.nav-button').contains('Favorite Birds')
  })

  it('should say Welcome when the user enters the site', () => {
    cy.get('h2').contains('Welcome')
  })

  it('Should display a picture of a random bird', () => {
    cy.get('.random-bird-img').should('have.attr', 'src').should('eq', 
    "https://cdn.shibe.online/birds/427304.jpg")
  })

  it('Should get a new random bird when the button is pressed', () => {
    cy.intercept('GET', 'https://shibe.online/api/birds?count=50&urls=true&httpsUrls=true', {
      statusCode: 200,  
      fixture: "randomBirdButton.json"
    })
    cy.get('.get-random').click();
    cy.get('.img-container').contains('.random-bird-img').should('have.attr', 'src').should('eq',   "https://cdn.shibe.online/birds/45532801.1603107766.jpg")
    cy.get('.get-random').find('button').contains('Get Random Bird')
   
  })
  });

 
   
