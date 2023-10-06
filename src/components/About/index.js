import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl md:font-bold sm:font-semibold text-[#669BBC] drop-shadow-xl my-8">What is Haem's Table?</h1>
      <div className="flex flex-row">
        <div className="flex flex-col">
          <div class="ml-12 mb-4 box-border h-72 w-96 p-4 border-4 border-[#fd874f] rounded-lg">
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
        </div>
        <div className="text-center mt-24 text-xl w-1/2 md:font-semibold">big cakes, big taste, big booty</div>
      </div>
    </div>
  );
};

export default About;
