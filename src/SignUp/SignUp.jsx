import { Link } from "react-router-dom";
import img from "../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
const SignUp = () => {
  const {signUp} = useContext(AuthContext)
    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value
        const email = form.email.value;
        const password = form.password.value;
        console.log(password,name, email);
        signUp(email,password)
        .then(res => {
          console.log(res.user);
        }).catch(error => {
          console.log(error);
        })
      };
    return (
        <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:gap-24 lg:flex-row">
        <div className="text-center  w-1/2 lg:text-left">
          <img src={img} alt="" />
        </div>
        <div className="card shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-3xl text-center pt-5 font-bold">SignUp Here</h1>
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
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
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">SignUp</button>
            </div>
          </form>
          <div className="flex justify-center mb-3">
            <div className="join join-vertical lg:join-horizontal">
              <button className="btn join-item">Gmail</button>
              <button className="btn join-item">Facebook</button>
            </div>
          </div>
          <p className=" ml-10 pb-5">
            Already have an account ? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
    );
};

export default SignUp;