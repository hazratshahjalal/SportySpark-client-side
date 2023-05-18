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
          <Link to='/allToys'>All Toys</Link>
          <Link to='/blogs'>Blogs</Link>
          <Link to='/contact'>Contact Us</Link>
        </div>

        <div className="flex gap-3">
          <Link to="/login"><button className="btn btn-outline btn-gray">Sign In</button>
          </Link>
          <Link to="/register"><button className="btn btn-gray ">Register Now</button>
          </Link>
        </div>

        {/* <div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="" />
              </div>
            </label>
          </div>
        </div> */}
      </div>

    </div>


  );
};

export default Header;