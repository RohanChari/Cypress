export {spicejetsignup}
class spicejetsignup{
 
    

select(selectMr) {

    cy.get('.col-sm-4 > .form-control').select(selectMr)   

}   

enterfirstname(firstname)
    
     {
        cy.get('#first_name').click().type(firstname)
    }
   
enterlastname(lastname)
    {
        cy.get('#last_name').click().type(lastname)
    }


country(cou){

    cy.get(':nth-child(3) > :nth-child(1) > .form-control').select(cou)
}

Dob(Date){

    cy.get('#dobDate').click().should("be.visible").type(Date)
}



phonenumber(number){

    cy.get('.react-tel-input > .form-control').should("be.visible").type(number)


}

email(emailenter){

    cy.get('#email_id').should("be.visible").click().type(emailenter)
}


passwordfill(pass){

    cy.get('#new-password').click().type(pass)
}



confirmpass(Cpass){

    cy.get('#c-password').should("be.visible").type(Cpass)
}


agree(){

    cy.get('#defaultCheck1').click()

}


sumbit(){

    cy.get('.px-sm-4 > a > .btn').click()
}








}