import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="bg-[#669BBC] flex flex-row flex-wrap justify-between p-8 items-center">
        <Link className="" to="/">
          <h1 className="text-6xl stylish logo drop-shadow-xl md:font-bold sm:font-semibold">Haem's Table</h1>
        </Link>
        <select className="my-2 p-2 rounded-lg border-4 border-[#C1121F] bg-[#FDF0D5] stylish md:font-bold sm:font-semibold text-lg drop-shadow-xl">
          <option>Search By Instrument</option>
          <option value="Sitar">Sitar</option>
          <option value="Banjo">Banjo</option>
          <option value="Saxophone">Saxophone</option>
          <option value="Pedal Steel">Pedal Steel</option>
          <option value="Flute">Flute</option>
        </select>
        <div>
          {/* <>
            <button className="border-4 border-[#FDF0D5] rounded-lg bg-[#C1121F] p-2 text-[#FDF0D5] stylish mr-8 md:font-bold sm:font-semibold drop-shadow-xl">
              <Link to="/me">My Profile</Link>
            </button>
            <button className="border-4 border-[#FDF0D5] rounded-lg bg-[#C1121F] p-2 text-[#FDF0D5] stylish md:font-bold sm:font-semibold drop-shadow-xl">Sign Out</button>
          </> */}
          <div className="">
            <button className="border-4 border-[#FDF0D5] rounded-lg bg-[#C1121F] p-2 text-[#FDF0D5] stylish mr-8 md:font-bold sm:font-semibold drop-shadow-xl">
              <Link to="/login">Sign In</Link>
            </button>
            <button className="border-4 border-[#FDF0D5] rounded-lg bg-[#C1121F] p-2 text-[#FDF0D5] stylish md:font-bold sm:font-semibold drop-shadow-xl">
              <Link to="/signup">Join 5th Octave</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
