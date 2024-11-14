import { NavLink } from "react-router-dom";
import userIcon from '../assets/user.png'

const Navber = () => {
    return (
      <div className="flex justify-between items-center">
        <div></div>
        <div className="space-x-3">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/career"}>Career</NavLink>
        </div>
        <div className="flex gap-2 items-center">
          <div>
            <img src={userIcon} alt="" />
          </div>
          <button className="btn rounded-none btn-neutral">Login</button>
        </div>
      </div>
    );
};

export default Navber;