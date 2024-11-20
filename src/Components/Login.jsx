import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";


const Login = () => {
  const { userLogin, setUser,signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const regex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

    if(!regex.test(password)){
      toast.error("Password should be at least one uppercase, one lowercase, 6 or more character");
      return;
    }

    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        e.target.reset();
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

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
      <form onSubmit={handleSubmit} className="card-body w-1/3 mx-auto">
        <div className="form-control">
          <h3 className="font-bold text-2xl text-center">Login Form</h3>
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-2">
          <button className="btn btn-primary">Login</button>
        </div>
        <button onClick={handleGoogleSignIn} className="btn btn-warning"><FaGoogle /> Login With Google</button>
        <p className="text-center p-2">
          Create an account? Please{" "}
          <Link to="/register" className="text-red-600">
            Register
          </Link>
        </p>
      </form>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default Login;
