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
      <div className="flex flex-col justify-center m-4">
        <div className="App flex flex-row">
          <div class="coverPhoto">
            <img src="../images/cabin.jpg" alt="xxxxxxx"></img>
          </div>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
              a photo of a cake or something
            </a>
          </header>
        </div>
      </div>
    </main>
  );
};

export default Home;
