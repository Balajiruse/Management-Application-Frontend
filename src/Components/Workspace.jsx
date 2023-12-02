/* eslint-disable react/prop-types */
import Topbar from "./topbar";

export default function Workspace({ children }) {
    return (
      <div className="flex flex-col w-full h-screen ">
        <div className="h-20 fixed top-0 left-0 right-0  z-50">
          <Topbar />
        </div>
  
          <div className="grid m-10 p-2 gap-2">{children}</div>

      </div>
    );
  }
