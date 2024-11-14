import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold">Find Us On</h2>
      <div className="join flex join-vertical  ">
        <button className="btn justify-start join-item bg-base-100">
          <FaFacebook className="text-blue-500"></FaFacebook> Facebook
        </button>
        <button className="btn justify-start join-item bg-base-100">
          <FaInstagram className="text-red-500" /> Instagram
        </button>
        <button className="btn justify-start join-item bg-base-100">
          <FaTwitter className="text-blue-400" /> Twitter
        </button>
      </div>
    </div>
  );
};

export default FindUs;
