import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className=" flex items-center justify-between gap-4 py-3 mt-20">
      <img src={assets.logo} width={150}></img>
      <p className="flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden">
        Copyright @Shelly.dev | All rights reserved
      </p>
      <div className="flex gap-2.5">
        <img src={assets.facebook_icon} width={35}></img>
        <img src={assets.instagram_icon} width={35}></img>
        <img src={assets.twitter_icon} width={35}></img>
      </div>
    </div>
  );
};

export default Footer;
