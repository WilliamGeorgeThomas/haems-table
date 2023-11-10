import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <main className="flex flex-col items-center mt-12 p-8">
      <div className="flex flex-row justify-between">
        <div class="h-72 w-96 p-4">
          <img src="../images/cabin.jpg" alt="xxxxxxx"></img>
        </div>{" "}
        <div>
          <h1 className="text-2xl">Contact Me!</h1>
          <p className="text-xl">Looking for a cake? Need savory treats for an event? Want to chat about your favorite foods?</p>
          <p className="text-xl">Reach out via the form below!</p>
          <form className="flex flex-col items-center p-8">
            {/* <div className="text-5xl font-bold salmon mb-4">Contact Form</div> */}
            {/* <label className="font-bold text-xl">Email Address</label> */}
            <input type="text" className="border-2 border-[#fd874f] rounded-lg p-1 md:font-bold sm:font-semibold bg-offwhite" placeholder="Email" />
            <br />
            {/* <label className="font-bold text-xl">Message</label> */}
            <input type="text" className="border-2 border-[#fd874f] rounded-lg px-1 py-12 md:font-bold sm:font-semibold bg-offwhite" placeholder="Message" />
            <br />
            <input type="submit" value="Submit!" className="border-4 border-[#fd874f] rounded-lg font-bold text-xl p-2 bg-offwhite grn"></input>
            {/* <Link to="/">Return Home</Link> */}
          </form>
        </div>
      </div>
    </main>
  );
};

export default Contact;
