import { Link } from "react-router-dom";
import auth from "./Firebase/firebase.init";

const Register = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const name= e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name,email,photo,password)
    }
    // const userRegister = (email,password) => {
    //     return createUserWithEmailAndPassword(auth,email,password)
    // }

  return (
    <div>
      <form onSubmit={handleSubmit} className="card-body w-1/3 mx-auto">
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
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
        <p className="text-center p-2">
          Already have an account? Please{" "}
          <Link to="/login" className="text-red-600">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
