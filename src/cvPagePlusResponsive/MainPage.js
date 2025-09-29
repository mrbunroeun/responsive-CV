// src/MainPage.js
import React from "react";
import { Link } from "react-router-dom";
import "./MainPage.css";

function MainPage() {
  return (
    <>
      <div className="nav_wrapper">
        <div className="name">
          <i className="fa-solid fa-fan logo" />
          BR
        </div>
        <div className="nav_button_section">
          <li>
            <Link className="btn" to="/home">
              Home
            </Link>
          </li>

          <li>
            <Link className="btn" to="/projects">
              Projecs
            </Link>
          </li>

          <li>
            <Link className="btn" to="/articles">
              Articles
            </Link>
          </li>

          <li>
            <Link className="btn" to="/contact">
              Contact
            </Link>
          </li>
        </div>
      </div>
      {/* hero section */}
      <div className="hero_sentence">
        <h1>Frontend Developer</h1>
        <p>html only with proper layout, no styling</p>
      </div>
      {/* project, work and experience */}
      <div className="grid_wrapper">
        <div className="grid_smaller_page">
          <div className="grid">
            <h2>Projects</h2>
            <p>HTML Only Portfolio</p>
          </div>
          <p className="grid">Calculator</p>
          <p className="grid">Quiz App</p>
          <p className="grid">Countdown Timer</p>
          <p className="grid">Product Upcoming Page</p>
        </div>

        <div className="grid_smaller_page">
          <div className="grid">
            <h2 className="work_experience">Work Experience</h2>
            <p>
              roadmap.sh <br />
              solve the frontend project
              <br />
              visite our profile
            </p>
          </div>
          <p className="grid">
            OpenSource Work
            <br /> Contributed to 50 opensource
          </p>
        </div>

        <div className="grid_smaller_page">
          <div className="grid">
            <h2 className="education">Education</h2>
            <p>
              Gaduated with 3.76 out of 4 CGPA. Won Acme Hackathon Organized 30
              sessions. <br />
              Courses I took:
              <br />
              -Object Oriented Programing <br />
              -Data Structures and Algorithms
            </p>
          </div>
        </div>
      </div>
      <div>
        {/* review from teacher */}
        <h3 className="review_from">Reviews from my Teachers</h3>
      </div>
      <table>
        <div className="last_grid">
        {/* three_boxes */}
          <div className="box">
            <tr className="bold">
              John doe was a brilliant student; always stood out with his
              assignments.
            </tr>
            <tr>
              Jand Doe<br/>
              Assistant Professor
            </tr>
          </div>

       
          <div className="box">
            <tr className="bold">
              John doe was a brilliant student; always stood out with his
              assignments.
            </tr>
            <tr>
              Jand Doe <br />
              Assistant Professor
            </tr>
          </div>


          <div className="box">
            <tr className="bold">
              John doe was a brilliant student; always stood out with his
              assignments.
            </tr>
            <tr>
              Jand Doe <br />
              Assistant Professor
            </tr>
          </div>
        </div>
      </table>
      <p className="all_right">
        c all rights reserved 2025
      </p>
    </>
  );
}

export default MainPage;
