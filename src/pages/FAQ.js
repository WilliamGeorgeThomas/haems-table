import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const FAQ = () => {
  const navigate = useNavigate();

  let coll = document.getElementsByClassName("collapsible");
  let i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      this.classList.toggle("active");
      let content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }

  return (
    <main className="flex flex-col items-center justify-center m-6">
      <div className="w-1/2">
        <button type="button" class="collapsible">
          Open Section 1
        </button>
        <div class="content">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <button type="button" class="collapsible">
          Open Section 2
        </button>
        <div class="content">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <button type="button" class="collapsible">
          Open Section 3
        </button>
        <div class="content">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <button type="button" class="collapsible">
          Open Section 4
        </button>
        <div class="content">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <button type="button" class="collapsible">
          Open Section 5
        </button>
        <div class="content">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>

      {/* <div className="flex flex-col m-12 items-center border-[#669BBC] border-4 p-12 bg-[#F5F5F5] rounded-lg w-3/4">
        <div className="mb-4">
          <h4 className="text-3xl md:font-semibold"></h4>
        </div>
        <div className="flex flex-col md:flex-row justify-center mb-4">
          <div className="">
            <p className="text-xl md:font-semibold"></p>
            <p className="text-xl md:font-semibold"></p>
            <p className="text-xl md:font-semibold"></p>
          </div>
          <div className="md:mx-2">
            <p className="text-xl md:font-semibold"></p>
            <p className="text-xl md:font-semibold"></p>
          </div>
          <div className="">
            <p className="text-xl md:font-semibold">
              <span className="md:font-bold sm:font-semibold text-[#669BBC]">Lessons:</span> 8
            </p>
            <p className="text-xl md:font-semibold">
              <span className="md:font-bold sm:font-semibold text-[#669BBC]">Price:</span> $500
            </p>
            <p className="text-xl md:font-semibold">
              <span className="md:font-bold sm:font-semibold text-[#669BBC]">Students Enrolled: </span>
            </p>
          </div>
        </div>
        <div className="mx-12">Enroll!</div>
      </div> */}
    </main>
  );
};

export default FAQ;
