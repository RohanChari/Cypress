import {RegisterData} from "D:\\dec_2023\\cypress\\e2e\\AssignmentTask\\Task_2ObjectClass.js"
describe("Customer care", ()=> {

    it("Register",()=> {
 
         cy.visit("https://parabank.parasoft.com/parabank/index.htm")
         cy.fixture("Data_Register.json").then((data)=>{
         
            let obj=new  RegisterData()
            obj. clickRegister()
            obj.FirstName(data.first)
            obj.LastName(data.last)
            obj.Address(data.address)
            obj.City(data.city)
            obj.State(data.state)
            obj.ZipCode(data.zipcode)
            obj.PhoneNumber(data.Pnumber)
            obj.SSN(data.ssn)
            obj.UserName(data.username)
            obj.Password(data.password)
            obj.ConfirmPassword(data.Cpassword)
            obj.RegisterButton() 

           })

        
        })
    })