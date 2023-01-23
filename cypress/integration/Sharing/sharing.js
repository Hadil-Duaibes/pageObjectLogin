Given('I go to the add new item page', () => {
    cy.visit('/addItem');
  });
  
  When('I add a new item', () => {
    cy.get('input[name="addNewItem"]').as('addNewItemInput');
    cy.get('@addNewItemInput').type('My item');
    cy.get('button[name="submitItem"]').click();
  })
  
  Then('I see new item added', () => {
    cy.get('td:contains("My item")');
  });
  
  Then('I can add another item', () => {
    expect(cy.get('@addNewItemInput').should('be.empty'));
  });