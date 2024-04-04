
import BasePage from "../Components/BasePage";
import LoginForm from "../Components/LoginForm";

export default function LoginPage(){
    //loginform component is passed as children for basepage component
    return(
        <div className="login-page-section">
            <BasePage>
               <LoginForm/>
            </BasePage>
        </div>
    )
}
