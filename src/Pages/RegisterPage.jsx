
import BasePage from "../Components/BasePage";
import RegisterForm from "../Components/RegisterForm";


export default function RegisterPage(){
    //registerform component is passed as children for basepage component
    return(
        <div className="register-page-section">
            <BasePage>
               <RegisterForm/>
            </BasePage>
        </div>
    )
}
