import { Link } from "react-router-dom";
import Navbar from "./Navbar";


const UpdateProfile = () => {
    return (
        <div className="space-y-6 bg-lime-300">
            <Navbar></Navbar>
            <div className="space-y-4 mx-auto w-1/3">
            <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="Enter your name" className="input input-bordered" />
           <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered"/>

          <Link to="/myprofile"><button className="btn m-4 btn-primary">Update Information</button></Link>
            </div>
            
        </div>
    );
};

export default UpdateProfile;