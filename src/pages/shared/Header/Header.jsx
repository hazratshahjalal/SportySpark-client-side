import { Link, useNavigate } from "react-router-dom";
import logo from "../../../../src/assets/logo.png"
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";


const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const navigate = useNavigate();
  console.log(user)


  const handleLogout = () => {
    logOut()
      .then(() => {
        console.log("User logged out successfully");
        navigate('/'); // Redirect to the home page after logout
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });

  }


  return (
    <div className="bg-slate-100 ">
      <div className="navbar container mx-auto flex justify-between">
        <div className="">
          <Link className="w-40"><img src={logo} alt="" /></Link>
        </div>

        {user ? <div className="flex gap-4 text-lg font-semibold text-black">
          <Link to='/'>Home</Link>
          <Link to='/allToys'>All Toys</Link>
          <Link to='/myToys'>My Toys</Link>
          <Link to='/addToy'>Add a Toy</Link>
          <Link to='/blogs'>Blogs</Link>
          <Link to='/contact'>Contact Us</Link>
        </div>
          :
          <div className="flex gap-4 text-lg font-semibold text-black">
            <Link to='/'>Home</Link>
            <Link to='/allToys'>All Toys</Link>
            <Link to='/blogs'>Blogs</Link>
            <Link to='/contact'>Contact Us</Link>
          </div>
        }




        {user ? < div className="flex gap-3 items-center">
          <div className="">
            <label className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img title={user.name} src={user.photoURL} />
              </div>
            </label>
            <button onClick={handleLogout} className="btn btn-outline btn-gray">Log Out</button>
          </div>
        </div> : <div className="flex gap-3">
          <Link to="/login"><button className="btn btn-outline btn-gray">Sign In</button>
          </Link>
          <Link to="/register"><button className="btn btn-gray ">Register Now</button>
          </Link>
        </div>}




      </div>

    </div>


  );
};

export default Header;