describe('Página de cadastro', () => {
  it('Deve preencher os campos do formulário corretamente para cadastro de um novo usuário', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="register-button"]').click();
    cy.get('[data-test="input-name"]').type('Ana de Jesus');
    cy.get('[data-test="input-email"]').type('ana.exemplo.123@exemplo.com');
    cy.get('[data-test="input-password"]').type('Ana@123');
    cy.get('[data-test="input-confirm-password"]').type('Ana@123');
    cy.get('[data-test="submit-button"]').click();
  })
})