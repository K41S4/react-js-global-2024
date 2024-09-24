describe('GenreSelect Component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('renders all genre buttons', () => {
    cy.get('[data-cy=genre-select]')
      .find('button')
      .should('have.length', 4);
  });

  it('applies the selected style to the selected genre', () => {
    const selectedGenre = 'Comedy';
    cy.contains('button', selectedGenre)
      .click()
      .should('have.attr', 'data-selected', 'true');
  });
});