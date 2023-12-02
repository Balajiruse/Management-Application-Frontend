/* eslint-disable react/prop-types */
import Topbar from "./topbar";

export default function Workspace({ children }) {
  return (
    <div className="flex flex-col w-full h-screen overflow-hidden">
      <div className="h-20 fixed top-0 left-0 right-0  z-50">
        <Topbar />
      </div>

      <div className="flex flex-nowrap rounded-box place-items-center mt-20 overflow-y-auto">
        <div className="grid m-10 p-2 gap-4">{children}</div>
      </div>
    </div>
  );
}
