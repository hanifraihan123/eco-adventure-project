import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider/AuthProvider";

const Navbar = () => {

const {user,logout} = useContext(AuthContext);


  return (
    <div className="flex justify-between w-11/12 mx-auto pt-4 mb-2">
      <div>
        <h3 className="font-bold text-xl">Eco Adventure Experiences</h3>
      </div>
       <div>
       <ul className="flex gap-4">
            <Link to="/">Home</Link>
            <Link to="/updateprofile">Update Profile</Link>
            <Link to="/userprofile">User Profile</Link>
            <li>{user && user.email}</li>
        </ul>
       </div>
  <div className="flex gap-2">
  {
        user && user?.email ? <button onClick={logout} className="btn btn-secondary">Logout</button> : <Link to="/login">
        <button className="btn btn-secondary">Login</button>
        </Link>
       }
  </div>
    </div>
  );
};

export default Navbar;
