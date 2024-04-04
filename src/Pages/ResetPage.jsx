
import BasePage from "../Components/BasePage";
import ResetForm from "../Components/ResetForm";

export default function ResetPage(){
    //resetForm component is passed as children for basepage component
    return(
        <div className="reset-page-section">
            <BasePage>
            <ResetForm/>
            </BasePage>
        </div>
    )
}
