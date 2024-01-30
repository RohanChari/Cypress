import {CustomerCareData} from "./Task_1ObjectClass.js"
describe("Customer care", ()=> {

    it("Customer Care Page",()=> {
 
         cy.visit("https://parabank.parasoft.com/parabank/index.htm")
         cy.fixture("Data_CustomerCarePage.json").then((data)=>{
         
            let obj=new  CustomerCareData()
            obj.clickmail()
            obj.EnterName(data.name)
            obj.EnterEmail(data.email)
            obj.PhoneNumber(data.phone)
            obj.Message(data.message)
            obj.SendToCustomerCare()
           })
       })
    })