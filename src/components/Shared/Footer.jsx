import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-center bg-[#edede9] py-5">
      &copy;{new Date().getFullYear()}{" "}
      <span className="text-me mx-2 text-green-500 font-semibold">
        <a href="https://hanif.netlify.app" target="_blank">
          M.A.Hanif
        </a>
      </span>
      - All Rights reserved.
    </div>
  );
};

export default Footer;
