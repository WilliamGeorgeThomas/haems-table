import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <footer className="w-100 mt-auto p-2 bg-grn">
      <div className="text-center flex flex-col items-center">
        {/* {location.pathname !== "/" && (
          <button className="md:font-bold sm:font-semibold mb-2" onClick={() => navigate(-1)}>
            &larr; Back
          </button>
        )} */}
        <a href="mailto:email@email.com">
          <h4 className="offwhite mb-2">email@email.com</h4>
        </a>
        <a href="https://instagram.com/haemstable?igshid=NzZhOTFlYzFmZQ==" target="_blank" rel="noopener noreferrer">
          <div className="flex flex-row justify-evenly">
            <img src="../images/insta.png" className="insta" alt="xxxxxx" />
            <div className="mb-2 offwhite">@haemstable</div>
          </div>
        </a>
        <h4 className="offwhite">&copy; {new Date().getFullYear()} - Haem's Table</h4>
      </div>
    </footer>
  );
};

export default Footer;
