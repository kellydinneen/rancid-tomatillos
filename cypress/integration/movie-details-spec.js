describe('Movie Details UI', () => {
  beforeEach(() => {
    cy.fixture('testMovies.json')
      .then((testMovies) => {cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
        statusCode: 200,
        body: testMovies
      })})
    cy.fixture('testUsers.json')
      .then((testUsers) => {cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/users', {
        statusCode: 200,
        body: testUsers
      })})
    cy.fixture('testMovies.json')
      .then((testMovies) => {cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/726739/videos', {
        statusCode: 200,
        body: testMovies.videos
      })})
    cy.fixture('testMovies.json')
      .then((testMovie) => {cy.intercept('PATCH', 'https://rancid-tomatillos.herokuapp.com/api/v2/users/u1', {
        statusCode: 200,
        body: testMovie
      })})
    cy.visit('http://localhost:3000').wait(1000);
    cy.get('.movies-container').children().first('link').click().wait(50)
  });

  it('Should have header and footer', () => {
      cy.get('footer').contains('About')
      cy.get('footer').contains('FAQ')
      cy.get('header').contains('Rancid Tomatillos')
  });

  it('Should return to home after clicking site title', () => {
      cy.get('header').find('.site-title').click()
      .url().should('not.include','Cats&Dogs3:PawsUnite')
      cy.contains('Top Rated')
  });

  it('Should return to home after clicking home button', () => {
      cy.get('header').find('img').click()
      .url().should('not.include','Cats&Dogs3:PawsUnite')
      cy.contains('Top Rated')
  });

  it('Should show movie backdrop', () => {
      cy.get('.trailerContainer').children().first().should('have.class','movieBackdrop')
  });

  it('Should show movie title and rating', () => {
      cy.get('.featuredMovieData').children().first().contains('Cats & Dogs 3: Paws Unite')
      .next().contains('★')
  });

  it('Should show movie year, genre, and runtime', () => {
      cy.get('.movieData').children().first().contains('2020-10-02')
      .next().contains('Action')
      .next().contains('84 minutes')
  });

  it('Should show movie overview', () => {
      cy.get('.overview').contains('It\'s been ten years since the creation of the Great Truce, an elaborate joint-species surveillance system designed and monitored by cats and dogs to keep the peace when conflicts arise. But when a tech-savvy villain hacks into wireless networks to use frequencies only heard by cats and dogs, he manipulates them into conflict and the worldwide battle between cats and dogs is BACK ON. Now, a team of inexperienced and untested agents will have to use their old-school animal instincts to restore order and peace between cats and dogs everywhere.')
  });

  it('Should reveal trailer', () => {
    cy.get('.viewTrailerBtn').click().wait(500)
    cy.get('.trailerContainer').children().first().should('have.class','trailer')
      .get('.trailer').click()
  });

  it('Should play trailer', () => {
    cy.get('.viewTrailerBtn').click()
    cy.get('.trailer').click()
  });

  it('Should hide trailer', () => {
    cy.get('.viewTrailerBtn').click().wait(500)
    cy.get('.trailerContainer').children().first().should('have.class','trailer')
    cy.get('.viewTrailerBtn').click().wait(500)
    cy.get('.trailerContainer').children().first().should('have.class','movieBackdrop')
  });

  it('Should be able to add movie to favorites', () => {
    cy.get('.favorite-btn').click().wait(1000)
    cy.get('.profile-link').click().wait(50)
    cy.get('.movies-container').children().children()
    .should('have.class','poster 726739')
  });

  it('Should be able to delete movie from favorites', () => {
    cy.get('.favorite-btn').click().wait(1000)
    cy.get('.profile-link').click().wait(50)
    cy.get('.favorites').children().last().children().should('not.have.class','poster 726739')
  });


});
