import { Link } from "react-router-dom";


const Register = () => {
    return (
      <div className="w-1/2 mx-auto space-y-3 bg-gray-100 p-20 ">
        <h1 className="text-center text-2xl font-semibold">
          {" "}
          Register your account
        </h1>
        <div className="border "></div>
        <div className="">
          <form onSubmit>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your Name"
                className="input "
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photoUrl"
                placeholder="Enter your URL Address"
                className="input "
                required
              />
            </div>
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
            <div className="flex">
              <label className="cursor-pointer label">
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox checkbox-success"
                />
                <span className="label-text ml-3">
                  Accept Term & Conditions
                </span>
              </label>
            </div>
            <div className="form-control mt-6">
              <button
                // to={"/userlogin/login"}
                className="btn btn-neutral rounded-none"
              >
                Register
              </button>
            </div>
          </form>
          <div className="text-center mt-5 ">
            <h4>
              You Have An Account ? Please
              <Link
                to={"/userlogin/login"}
                className="text-red-600 underline ml-2"
              >
                Login
              </Link>
            </h4>
          </div>
        </div>
      </div>
    );
};

export default Register;