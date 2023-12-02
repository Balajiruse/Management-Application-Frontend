import { useNavigate } from "react-router-dom"


export default function Topbar(){
    const Navigate=useNavigate()
    

    return(
        <div className="navbar bg-base-100">
       <div className="flex-1">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                    <img src="https://th.bing.com/th/id/OIP.Uj-MmiHjhzxbFh3RFhrjTAHaFj?w=226&h=180&c=7&r=0&o=5&pid=1.7" />
                    </div></label>
                
                <a className="btn btn-ghost normal-case text-xl p-0 m-0">Profile</a>
            </div>
        <div className="flex-none gap-2">
            <div className="form-control">
            <button className="btn btn-accent" onClick={()=>Navigate('/adduser')}>AddUser</button>

            </div>
            <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                <img src="https://th.bing.com/th/id/OIP.shbZSUEaJasMbATldeGfowHaHa?w=210&h=209&c=7&r=0&o=5&pid=1.7" />
                </div>
            </label>
            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                <li>
                <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                </a>
                </li>
                <li><a>Settings</a></li>
                <li><a>Logout</a></li>
            </ul>
            </div>
        </div>
        </div>
    )
}
