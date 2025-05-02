import React from "react";
import swimming from "../assets/swimming.png";
import classImg from "../assets/class.png";
import playground from "../assets/playground.png";

const QZone = () => {
  return (
    <div className="bg-base-200 mt-5 py-4 px-2 rounded-2xl ">
      <h2 className="text-black font-semibold text-2xl">Qzone</h2>
      <img src={swimming} alt="" />
      <img src={playground} alt="" />
      <img src={classImg} alt="" />
    </div>
  );
};

export default QZone;
