import React from "react";
import { Link } from "react-router-dom";

const Newsletter = () => {
  return (
    <main className="flex flex-col mt-12 p-8">
      <div className="flex flex-row justify-evenly">
        <div class="max-w-md">
          <img src="../images/poboxes.jpg" alt="xxxxxxx"></img>
        </div>
        <div className="max-w-md">
        <h1 className="text-2xl">Newsletter</h1>
        <p className="text-xl">I write a bi-weekly newsletter where I share stories, recipes, and upcoming news from Haem's Table</p>
        <p className="text-xl">Subscribe below!</p>
        <form className="flex flex-row items-center w-3/4 lg:w-1/2 my-2">
          <br />
          <input type="text" placeholder="Email address" className="border-2 border-[#fd874f] rounded-lg p-1 md:font-bold sm:font-semibold bg-offwhite" />
          <br />
          <input type="submit" value="Submit!" className="ml-2 border-2 border-[#fd874f] rounded-lg font-bold p-1 bg-offwhite grn"></input>
        </form>
      <div className="text-xl salmon my-4">View archive</div>
      </div>
      </div>
    </main>
  );
};

export default Newsletter;
