export{CustomerCareData}
class CustomerCareData
{
    clickmail(){

        cy.get('.contact > a').click()
    }

    EnterName(name){

          cy.get('#name').type(name)
    }
   
    EnterEmail(mail)
    {
        cy.get(':nth-child(2) > [width="20%"]').type(mail)
    }


    PhoneNumber(number){
     
        cy.get('#phone').type(number)

    }

    Message(message){

        cy.get('#message').type(message)
    }
    
    
    SendToCustomerCare()
    {
        cy.get('[colspan="2"] > .button').click()
    }

}