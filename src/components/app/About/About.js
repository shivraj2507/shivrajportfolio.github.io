import React, { useState } from "react";
import about from "../../../assets/img/about-me.jpg";
import Education from "../Education/Education";
import Experience from "../Experience/Experience";
import Skills from "../Skills/Skills";
import styles from "./About.module.css";
import { Link } from "@material-ui/core";
// import { useNavigate } from "react-router-dom";

const About = () => {
  // const navigate = useNavigate();
  const [accountType, setAccountType] = useState("skills");
  return (
    <section id="about" className="bg-black w-full">
      {" "}
      <div className="  flex lg:flex-row  md:gap-6 justify-between mx-auto w-full  lg:w-[1080px] lg:max-w-11/12 py-20">
        <div className="lg:w-1/2 ">
          <img
            src={about}
            alt=""
            className="rounded-lg w-full lg:block hidden hover:scale-105 transition-all duration-200 "
          />
        </div>
        <div className="lg:px-10  w-full lg:w-4/6  flex flex-col gap-4">
          <h2 className={`text-4xl font-bold ${styles["gradient"]}`}>
            About Me
          </h2>
          <img
            src={about}
            alt=""
            className="block rounded-md lg:hidden w-full hover:scale-105 transition-all duration-200 "
          />

          <p className="text-white text-sm">
            I am a professional web developer with 1 year of experience in
            Frontend Development.
            <br />I have a solid foundation in front-end development
            technologies and frameworks, including HTML,CSS and Javascript. I am
            proficient in using ReactJS,NextJS and Redux to create highly
            interactive web applications that are both fast and responsive.
            <br />I have developed projects from scratch as well as built them
            into enterprise scale systems.
          </p>
          <div className="w-full rounded-full flex  justify-between border text-white my-4 overflow-hidden">
            <button
              className={`${
                accountType === "skills" ? "bg-pink " : "bg-transparent "
              } py-1 px-7 text-sm  sm:text-base
              rounded-full transition-all duration-200`}
              onClick={() => {
                setAccountType("skills");
              }}
            >
              Main Skills
            </button>

            <button
              className={`${
                accountType === "experience" ? "bg-pink " : "bg-transparent "
              } py-3 px-6 rounded-full transition-all duration-200`}
              onClick={() => {
                setAccountType("experience");
              }}
            >
              Experience
            </button>
            <button
              className={`${
                accountType === "education" ? "bg-pink " : "bg-transparent "
              } py-3 px-6 rounded-full transition-all duration-200`}
              onClick={() => {
                setAccountType("education");
              }}
            >
              Education & Certification
            </button>
          </div>
          {accountType === "skills" && <Skills />}
          {accountType === "experience" && <Experience />}
          {accountType === "education" && <Education />}
        </div>
      </div>
    </section>
  );
};

export default About;
