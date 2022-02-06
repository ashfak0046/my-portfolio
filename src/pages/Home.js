import React from "react";
import "../stylesheets/home.css";
import Intro from "../assets/intro.svg";
import Header from "../component/Header";
import Courosel from "../component/Courosel";
const Home = () => {
  return (
    <div>
      <Header />

      <div
        className="introduction flex-with-center"
        style={{ backgroundImage: `url(${Intro})` }}
      >
        <div>
          <h1>ASHFAK</h1>
          <div className="intro-content d-flex justify-content-between  ">
            <p>
              MERN STACK <br /> Developer, Instructor
            </p>
            <button className="primary-button font-bold">Get Started</button>
          </div>
        </div>
      </div>

      <Courosel />
    </div>
  );
};

export default Home;
