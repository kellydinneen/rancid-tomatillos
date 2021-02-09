describe('Dashboard UI', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Should be able to visit the page and render the title', () => {
    cy.get('header').contains('Rancid Tomatillos').should('be.visible')
  });

  it('Should render a section for the Top Rated movies that has the top three movies\'s titles and ratings', () => {
    cy.contains('Top Rated')
    cy.get('.top-three-section > #1').contains('7')
    cy.get('.top-three-section > #2').contains('7')
    cy.get('.top-three-section > #3').contains('6.8')
    cy.get('.top-three-section > #1').contains('h4', 'Peninsula')
    cy.get('.top-three-section > #2').contains('h4', 'Cats & Dogs 3: Paws Unite')
    cy.get('.top-three-section > #3').contains('h4', 'The King of Staten Island')

  })

  it('Should render a footer that contains an About, FAQ, and Contact Us links', () => {
    cy.get('footer').contains('About')
    cy.get('footer').contains('FAQ')
    cy.get('footer').contains('Contact Us')
  })

  // it('Should be able to visit the page and render the correct elements', () => {
  //     cy.get('.movies-container').children().first('link').click()
  //     cy.url()
  //     cy.contains('minutes')
  //     cy.get('.featuredMovieData').contains('Money Plane')
  // });

});
