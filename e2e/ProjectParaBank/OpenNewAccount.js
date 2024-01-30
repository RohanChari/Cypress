export{OpenNewAccount}
class OpenNewAccount{

     clickOpenNewAccount(){

       
        cy.get('#leftPanel > ul > :nth-child(1) > a').click()
        cy.get('#type').select('SAVINGS')    //.should('have.value','SAVINGS')
        cy.get('#fromAccountId').select('17118')   //select('22113').should('have.value','22113')
        cy.get('form.ng-valid > div > .button').click()

     }

}