import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const FAQ = () => {
  const navigate = useNavigate();


  return (
    <main className="flex justify-center">
      <div className="flex flex-col m-12 items-center border-[#669BBC] border-4 p-12 bg-[#F5F5F5] rounded-lg w-3/4">
        <div className="mb-4">
          <h4 className="text-3xl md:font-semibold">
          </h4>
        </div>
        <div className="flex flex-col md:flex-row justify-center mb-4">
          <div className="">
            <p className="text-xl md:font-semibold">
            </p>
            <p className="text-xl md:font-semibold">
            </p>
            <p className="text-xl md:font-semibold">
            </p>
          </div>
          <div className="md:mx-2">
            <p className="text-xl md:font-semibold">
            </p>
            <p className="text-xl md:font-semibold">
            </p>
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
        <div className="mx-12">
            Enroll!
        </div>
      </div>
    </main>
  );
};

export default FAQ;
