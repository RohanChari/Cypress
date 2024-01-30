import 'cypress-file-upload'
describe('uploadinf file', ()=> {

    it('upload case',()=> {
        cy.visit('https://the-internet.herokuapp.com/upload')
        //const filepath=""
        cy.get("#file-upload").attachFile('helloWorld.txt')
        cy.get("#file-submit").click()
        cy.wait(3000)
    })
})