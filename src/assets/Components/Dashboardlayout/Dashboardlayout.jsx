import { Outlet } from "react-router-dom";
import Dashboard from "../Dashboard";

const Dashboardlayout = () => {
    return (
        <div className="flex gap-10">
          <div className="w-[20%]">
          <Dashboard></Dashboard>
          </div>
         <div className="w-[80%]">
         <Outlet></Outlet>
         </div>
            
        </div>
    );
};

export default Dashboardlayout;