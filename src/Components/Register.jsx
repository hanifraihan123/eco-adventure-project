import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';
import { FaGoogle } from "react-icons/fa";
import Navbar from "./Navbar";

const Register = () => {

  const {createNewUser,setUser,signInWithGoogle} = useContext(AuthContext);
  const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const name= e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        
        createNewUser(email,password)
        .then(result=>{
          const user = result.user;
          setUser(user)
          e.target.reset()
          navigate("/")
        })
        .catch(error=>{
          toast.error(error.message)
        })
    }

    const handleGoogleSignIn = () => {
      signInWithGoogle()
      .then(result=>{
        console.log(result.user)
        navigate("/")
      })
      .catch(error=>{
        toast.error(error.message)
      })
    }
    
  return (
    <div className="bg-sky-300">
      <form onSubmit={handleSubmit} className="card-body p-2 w-1/3 mx-auto">
        <div className="form-control">
          <h3 className="font-bold text-2xl text-center">Register Form</h3>
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="Enter your name" className="input input-bordered" />
           <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered"/>
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="Enter your email" className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required/>
        </div>
        <div className="form-control mt-2">
          <button className="btn btn-primary">Register</button>
        </div>
        <button onClick={handleGoogleSignIn} className="btn btn-warning"><FaGoogle /> Login With Google</button>
        <p className="text-center p-2">
          Already have an account? Please{" "}
          <Link to="/login" className="text-red-600">
            Login
          </Link>
        </p>
      </form>
      <Toaster
  position="top-right"
  reverseOrder={false}
/>
    </div>
  );
};

export default Register;
