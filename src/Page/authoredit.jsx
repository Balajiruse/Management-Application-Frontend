import { useParams } from "react-router-dom"
import Workspace from "../Components/Workspace"
import Editauthordata from "../Components/editauthor"

const Authoreditpage =()=>{
    const { id } =useParams()

    return(
        <Workspace>
            <Editauthordata  editid={id}/>    
        </Workspace>
    )

}
export default Authoreditpage
