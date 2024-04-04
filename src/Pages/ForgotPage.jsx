
import BasePage from "../Components/BasePage";
import ForgotForm from "../Components/ForgotForm";

export default function ForgotPage(){
    //forgotform component is passed as children for basepage component
    return(
        <div className="forgot-page-section">
            <BasePage>
            <ForgotForm/>
            </BasePage>
        </div>
    )
}
