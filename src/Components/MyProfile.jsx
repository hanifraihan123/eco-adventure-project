import { useContext } from "react";
import { AuthContext } from "./AuthProvider/AuthProvider";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";


const MyProfile = () => {

    const {user} = useContext(AuthContext);

    return (
        <div className="bg-teal-200 space-y-4">
            <Navbar></Navbar>
            <div className="bg-cyan-400 text-center space-y-4 p-10">
            <h3 className="font-bold text-xl">Welcome back Mr/Mrs. {user && user?.displayName}</h3>
            <p><span className="font-bold">Email:</span> {user && user?.email}</p>
            <img className="mx-auto py-6" src={user?.photoURL} alt="" />
            <Link to="/updateprofile"><button className="btn btn-primary">Update</button></Link>
            </div>
        </div>
    );
};

export default MyProfile;