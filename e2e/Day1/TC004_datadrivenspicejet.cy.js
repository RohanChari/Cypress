describe("Data Driven Spicejet", ()=> {

    it("using fixtures",()=>{
    cy.fixture("data_spicejet").then((data)=>{
     cy.visit(data.url)
                                                      //cy.get('.col-sm-4 > .form-control').select("Mr")
     cy.get('#first_name').type(data.firstname)
     cy.get('#last_name').type(data.lastname)
     cy.get(':nth-child(3) > :nth-child(1) > .form-control').select("Ghana")
     cy.get('#dobDate').click().should("be.visible").type(data.dobDate)
     cy.get('.react-tel-input > .form-control').type(data.number)
     cy.get('#email_id').click().type(data.email)
     cy.get('#new-password').click().type(data.password)
     cy.get('#c-password').type(data.cpassword)
     cy.get('#defaultCheck1').click()
     cy.get('.px-sm-4 > a > .btn').click()
    })
})

})