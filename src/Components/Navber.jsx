import { Link, NavLink } from "react-router-dom";
import userIcon from '../assets/user.png'

const Navber = () => {
    return (
      <div className="flex justify-between items-center">
        <div></div>
        <div className="space-x-3">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/Category/08"}>About</NavLink>
          <NavLink to={"/career"}>Career</NavLink>
        </div>
        <div className="flex gap-2 items-center">
          <div>
            <img src={userIcon} alt="" />
          </div>
          <Link
            to={"/userlogin/login"}
            className="btn rounded-none btn-neutral"
          >
            Login
          </Link>
        </div>
      </div>
    );
};

export default Navber;