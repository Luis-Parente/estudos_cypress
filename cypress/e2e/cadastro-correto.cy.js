describe('Página de cadastro', () => {
  it('Deve preencher os campos do formulário corretamente para cadastro de um novo usuário', () => {
      cy.visit('https://adopet-frontend-cypress.vercel.app/');
      cy.get('[data-test="register-button"]').click();

      cy.cadastrar('Ana de Jesus', 'ana.exemplo.123@exemplo.com', 'Ana@123');
  })
})