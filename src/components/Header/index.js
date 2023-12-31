import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex flex-row flex-wrap justify-between p-8 items-center bg-grn">
        <Link className="" to="/">
          <h1 className="text-6xl offwhite molle logo drop-shadow-xl md:font-bold sm:font-semibold">Haem's Table</h1>
        </Link>
          <div className="flex flex-row flex-wrap gap-2">

            <button className="offwhite text-xl mr-4 md:font-bold sm:font-semibold drop-shadow-xl">
              <Link to="/faq">FAQ</Link>
            </button>
            <button className="offwhite text-xl mr-4 md:font-bold sm:font-semibold drop-shadow-xl">
              <Link to="/contact">CONTACT</Link>
            </button>
            <button className="offwhite text-xl mr-4 md:font-bold sm:font-semibold drop-shadow-xl">
              <Link to="/newsletter">NEWSLETTER</Link>
            </button>
            <button className="offwhite text-xl md:font-bold sm:font-semibold drop-shadow-xl mr-4">
              <Link to="/signup">ORDER!</Link>
            </button>
            <button className="">
              <a href="https://instagram.com/haemstable/" target="_blank" rel="noopener noreferrer">
                <img src="../images/insta.png" className="insta" alt="instagram logo" />
              </a>
            </button>
          </div>
      </div>
    </div>
  );
};

export default Header;
