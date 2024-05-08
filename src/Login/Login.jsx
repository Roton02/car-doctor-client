import { Link } from "react-router-dom";
import img from "../assets/images/login/login.svg";
import useAuth from "../Hooks/useAuth";
const Login = () => {
  const {signIn,SignUpInGmail,setUser,setLoading} = useAuth()
  const handleLognin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(password, email);
    signIn(email, password)
    .then(res => {
      setLoading(false)
      setUser(res.user);
    })
    .catch(error =>{
      console.log(error.message);
    })
  };
  const gmailSignUp = ()=>{
    SignUpInGmail()
    .then(res =>{
      console.log(res.user);
    })
    .catch(error =>{
      console.log(error.message);
    })
  }
  
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:gap-24 lg:flex-row">
        <div className="text-center  w-1/2 lg:text-left">
          <img src={img} alt="" />
        </div>
        <div className="card shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-3xl text-center pt-5 font-bold">Login now!</h1>
          <form onSubmit={handleLognin} className="card-body">
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
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div className="flex justify-center mb-3">
            <div className="join join-vertical lg:join-horizontal">
              <button onClick={gmailSignUp} className="btn join-item">Gmail</button>
              <button className="btn join-item">Facebook</button>
            </div>
          </div>
          <p className=" ml-10 pb-5">
            You dont have an account ? <Link to="/signUp">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
