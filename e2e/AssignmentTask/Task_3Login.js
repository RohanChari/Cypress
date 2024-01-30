export{Login}
class Login{

  //  url1(){
   //     cy.visit(url).should("be.visible");
   // }

     username(users){
        cy.get(':nth-child(2) > .input').click().type(users)
     }
    password(password){
        cy.get(':nth-child(4)').click().type(password)
    }
    login(){
        cy.get(':nth-child(5) > .button').click()
    }
}