import { usuarios } from '../fixtures/usuarios.json';

describe('Cadastro em massa', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app');
        cy.get('[data-test="register-button"]').click();
    })

    usuarios.forEach((usuario) => {
        it(`Deve cadastrar o usuário ${usuario.name} com email ${usuario.email}`, () => {
            cy.limparFormularioCadastro();
            cy.cadastrar(usuario.name, usuario.email, usuario.password);
        })
    })
})