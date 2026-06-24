import './css/style.css'
import Dashboard from "./components/index.js";
import Global from "./components/global.js";
import ServiceProvider from "./components/Service_provider.js";
import SignupForm from "./components/signup.js";
import OTPVerification from "./components/veirfy.js";
import AccountType from "./components/accouty_type.js";
const global = new Global








document.addEventListener('DOMContentLoaded', () =>{
switch(global.currentPage){
    case '/':
    case '/index.html':
        console.log('you are in home page');
         new Dashboard();
    break;
    case '/service_provider_profile_setup.html':
       new  ServiceProvider();
        console.log('you are in service provider page');
    break;
    case '/signup.html':
        console.log("your are in sign up page")
        new SignupForm();
    break;
    case '/verify.html':
        console.log('your are in otp verification page')
        new OTPVerification();
    break;
    case '/account-type.html':
        console.log('you are in account type page')
        new AccountType();

    
}

});