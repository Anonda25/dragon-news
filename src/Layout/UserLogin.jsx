import { Outlet } from "react-router-dom";
import Navber from "../Components/Navber";


const UserLogin = () => {
    return (
        <div className="">
           <div className="w-11/12 mx-auto py-3">
            <Navber></Navber>
           </div>
           <Outlet></Outlet>
        </div>
    );
};

export default UserLogin;