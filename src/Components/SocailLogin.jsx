import { FaGithub, FaGoogle } from "react-icons/fa";

const SocailLogin = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Login With</h2>
      <div className="space-y-3 ">
        <button className="btn w-full text-blue-500">
          <FaGoogle className=""></FaGoogle>Login with Google
        </button>
        <button className="btn w-full">
          <FaGithub className="text-black"></FaGithub> Login with GitHub
        </button>
      </div>
    </div>
  );
};

export default SocailLogin;
