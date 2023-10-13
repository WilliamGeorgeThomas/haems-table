import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-center" id="about">
      <h1 className="text-4xl md:font-bold sm:font-semibold grn drop-shadow-xl my-8">What is Haem's Table?</h1>
      <div className="flex flex-row mx-4 items-center">
        <div class="box-border h-72 w-96 p-4 border-4 border-[#fd874f] rounded-lg">
          <img src="../images/nixconserv.jpg" alt="xxxxxxx"></img>
        </div>
        {/* <div class="mb-4 box-border h-72 w-96 p-4 border-4 rounded-lg">
            <img src="../images/nixconserv.jpg" alt="xxxxxxx"></img>
          </div>
          <div class="mb-4 ml-12 box-border h-72 w-96 p-4 border-4">
            <img src="../images/nixconserv.jpg" alt="xxxxxxx"></img>
          </div>
          <div class="box-border h-72 w-96 p-4 border-4">
            <img src="../images/nixconserv.jpg" alt="xxxxxxx"></img>
          </div> */}
        <div className="w-96">
          <div className="text-xl md:font-semibold p-4">
            big cakes, big taste, big booty "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </div>
        </div>
        <button className="grn text-2xl md:font-bold sm:font-semibold drop-shadow-xl">
          <a href="#">Scroll up....</a>
        </button>
      </div>
    </div>
  );
};

export default About;
