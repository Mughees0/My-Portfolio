import React, { useRef } from "react";
import Navbar from "../navbar/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./contact.css";
import emailjs from "@emailjs/browser";
import { AiOutlineGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { IoIosCall } from "react-icons/io";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function Contact() {
  const form = useRef();

  function sendData(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_lwg5tnx",
        "template_ua8k1se",
        form.current,
        "tdOr4NgSH_r6oI7IH"
      )
      .then(
        (result) => {
          alert(
            "I have recieved your message, I'll contact you shortly",
            result.text
          );
        },
        (error) => {
          alert("An error occurred, Please try again", error.text);
        }
      );
  }
  return (
    <>
      <Navbar />
      <div className="container border-top border-warning">
        <div className="row justify-content-md-center">
          <div className="col-6 text-center mb-3">
            <h1 className=" fw-semibold fs-4 negpad text-danger pt-5">
              Contact Me
            </h1>
            <p className="text-white fw-bold fs-1 negpad1 ">
              I Want To Hear From You
            </p>
            <p className="text-warning  ">
              Please fill out the form on this section to contact with me. Or
              Email/call between 9:00 a.m. and 4:00 p.m. ET, Monday through
              Friday
            </p>
            <a
              href="https://github.com/Mughees0"
              className="text-white fs-3 mx-2 "
            >
              <AiOutlineGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/abdul-mughees-/"
              className="text-white fs-3 mx-2 "
            >
              <BsLinkedin />
            </a>
            <CopyToClipboard text="abdul.mughees.email@gmail.com">
              <button
                onClick={() => alert("Copied Email to the clipboard!")}
                className="text-white fs-3 ms-2 me-2 button1"
              >
                <SiGmail />
              </button>
            </CopyToClipboard>
            <CopyToClipboard text="+358402550995">
              <button
                onClick={() => alert("Copied Phone Number to the clipboard!")}
                className="text-white fs-3 button1"
              >
                <IoIosCall />
              </button>
            </CopyToClipboard>
          </div>
        </div>
        <div className="row justify-content-md-center">
          <div className="col-4 text-center mb-5 border-top">
            <form id="contact-form" ref={form} onSubmit={sendData}>
              <div class="mb-3">
                <input
                  name="fullname"
                  class="form-control mt-5 border-warning"
                  type="text"
                  placeholder="Your Name"
                  aria-label="default input example"
                />
              </div>
              <div class="mb-3">
                <input
                  name="email"
                  class="form-control border-warning "
                  type="email"
                  placeholder="Your Email"
                  aria-label="default input example"
                />
              </div>
              <div class="mb-3">
                <input
                  name="number"
                  class="form-control border-warning"
                  type="text"
                  placeholder="Your Number e.g +358...."
                  aria-label="default input example"
                />
              </div>
              <div class="mb-3">
                <input
                  name="subject"
                  class="form-control border-warning"
                  type="text"
                  placeholder="Subject"
                  aria-label="default input example"
                />
              </div>
              <div class="mb-3">
                <textarea
                  name="message"
                  class="form-control bg-warning border-warning"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Write Your Message Here..."
                ></textarea>
              </div>
              <button
                type="submit"
                value="Send"
                className="btn btn-danger rounded-pill mb-4 mt-2"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        {/* <div className="row justify-content-md-center mb-5">
          <div className="col-3 border-bottom text-center ">
            <h1 className="text-warning fw-bold">Email</h1>
            <p className="text-white ">abdul.mughees.email@gmail.com</p>
          </div>
          <div className="col-3 border-bottom text-center ">
            <h1 className="text-warning fw-bold">Phone</h1>
            <p className="text-white ">+358-40-2550995</p>
          </div>
        </div> */}
      </div>
    </>
  );
}
