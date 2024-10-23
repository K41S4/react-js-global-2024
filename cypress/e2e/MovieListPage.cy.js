describe('MovieListPage Component', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:4000/movies*', (req) => {
      req.reply({
        statusCode: 200,
        body: {
          data: [
            {
              id: '1',
              title: 'Inception',
              vote_average: 8.8,
              poster_path: '/path/to/image.jpg',
              release_date: '2010',
              runtime: 148,
              overview: 'A movie description here.',
              genres: ['Comedy', 'Horror'],
            },
            {
              id: '2',
              title: 'The Matrix',
              vote_average: 8.8,
              poster_path: '/path/to/image.jpg',
              release_date: '2010',
              runtime: 148,
              overview: 'A movie description here.',
              genres: ['Horror', 'Crime'],
            },
          ],
        },
      });
    });

    cy.intercept('GET', 'http://localhost:4000/movies?*search=Matrix*', (req) => {
      req.reply({
        statusCode: 200,
        body: {
          data: [
            {
              id: '2',
              title: 'The Matrix',
              vote_average: 8.8,
              poster_path: '/path/to/image.jpg',
              release_date: '2010',
              runtime: 148,
              overview: 'A movie description here.',
              genres: ['Horror', 'Crime'],
            },
          ],
        },
      });
    });

    cy.intercept('GET', 'http://localhost:4000/movies/2*', (req) => {
      req.reply({
        statusCode: 200,
        body: {
          data: [
            {
              id: '2',
              title: 'The Matrix',
              vote_average: 8.8,
              poster_path: '/path/to/image.jpg',
              release_date: '2010',
              runtime: 148,
              overview: 'A movie description here.',
              genres: ['Horror', 'Crime'],
            },
          ],
        },
      });
    });

    cy.visit('http://localhost:3000');
  });

  it('displays list of movies from mocked response', () => {
    cy.get('[data-cy="movie-tile"]').should('have.length', 2);
    cy.contains('The Matrix').should('be.visible');
    cy.contains('Inception').should('be.visible');
  });

  it('updates the URL with the selected filter values', () => {
    const searchTerm = 'Matrix';
    cy.get('input').type(`${searchTerm}{enter}`);
    cy.contains('button', 'Horror').click();

    cy.url().should('include', 'search=Matrix&genre=Horror&sortBy=release_date');
    cy.get('[data-cy="movie-tile"]').should('have.length', 1);
    cy.get('[data-cy="movie-tile"]').contains(searchTerm);
  });

  it('updates the URL with the selected movie id', () => {
    cy.get('[data-cy="movie-tile"]').eq(1).click();
    cy.url().should('include', '/2');
  });

  it('navigates back to index page on Search link', () => {
    cy.visit('http://localhost:3000/2?search=Matrix');
    cy.contains('a', 'Search').click();
    cy.url().should('eq', 'http://localhost:3000/?search=Matrix');
  });
});
