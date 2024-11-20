import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider/AuthProvider";
import { ImGift } from "react-icons/im";

const Navbar = () => {

const {user,logout} = useContext(AuthContext);


  return (
    <div className="flex items-center justify-between w-11/12 mx-auto pt-4 mb-2">
      <div>
        <h3 className="font-bold text-xl">Eco Adventure Experiences</h3>
      </div>
       <div>
       <ul className="flex gap-4">
            <Link to="/">Home</Link>
            <Link to="/updateprofile">Update Profile</Link>
            <Link to="/myprofile">User Profile</Link>
        </ul>
       </div>
  <div className="flex gap-2">
  {
        user && user?.email ? 
        <div className="flex gap-2 items-center"><div><img className="w-10 rounded-full hover:`${user?.displayName}`" src={user?.photoURL} alt="" /></div><button onClick={logout} className="btn btn-secondary">Logout</button></div> : 
        <Link to="/login">
        <button className="btn btn-secondary">Login</button>
        </Link>
       }
  </div>
    </div>
  );
};

export default Navbar;
