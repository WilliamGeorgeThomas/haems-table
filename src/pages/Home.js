import React from "react";
import logo from "../logo.svg";

// import { useQuery } from "@apollo/client";

// import { QUERY_COURSES } from "../utils/queries";
// import CourseList from "../components/CourseList";
// import About from "../components/About";

const Home = () => {
//   const { loading, data } = useQuery(QUERY_COURSES);
//   const course = data?.courses || [];

  return (
    <main>
      <div className="flex flex-col justify-center mb-4"></div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            a photo of a cake or something
          </a>
        </header>
      </div>
    </main>
  );
};

export default Home;
