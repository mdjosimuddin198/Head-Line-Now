import React from "react";
import Logo from "../assets/logo.png";
import { format } from "date-fns";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <img src={Logo} alt="HeadLineNow" />
        <p className="text-accent tabs-xl">Journalism Without Fear or Favour</p>
        <p className="text-accent">
          {format(new Date(), "EEEE, LLLL d , yyyy")}
        </p>
      </div>
      <div className="flex gap-3 items-center bg-base-200 px-2 py-2">
        <p className="bg-secondary px-4 py-2 text-white">Latest</p>
        <Marquee className="flex gap-5" pauseOnHover={true}>
          <p className="text-xl text-accent ">
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as...
          </p>
          <p className="text-xl text-accent">
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as...
          </p>
          <p className="text-xl text-accent">
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as...
          </p>
        </Marquee>
      </div>
    </>
  );
};

export default Header;
