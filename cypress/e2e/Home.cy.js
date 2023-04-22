describe('Home', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://shibe.online/api/birds?count=50&urls=true&httpsUrls=true', {
        
      fixture: "randomBird.json"
    })
    cy.visit('https://birdlife-lexyful.vercel.app/')
  })

  it('should have a title', () => {
    cy.get('h1').contains('Birdlife')
  })

  it('should have a nav bar with buttons', () => {
    cy.get('.nav-buttons')
    cy.get('.nav-button').contains('Home')
    cy.get('.nav-button').contains('Gallery')
    cy.get('.nav-button').contains('Sightings')
  })

  it('should say Welcome when the user enters the site', () => {
    cy.get('h2').contains('Welcome')
    cy.get('.beginners-container').contains('Hello bird watching beginners! Not sure where to start your bird watching journey? Go to the Gallery page and browse birds. Once you have sighted the birds out in the wild, save them to the Sightngs page to keep track of the birds, you have checked off of the list. If you do not have time to go out but you would still like to sight these birds, click the Get Random Bird and bird watch right on this very page!')
  })

  it('Should display a picture of a random bird', () => {
    cy.get('.random-bird-img').should('have.attr', 'src').should('eq',"https://cdn.shibe.online/birds/1be4e2a29bfea578c0dd53cc8354f5bdeb255eb8.jpg")
  })

  it('Should get a new random bird when the button is pressed', () => {
    cy.intercept('GET', 'https://shibe.online/api/birds?count=50&urls=true&httpsUrls=true', { 

      fixture: "randomBird.json"
    })
    cy.get('.get-random > button').click()
    cy.get('.random-bird-img').should('have.attr', 'src').should('eq',"https://cdn.shibe.online/birds/1be4e2a29bfea578c0dd53cc8354f5bdeb255eb8.jpg")
   
  })

  it('Should show an error message when random bird can/t be fetched', () => {
    cy.intercept('GET', 'https://shibe.online/api/birds?count=50&urls=true&httpsUrls=true', {
      statusCode: 404,  
    })
    cy.get('.error-message')
    })

  });

 
   
