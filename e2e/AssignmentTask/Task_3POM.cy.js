import {Login} from "D:\\dec_2023\\cypress\\e2e\\AssignmentTask\\Task_3Login.js"
describe("Customer care", ()=> {

    it("Login",()=> {
 
     //  cy.visit.url();
        cy.visit("https://parabank.parasoft.com/parabank/index.htm")
         cy.fixture("LoginData_Customercare.json").then((d)=>{
            let obj=new Login()
            obj.username(d.users)
            obj.password(d.password)
            obj.login()
         }) 
        })
    })