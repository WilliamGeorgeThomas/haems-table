import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <footer className="w-100 mt-auto p-2 bg-grn">
      <div className="text-center flex flex-col items-center">
        {/* {location.pathname !== "/" && (
          <button className="stylish md:font-bold sm:font-semibold mb-2" onClick={() => navigate(-1)}>
            &larr; Back
          </button>
        )} */}
        <a href="mailto:email@email.com">
          <h4 className="stylish md:font-bold sm:font-semibold mb-2">email@email.com</h4>
        </a>
        <div className="flex flex-row justify-evenly">
          <div>
            <a href="https://instagram.com/haemstable?igshid=NzZhOTFlYzFmZQ==" target="_blank" rel="noopener noreferrer">
              <h4 className="stylish md:font-bold sm:font-semibold mb-2">
                <img src="../images/insta.png" className="insta" alt="xxxxxx" />
                @haemstable
              </h4>
            </a>
          </div>
        </div>
        <h4 className="stylish md:font-bold sm:font-semibold">&copy; {new Date().getFullYear()} - Haem's Table</h4>
      </div>
    </footer>
  );
};

export default Footer;
