
import { useContext, useEffect } from "react"
import { AppCtx } from "../context/Appcontext";
import { activateAccount } from "../Helpers/helper";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

export default function ActivationPage(){
   //required states is imported using useContext
    const {setSwitching}=useContext(AppCtx);
    //useParams is used to get the id value from the url
    const params=useParams();
    const id=params.id;
    //useNavigate is used to navigate between pages
    const navigate=useNavigate();
    //useEffect is used to make changes when the page is opened
    useEffect(()=>{
       //function to activate account is called and response is handled
       activateAccount(id).then((response)=>{

        let timerInterval;
        Swal.fire({
        title: response.message,
        html: "Redirection to Login Page",
        icon: response.message==="Activation Successfull"?"success":"error",
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getPopup().querySelector("b");
            timerInterval = setInterval(() => {
            timer.textContent = `${Swal.getTimerLeft()}`;
            }, 100);
        },
        willClose: () => {
            clearInterval(timerInterval);
        }
        }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
            navigate("/login");
            setSwitching("login");
        }
        });
    
    }).catch((response)=>{

        let timerInterval;
        Swal.fire({
        title: response.message,
        html: "Redirection to Login Page",
        timer: 3000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getPopup().querySelector("b");
            timerInterval = setInterval(() => {
            timer.textContent = `${Swal.getTimerLeft()}`;
            }, 100);
        },
        willClose: () => {
            clearInterval(timerInterval);
        }
        }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
            navigate("/login");
            setSwitching("login");
        }
        });
    });
    },[])
    return(
        <div className="activation-page-section content-center-section background-set h-screen text-center">
            <span className="loading loading-ball loading-lg"></span>
        </div>
    )
}
