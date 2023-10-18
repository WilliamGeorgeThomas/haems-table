import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="bg-grn flex flex-row flex-wrap justify-between p-8 items-center">
        <Link className="" to="/">
          <h1 className="text-6xl offwhite molle logo drop-shadow-xl md:font-bold sm:font-semibold">Haem's Table</h1>
        </Link>
        {/* <select className="my-2 p-2 rounded-lg border-4 border-[#C1121F] bg-[#FDF0D5] stylish md:font-bold sm:font-semibold text-lg drop-shadow-xl">
          <option>Search By Instrument</option>
          <option value="Sitar">Sitar</option>
          <option value="Banjo">Banjo</option>
          <option value="Saxophone">Saxophone</option>
          <option value="Pedal Steel">Pedal Steel</option>
          <option value="Flute">Flute</option>
        </select> */}
        <div>
          {/* <>
            <button className="border-4 border-[#FDF0D5] rounded-lg bg-[#C1121F] p-2 text-[#FDF0D5] stylish mr-8 md:font-bold sm:font-semibold drop-shadow-xl">
              <Link to="/me">My Profile</Link>
            </button>
            <button className="border-4 border-[#FDF0D5] rounded-lg bg-[#C1121F] p-2 text-[#FDF0D5] stylish md:font-bold sm:font-semibold drop-shadow-xl">Sign Out</button>
          </> */}
          <div className="flex">
            {/* <>
              <button className="border-4 border-[#fd874f] rounded-full bg-offwhite p-3 salmon mr-4 md:font-bold sm:font-semibold drop-shadow-xl">
                <a href="#about">ABOUT</a>
              </button>
            </> */}
            {/* <> */}
            {/* if not on home use Link back to home and then scroll to About section */}
            {/* <Link to="/">ABOUT</Link> */}
            {/* </> */}
            {/* <button className="border-4 border-[#fd874f] rounded-full bg-offwhite p-3 salmon mr-4 md:font-bold sm:font-semibold drop-shadow-xl">
              <Link to="/faq">FAQ</Link>
            </button>
            <button className="border-4 border-[#fd874f] rounded-full bg-offwhite p-3 salmon mr-4 md:font-bold sm:font-semibold drop-shadow-xl">
              <Link to="/contact">CONTACT</Link>
            </button>
            <button className="border-4 border-[#fd874f] rounded-full bg-offwhite p-3 salmon mr-4 md:font-bold sm:font-semibold drop-shadow-xl">
              <Link to="/newsletter">NEWSLETTER</Link>
            </button>

            <button className="border-4 border-[#fd874f] rounded-full bg-offwhite p-3 salmon md:font-bold sm:font-semibold drop-shadow-xl">
              <Link to="/signup">ORDER!</Link>
            </button> */}

            <button className="offwhite text-xl mr-4 md:font-bold sm:font-semibold drop-shadow-xl">
              <a href="#about">ABOUT</a>
              {/* <Link to="/#about">ABOUT</Link> */}
            </button>
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
              <a href="https://instagram.com/haemstable?igshid=NzZhOTFlYzFmZQ==" target="_blank" rel="noopener noreferrer">
                {/* <div className="flex flex-row justify-evenly"> */}
                <img src="../images/insta.png" className="insta" alt="xxxxxx" />
                {/* <div className="mb-2 offwhite">@haemstable</div> */}
                {/* </div> */}
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
