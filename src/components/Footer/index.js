import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <footer className="w-100 mt-auto p-4 bg-[#c7e1ff]">
      <div className="text-center mb-5 flex flex-col items-center">
        {location.pathname !== "/" && (
          <button className="stylish md:font-bold sm:font-semibold mb-2" onClick={() => navigate(-1)}>
            &larr; Back
          </button>
        )}
        <a href="mailto:email@email.com">
          <h4 className="stylish md:font-bold sm:font-semibold mb-2">email@email.com</h4>
        </a>
        <a href="https://instagram.com/haemstable?igshid=NzZhOTFlYzFmZQ==" target="_blank" rel="noopener noreferrer">
          <h4 className="stylish md:font-bold sm:font-semibold mb-2">
            <img src="../images/insta.png" className="insta" alt="xxxxxx" />
            @haemstable
          </h4>
        </a>
        <h4 className="stylish md:font-bold sm:font-semibold">&copy; {new Date().getFullYear()} - Haem's Table</h4>
      </div>
    </footer>
  );
};

export default Footer;
