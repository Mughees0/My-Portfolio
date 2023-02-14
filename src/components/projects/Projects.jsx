import React from "react";
import Navbar from "../navbar/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./projects.css";
import Project1 from "../../assets/Screenshot 2023-02-13 at 5.08.08 PM.png";
import Project2 from "../../assets/Screenshot 2023-02-13 at 6.38.08 PM.png";

export default function Projects() {
  return (
    <>
      <Navbar />
      <div className="container border-top border-danger">
        <div className="row  mt-5">
          <div className="col d-flex align-items-center flex-wrap">
            {/* card div */}
            <div
              class="card text-bg-danger div1 mx-5 mt-5 mb-5 "
              style={{ width: "18rem" }}
            >
              {/* <div class="card-header bg-dark text-white">Featured</div> */}
              <img src={Project1} alt="" className="" />
              <div class="card-body">
                <h5 class="card-title text-white">TicTacToe</h5>
                <p class="card-text text-white">
                  TicTacToe Game built using ReactJs.
                </p>
                <a
                  href="https://github.com/Mughees0/TicTacToe-ReactJS.git"
                  class="btn btn-danger"
                >
                  Source Code
                </a>
              </div>
            </div>
            {/* ------ */}
            <div
              class="card text-bg-warning div2 mx-5 mt-5 mb-5"
              style={{ width: "18rem" }}
            >
              <img src={Project2} alt="" className="" />
              <div class="card-body">
                <h5 class="card-title text-white">Employee Manager</h5>
                <p class="card-text text-white">
                  A Basic Full Stack CRUD App built using ReactJs, MySQL and
                  NodeJs.
                </p>
                <a
                  href="https://github.com/Mughees0/CRUD-App.git"
                  class="btn btn-warning"
                >
                  Source Code
                </a>
              </div>
            </div>
            {/* ------ */}
            {/* <div class="card div1 mx-5 mt-5 mb-5" style={{ width: "18rem" }}>
              <img src={Project1} alt="" className="pr1" />
              <div class="card-body">
                <h5 class="card-title text-white">Card title</h5>
                <p class="card-text text-white">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="/" class="btn btn-warning">
                  Source Code
                </a>
              </div>
            </div> */}
            {/* ------ */}
          </div>
        </div>
      </div>
    </>
  );
}
