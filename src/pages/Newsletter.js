import React from "react";
import { Link } from "react-router-dom";

const Newsletter = () => {
  return (
    <main className="flex flex-col items-center mt-12 p-8">
      <div className="text-5xl font-bold grn mb-4">Subscribe to my newsletter!</div>
      <form className="flex flex-col items-center p-8 bg-offwhite rounded-lg">
        <label className="font-bold">Email Address</label>
        <br />
        <input type="text" className="rounded-border-4 border-[#fd874f] rounded-full p-3 md:font-bold sm:font-semibold" />
        <br />
        <input type="submit" value="Submit!" className="border-[#fd874f] rounded-full font-bold text-2xl"></input>
        {/* <Link to="/">Return Home</Link> */}
      </form>
      <div className="text-5xl font-bold grn mb-4">View archive?????</div>
    </main>
  );
};

export default Newsletter;
