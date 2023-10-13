import React from "react";
import { useState } from "react";
import styles from "./Project.module.css";
import ProjectCard from "../ProjectCard";
import rikeza from "../../../assets/img/Rikeza.png";
import rik from "../../../assets/img/RIK academy.jpg";
import web3 from "../../../assets/img/Web 3 Sherpa website.jpg";
import p2p from "../../../assets/img/p2p website.jpg";
import coffee from "../../../assets/img/coffee website.jpg";

const Projects = () => {
  const [accountType, setAccountType] = useState("allProjects");
  const AllProjectData = [
    {
      id: 1,
      img: rikeza,
      title: "Rikeza Blockchain",
    },
    {
      id: 2,
      img: p2p,
      title: "P2P ",
    },
    {
      id: 3,
      img: rik,
      title: "RIk Academy",
    },
    {
      id: 4,
      img: web3,
      title: "Web3 Sherpa ",
    },
    {
      id: 5,
      img: coffee,
      title: "coffee",
    },
  ];
  const websitetData = [
    {
      id: 1,
      img: rikeza,
      title: "Rikeza Blockchain",
    },
    {
      id: 2,
      img: p2p,
      title: "P2P ",
    },
    {
      id: 3,
      img: rik,
      title: "RIk Academy",
    },
    {
      id: 4,
      img: web3,
      title: "Web3 Sherpa ",
    },
    {
      id: 5,
      img: coffee,
      title: "coffee",
    },
  ];
  // const AppData = [
  //   {
  //     id: 1,
  //     img: appDev,
  //     title: "App Development",
  //     text: " Name of the Project",
  //   },

  //   {
  //     id: 2,
  //     img: appDev2,
  //     title: "App Development",
  //     text: " Name of the Project",
  //   },
  //   {
  //     id: 1,
  //     img: appDev,
  //     title: "App Development",
  //     text: " Name of the Project",
  //   },

  //   {
  //     id: 2,
  //     img: appDev2,
  //     title: "App Development",
  //     text: " Name of the Project",
  //   },
  // ];
  // const SoftwareData = [
  //   {
  //     id: 3,
  //     img: softwareDev,
  //     title: "Software Development",
  //     text: " Name of the Project",
  //   },

  //   {
  //     id: 6,
  //     img: softwareDev2,
  //     title: "Software Development",
  //     text: " Name of the Project",
  //   },
  //   {
  //     id: 3,
  //     img: softwareDev,
  //     title: "Software Development",
  //     text: " Name of the Project",
  //   },

  //   {
  //     id: 6,
  //     img: softwareDev2,
  //     title: "Software Development",
  //     text: " Name of the Project",
  //   },
  // ];
  return (
    <section id="projects" className="w-full bg-black ">
      {" "}
      <div className="   flex flex-col  gap-6  lg:mx-auto w-full lg:w-[1080px] lg:max-w-11/12 py-20 text-center">
        <h1 className={`text-4xl   font-bold ${styles["serviceGradient"]}`}>
          My Projects{" "}
        </h1>
        {/* <p className="max-w-xl mx-auto text-white">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, quod
          non tenetur excepturi debitis dolorum tempore rem.
        </p> */}
        <div className=" md:rounded-full flex flex-wrap gap-4     lg:w-1/3  mx-auto  justify-between  md:border text-white  my-4  ">
          <button
            className={`${
              accountType === "allProjects" ? "bg-pink " : "bg-transparent "
            } py-1 px-3 lg:px-7 text-sm  sm:text-base  rounded-full transition-all duration-200`}
            onClick={() => {
              setAccountType("allProjects");
            }}
          >
            All Projects
          </button>

          <button
            className={`${
              accountType === "Websites" ? "bg-pink " : "bg-transparent "
            } py-3 px-7 rounded-full transition-all duration-200`}
            onClick={() => {
              setAccountType("Websites");
            }}
          >
            Websites
          </button>
          {/* <button
            className={`${
              accountType === "Apps" ? "bg-pink " : "bg-transparent "
            } py-3 px-7 rounded-full transition-all duration-200`}
            onClick={() => {
              setAccountType("Apps");
            }}
          >
            Apps
          </button> */}
          {/* <button
            className={`${
              accountType === "Software" ? "bg-pink " : "bg-transparent "
            } py-3 px-7 rounded-full transition-all duration-200`}
            onClick={() => {
              setAccountType("Software");
            }}
          >
            Software
          </button> */}
        </div>
        {accountType === "allProjects" && (
          <ProjectCard AllProjectData={AllProjectData} it={[]} />
        )}
        {accountType === "Websites" && (
          <ProjectCard AllProjectData={websitetData} it={[]} />
        )}
        {/* {accountType == "Apps" && (
          <ProjectCard AllProjectData={AppData} it={[]} />
        )}
        {accountType === "Software" && (
          <ProjectCard AllProjectData={SoftwareData} it={[]} />
        )} */}
      </div>
    </section>
  );
};

export default Projects;
