import "./landingPage.css";
import pic from "../../assets/IMG_0033.jpeg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Navbar from "../navbar/navbar";
import { AiOutlineGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { IoIosCall } from "react-icons/io";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <div className="container border border-danger border-bottom-0">
        <div class="row position-absolute top-50 start-50 bottom-150 translate-middle">
          <div className="col-6 fw-bold pt-5   ">
            <h2 className="mb-3 fs-3 text-danger">Hello, I'm</h2>
            <h1 className="mb-4 name text-white">Abdul Mughees</h1>
            <p className="mb-4">
              <span className="text-white">A </span>
              <span className="text-success">Creative Developer </span>
              <span className="text-white">From </span>
              <span className="text1">Finland</span>
            </p>
            <p className="text-white text2 mb-4">
              I'm creative Web Developer based in Finland, and I'm very
              passionate and dedicated to my work.
            </p>
            <a class="btn rounded-pill btn-danger" href="/Contact">
              Contact Me
            </a>
            <a
              href="https://github.com/Mughees0"
              className="text-white ms-4 fs-4 mx-2 hover"
            >
              <AiOutlineGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/abdul-mughees-/"
              className="text-white fs-4 mx-2 hover"
            >
              <BsLinkedin />
            </a>
            <CopyToClipboard text="abdul.mughees.email@gmail.com">
              <button
                onClick={() => alert("Copied Email to the clipboard!")}
                className="text-white fs-4 ms-2 me-2 hover button1"
              >
                <SiGmail />
              </button>
            </CopyToClipboard>
            <CopyToClipboard text="+358402550995">
              <button
                onClick={() => alert("Copied Phone Number to the clipboard!")}
                className="text-white fs-4 hover button1"
              >
                <IoIosCall />
              </button>
            </CopyToClipboard>
          </div>
          <div className="col text-center">
            <img
              className=" mt-5  ms-5 rounded-5"
              src={pic}
              width="300"
              alt="logo pic"
            />
          </div>
        </div>
      </div>
    </>
  );
}
