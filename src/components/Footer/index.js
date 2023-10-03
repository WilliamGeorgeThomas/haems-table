import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <footer className="w-100 mt-auto p-4 bg-[#c7e1ff]">
      <div className="text-center mb-5">
        {location.pathname !== "/" && (
          <button className="stylish md:font-bold sm:font-semibold" onClick={() => navigate(-1)}>
            &larr; Go Back
          </button>
        )}
        <h4 className="stylish md:font-bold sm:font-semibold">email@email.com</h4>
        <h4 className="stylish md:font-bold sm:font-semibold">instagram link...maybe just symbol</h4>
        <h4 className="stylish md:font-bold sm:font-semibold">&copy; {new Date().getFullYear()} - Haem's Table</h4>
      </div>
    </footer>
  );
};

export default Footer;
