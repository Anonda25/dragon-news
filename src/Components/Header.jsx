import moment from 'moment';
import logo from '../assets/logo.png'

const Header = () => {
    return (
      <div className="flex flex-col items-center gap-2 py-10">
        <div>
          <img  src={logo} alt="" />
        </div>
        <p className='text-gray-400'>Journalism Without Fear or Favour</p>
        <p>{moment().format("dddd, MMMM Do YYYY")}</p>
      </div>
    );
};

export default Header;