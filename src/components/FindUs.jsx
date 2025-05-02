import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <div className="join join-vertical  w-full mt-6 ">
        <button className="btn justify-start btn-outline join-item">
          <FaFacebook></FaFacebook>Facebook
        </button>
        <button className="btn justify-start btn-outline join-item">
          <FaTwitter></FaTwitter> Twiteer
        </button>
        <button className="btn justify-start btn-outline join-item">
          <FaInstagram></FaInstagram> Instragram
        </button>
      </div>
    </div>
  );
};

export default FindUs;
