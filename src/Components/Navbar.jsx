import { Link } from "react-router-dom";

const Navbar = () => {


  return (
    <div className="flex justify-between">
      <div>
        <h3 className="font-bold text-xl">Eco Adventure Experiences</h3>
      </div>
       <div>
       <ul className="flex gap-4">
            <Link to="/">Home</Link>
            <Link to="/updateprofile">Update Profile</Link>
            <Link to="/userprofile">User Profile</Link>
        </ul>
       </div>
        <div>
            <button className="btn btn-neutral">Login</button>
        </div>
    </div>
  );
};

export default Navbar;
