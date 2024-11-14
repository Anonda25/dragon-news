import { Link } from "react-router-dom";



const Login = () => {

        // const hendelLogin = (e)=>{
        //     e.preventDefault()
        //     const email = e.target.email.value;
        //     const password = e.target.password.value;
        // }




    return (
      <div className="w-1/2 mx-auto space-y-3 bg-gray-100 p-20 ">
        <h1 className="text-center text-2xl font-semibold">
          {" "}
          Login your account
        </h1>
        <div className="border "></div>
        <div className="">
          <form onSubmit>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email address</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email Address"
                className="input "
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
                className="input "
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-neutral rounded-none">Login</button>
            </div>
          </form>
          <div className="text-center mt-5 ">
            <h4>
              Dont’t Have An Account ?{" "}
              <Link to={"/userlogin/register"} className="text-red-600">
                Register
              </Link>
            </h4>
          </div>
        </div>
      </div>
    );
};

export default Login;