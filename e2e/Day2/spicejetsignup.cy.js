import {spicejetsignup} from "D:\\dec2023\\cypress\\e2e\\Day2\\spicejetrepo.js"
describe("spicejet test1",()=>{

    it("openspicejet",()=>{

    cy.fixture("data_spicejet.json").then((d)=>{
    const obj  = new spicejetsignup()
    cy.visit(d.url);
    obj.select(d.select);                                                 //cy.url().should("eq","https://spiceclub.spicejet.com/signup")
    obj.enterfirstname(d.firstname);
    obj.enterlastname(d.lastname);
    obj.country(d.country);
    obj.Dob(d.DOB);
    obj.phonenumber(d.Pnumber);
    obj.email(d.emailadd);
    obj.passwordfill(d.pass);
    obj.confirmpass(d.Confirm)
    obj.agree();
    obj.sumbit();

  })
})        
})       
       







       
   /* cy.visit("https://spiceclub.spicejet.com/signup")
        cy.get('.col-sm-4 >.form-control').should("be.visible")
        cy.get('.col-sm-4 > .form-control').select("Mr")
        cy.get('#first_name').should("be.visible").type("Rohan")
        cy.get('#last_name').should("be.visible").type("chari")
        cy.get(':nth-child(3) > :nth-child(1) > .form-control').select("Ghana")
        cy.get('#dobDate').click().should("be.visible").type("12-september-1997")
        cy.get('.react-tel-input > .form-control').should("be.visible").type("8327883447")
        cy.get('#email_id').should("be.visible").click().type("chary@gmail.com")
        cy.get('#new-password').click().type("Sahd#1234")
        cy.get('#c-password').should("be.visible").type("Sahd#1234")
        cy.get('#defaultCheck1').click()
        cy.get('.px-sm-4 > a > .btn').click()*/
     
