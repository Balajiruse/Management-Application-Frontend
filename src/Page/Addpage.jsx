/* eslint-disable react/prop-types */
import AddNewUser from "../Components/adduser";
import Topbar from "../Components/topbar";
// import Workspace from "../component/workpace";

const Addpage=({info, setinfo})=>{

    return(
       <>
        <Topbar/>
        <AddNewUser info={info} setinfo={setinfo}/>
       </>
    )
}

export default Addpage;
