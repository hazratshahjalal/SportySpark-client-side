import { Link } from "react-router-dom";
import logo from "../../../../src/assets/logo.png"

const Header = () => {
  return (
    <div className="bg-slate-100 ">
      <div className="navbar container mx-auto flex justify-between">
        <div className="">
          <Link className="w-40"><img src={logo} alt="" /></Link>
        </div>

        <div className="flex gap-4 text-lg font-semibold text-black">
          <Link to='/'>Home</Link>
          <Link to='/addToy'>Add Toys</Link>
          <Link to='/blogs'>Blogs</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact Us</Link>
        </div>

        {/* <div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="" />
              </div>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
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
        </div> */}
      </div>

    </div>


  );
};

export default Header;