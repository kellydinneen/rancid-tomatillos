describe('Dashboard UI', () => {
  beforeEach(() => {
    cy.fixture('testMovies.json')
      .then((testMovies) => {cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
        statusCode: 200,
        body: testMovies
      })})
    cy.fixture('testMovies.json')
      .then((testMovie) => {cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/726739', {
        statusCode: 200,
        body: testMovie
      })})
    cy.visit('http://localhost:3000');
  });

  it('Should be able to visit the page and render the title', () => {
    cy.get('header').contains('Rancid Tomatillos').should('be.visible')
  });

  it('Should render a section for the Top Rated movies that has the top three movies\'s titles and ratings', () => {
    cy.contains('Top Rated')
    cy.get('.top-movie-rating1').contains('7')
    cy.get('.top-movie-rating2').contains('7')
    cy.get('.top-movie-rating3').contains('6.8')
    cy.get('#1').contains('Cats & Dogs 3: Paws Unite')
    cy.get('#2').contains('Peninsula')
    cy.get('#3').contains('The King of Staten Island')
  });

  it('Should be able to click the rating or title for the top rated movie and visit the correct Movie Details page', () => {
    cy.get('.top-movie-rating1').click()
    cy.url().should('include', 'movie-details/Cats&Dogs3:PawsUnite')
  });

  it('Should have a section containing all of the movie posters', () => {
    cy.get('.movies-container a').should('have.length', '8')
  });

  it('Should be able to click the first child in the movie container and go to the url with the title of the movie as the endpoint', () => {
    cy.get('.movies-container').children().first().click()
    cy.url().should('include', 'Cats&Dogs3:PawsUnite')
  })

  it('Should have a left scroll image that has an alt stating it is the left scroll image', () => {
    cy.get('.scrollButtonLeft').should('have.attr', 'alt', 'Scroll Left Arrow')
  });

  it('Should have a right scroll image that has an alt stating it is the right scroll image', () => {
    cy.get('.scrollButtonRight').should('have.attr', 'alt', 'Scroll Right Arrow')
  });

  it('Should scroll to the right in the section containing all the movie posters.', () => {
    cy.get('.movies-container').scrollTo('right')
  });

  it('Should render a footer that contains an About, FAQ, and Contact Us links', () => {
    cy.get('.about').contains('About')
    cy.get('.faq').contains('FAQ')
    cy.get('.contact-us-page').contains('Contact Us')
  });

  it('Should be able to click the footer link About and visit the corresponding page', () => {
    cy.get('.about').click()
    cy.url().should('include', '/about')
  });

  it('Should be able to click the footer link FAQ and visit the corresponding page', () => {
    cy.get('.faq').click()
    cy.url().should('include', '/faq')
  });

  it('Should be able to click the footer link Contact Us and visit the corresponding page', () => {
    cy.get('.contact-us-page').click()
    cy.url().should('include', '/contact-us')
  });

});

describe('Dashboard UI 404 Error', () => {
  beforeEach(() => {
      cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
        statusCode: 404
      })
    cy.visit('http://localhost:3000');
  });

  it('Should display the error number and a message when something goes wrong with the api call to retrieve all of the movies is not ok', () => {
    cy.get('main').contains("404 error. Sorry! Something went wrong! Try again later or go to Contact Us to contact the developers with questions!")
  })
});

describe('Dashboard UI Errors', () => {
  beforeEach(() => {
    cy.fixture('testMovies.json')
      .then((result) => {
        cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
        statusCode: 500,
        body: result.error500
      })})
    cy.visit('http://localhost:3000');
  });

  it('Should display the error number and a message when something goes wrong with the api call to retrieve all of the movies is not ok', () => {
    cy.get('main').contains("500 error. Sorry! Something went wrong! Try again later or go to Contact Us to contact the developers with questions!")
  })
});

describe('Dashboard UI', () => {
  beforeEach(() => {
    cy.fixture('testMovies.json')
      .then((testMovies) => {cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
        statusCode: 200,
        delay: 100,
        body: testMovies
      })})

      cy.visit('http://localhost:3000');
    });

    it('Should have a loading message while retrieving the movies', () => {
      cy.get('.loading-message').contains('Loading...')
    });
});
