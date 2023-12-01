import { useParams } from "react-router-dom";
import Workspace from "../Components/Workspace";
import Editbooks from "../Components/editbooks";


const Bookseditpage=()=>{
    const { id } =useParams()

    return(
        <Workspace>
            <Editbooks editid={id}/>
        </Workspace>
    )

}
export default Bookseditpage;
