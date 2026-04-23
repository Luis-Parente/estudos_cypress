describe('API do Adopet', () => {
    const auth = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMTY0M2NkNi03MTEyLTQxNWItOTVkMi0wNzkwNGIwZDFhMWMiLCJhZG9wdGVyTmFtZSI6IkFuYSBkZSBKZXN1cyIsImlhdCI6MTc3Njk4MTc1NSwiZXhwIjoxNzc3MjQwOTU1fQ.M9-yre0SYd4HXgr4UPK3gdhBKKVhxpf6mLjPpXjZX5w`;

    it('Deve retornar nome do usuário autenticado', () => {
        cy.request({
            method: 'GET',
            url: 'https://adopet-api-i8qu.onrender.com/adotante/perfil/11643cd6-7112-415b-95d2-07904b0d1a1c',
            headers: { Authorization: auth }
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('perfil')
            expect(res.body.perfil.nome).to.be.equal('Ana de Jesus')
        })
    })
})