import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <main className="flex flex-col items-center my-24 p-8">
      <div className="text-5xl font-bold text-[#669BBC] my-8">Sorry, this page does not exist</div>
      <button className="border-4 border-[#fd874f] rounded-lg font-bold text-xl p-2 bg-offwhite grn">
        <Link to="/">Return Home</Link>
      </button>
    </main>
  );
};

export default PageNotFound;
