import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <main className="flex flex-col items-center mt-12 p-8 stylish">
      <div className="text-5xl font-bold text-[#669BBC]">Sorry, this page does not exist</div>
      <button className="border-4 border-[#FDF0D5] rounded-full bg-[#d1d3aa] p-3 text-[#FDF0D5] stylish mr-8 md:font-bold sm:font-semibold drop-shadow-xl my-4">
        <Link to="/">Return Home</Link>
      </button>
    </main>
  );
};

export default PageNotFound;
