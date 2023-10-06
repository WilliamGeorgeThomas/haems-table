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
      <div className="flex flex-col justify-center m-4">
        <div className="flex flex-col items-center">
          <div class="coverPhoto">
            <img src="../images/cabin.jpg" alt="xxxxxxx"></img>
          </div>
        </div>
      </div>
      <About />
    </main>
  );
};

export default Home;
