import {loginpage} from "D:\\dec_2023\\cypress\\e2e\\Day2\\Loginrepository.js"
 describe("orangeHRM", ()=> {
  
    it("Login", ()=>{

cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
cy.fixture("data_orangeHRM.json").then((d)=>{
let obj  =new loginpage()
obj.enterusername(d.username)
obj.enterpassword(d.password)
obj.clickonsubmit()


  //cy.get("input[name=username]").type(d.username) 
  //cy.get("input[name=password]").type(d.password)
  //cy.get("button[type=submit]").click()
})
  })
 })
 
 /*import loginpage from  "D:\dec2023\cypress\e2e\Loginrepository.js"
describe("Login with orangehrm", ()=> {

 
   it("Login",()=>{
     
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
     cy.get("input[name=username]").type("Admin")
     cy.get("input[name=password]").type("Admin")
     cy.get("button[type=submit]").click()
  
 })
 
 })*/