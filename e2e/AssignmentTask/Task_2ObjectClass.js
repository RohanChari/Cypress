export{RegisterData}
class RegisterData{

     clickRegister(){

        cy.get('#loginPanel > :nth-child(3) > a').click()

     }

    FirstName(first){

        cy.get('input[name="customer.firstName"]').click().type(first)
    }

    LastName(last){

        cy.get('input[name="customer.lastName"]').click().type(last)
    }

    Address(address){

        cy.get('input[name="customer.address.street"]').click().type(address)
    }

    City(city){

        cy.get('input[name="customer.address.city"]').click().type(city)
    }
    
    State(state){

        cy.get('input[name="customer.address.state"]').click().type(state)
    }

    ZipCode(zipcode){

        cy.get('input[name="customer.address.zipCode"]').click().type(zipcode)
    }

    PhoneNumber(Pnumber){

        cy.get('input[name="customer.phoneNumber"]').click().type(Pnumber)
    }
    
    SSN(ssn){

        cy.get('input[name="customer.ssn"]').click().type(ssn)
    }

   UserName(username){

    cy.get('input[name="customer.username"]').click().type(username)
   }

    
   Password(password){

    cy.get('input[name="customer.password"]').click().type(password)
   }

    
   ConfirmPassword(Cpassword){

    cy.get('input[name="repeatedPassword"]').click().type(Cpassword)
    }

   
    RegisterButton(){

    cy.get('input[value="Register"]').click()
    }


}