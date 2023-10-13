import React from "react";
import heroImg from "../../../assets/img/hero-image.png";
import styles from "./Header.module.css";
import { Typography } from "@material-ui/core";

const resumeLink =
  "https://drive.google.com/file/d/15kRrbJzhe0xfB9gG0b0ZrJhenUUZM5Iz/view?usp=drivesdk";
export default function Header() {
  return (
    <section className="bg-black w-full lg:relative ">
      <div className="  flex flex-col lg:flex-row gap-3 justify-between mx-auto w-full lg:w-[1080px] lg:max-w-11/12 py-20">
        <div className="w-full lg:w-4/6 h-full py-28 z-10">
          <h1 className=" w-full  font-black text-6xl text-white  ">
            I’m Shivraj Singh
          </h1>

          <h2
            className={`w-full my-2  font-black text-6xl ${styles["gradient"]}`}
          >
            Software Engineer.
          </h2>

          <h2 className=" text-6xl  text-white  my-2 font-medium">
            based in India.
          </h2>
          <button className="px-4 hover:bg-pink text-white py-1 rounded-full border my-7">
            <Typography
              href={resumeLink}
              target="_blank"
              variant="subtitle1"
              color="primary"
              component="a"
            >
              DOWNLOAD CV
            </Typography>
          </button>
        </div>
        <div className=" w-full mx-auto lg:w-7/12 lg:absolute right-0 z-0">
          <img src={heroImg} alt="" className=" w-full" />
        </div>
      </div>
    </section>
  );
}
