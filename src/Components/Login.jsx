import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const { userLogin, setUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

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
        <button className="btn btn-warning"><FaGoogle /> Login With Google</button>
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
