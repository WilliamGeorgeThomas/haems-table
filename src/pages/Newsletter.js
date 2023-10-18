import React from "react";
import { Link } from "react-router-dom";

const Newsletter = () => {
  return (
    <main className="flex flex-col items-center mt-12 p-8">
      <div className="bg-photo-po"></div>
      {/* <div className="text-5xl font-bold grn mb-4">Subscribe to my newsletter!</div> */}
        <form className="newsletter-form flex flex-col items-center border-4 border-[#476b40] rounded-lg p-8 bg-offwhite w-3/4 lg:w-1/2">
          <label className="text-3xl font-bold grn text-center">Subscribe to my bi-weekly newsletter where I share stories, recipes, and upcoming news from Haem's Table!</label>
          <br />
          <input type="text" placeholder="Your email address" className="border-4 border-[#fd874f] rounded-lg p-3 md:font-bold sm:font-semibold bg-offwhite" />
          <br />
          <input type="submit" value="Submit!" className="border-4 border-[#fd874f] rounded-lg font-bold text-xl p-2 bg-offwhite"></input>
          {/* <Link to="/">Return Home</Link> */}
        </form>
      <div className="text-5xl font-bold salmon my-4">View archive?????</div>
    </main>
  );
};

export default Newsletter;
