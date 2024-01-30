export{TransferFund}
class TransferFund{

     clickTransferfund(){

       
        cy.get('a[href="/parabank/transfer.htm"]').click()
        cy.get('#amount').type(1000)
        cy.get('[data-layer="Content"]').select('17118')    //.should('have.value','SAVINGS')
        cy.get('#toAccountId').select('17673')                                              //cy.get('#fromAccountId').select('15120')   //select('22113').should('have.value','22113')
        cy.get(':nth-child(4) > .button').click()

     }

}