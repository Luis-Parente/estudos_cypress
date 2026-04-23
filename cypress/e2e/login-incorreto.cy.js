describe('Página de login', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="login-button"]').click();
    })

    it('Deve deixar os campos de email e senha em branco e exibir mensagem de erro', () => {
        cy.get('[data-test="submit-button"]').click();
        cy.contains('É necessário informar um endereço de email').should('be.visible');
        cy.contains('Insira sua senha').should('be.visible');
    })

    it('Deve preencher o campo de email incorretamente e exibir mensagem de erro', () => {
        cy.login('ana.exemplo.123', 'Ana@123');
        cy.contains('Por favor, verifique o email digitado').should('be.visible');
    })

    it('Deve preencher o campo de senha incorretamente e exibir mensagem de erro', () => {
        cy.login('ana.exemplo.123@exemplo.com', 'ana@123');
        cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible');
    })

    it('Deve preencher os campos de email e senha incorretamente e exibir mensagens de erro', () => {
        cy.login('ana.exemplo.123', 'ana@123');
        cy.contains('Por favor, verifique o email digitado').should('be.visible');
        cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible');
    })
})
