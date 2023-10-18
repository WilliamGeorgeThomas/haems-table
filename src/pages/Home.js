import React from "react";
import logo from "../logo.svg";
import About from "../components/About";

// import { useQuery } from "@apollo/client";

// import { QUERY_COURSES } from "../utils/queries";
// import CourseList from "../components/CourseList";
// import About from "../components/About";

const Home = () => {
  //   const { loading, data } = useQuery(QUERY_COURSES);
  //   const course = data?.courses || [];

  return (
    <main>
      <div className="flex flex-col justify-center m-6">
        <div className="flex flex-row items-center justify-around">
          <div class="coverPhoto">
            <img src="../images/buns.jpg" alt="xxxxxxx"></img>
          </div>
          <div className="flex flex-col items-center">
            <button className="grn text-2xl md:font-bold sm:font-semibold drop-shadow-xl">
              <a href="#about">Learn about my bespoke kitchen ⤵️</a>
            </button>
          </div>
        </div>
      </div>
      <About />
    </main>
  );
};

export default Home;
