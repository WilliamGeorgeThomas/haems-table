import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <main className="flex flex-col items-center mt-12 p-8">
      <div className="bg-photo"></div>
      <form className="flex flex-col items-center border-4 border-[#476b40] rounded-lg p-8 bg-offwhite">
        <div className="text-5xl font-bold salmon mb-4">Contact Form</div>
        <label className="font-bold text-xl">Email Address</label>
        <input type="text" className="border-4 border-[#fd874f] rounded-lg p-3 md:font-bold sm:font-semibold bg-offwhite" />
        <br />
          <label className="font-bold text-xl">Message</label>
          <input type="text" className="border-4 border-[#fd874f] rounded-lg p-3 md:font-bold sm:font-semibold bg-offwhite" />
        <br />
        <input type="submit" value="Submit!" className="border-4 border-[#fd874f] rounded-lg font-bold text-xl p-2 bg-offwhite"></input>
        {/* <Link to="/">Return Home</Link> */}
      </form>
    </main>
  );
};

export default Contact;
