import React from "react";

const Skills = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="text-white  flex flex-col gap-2">
        <h1 className="text-xl font-medium">Website - Development </h1>

        <p className="">
          <span className="font-semibold mr-2">Languages: </span>
          Node js, Javascript, Java
        </p>
        <p className="">
          <span className="font-semibold mr-2">Framework: </span>
          Express js, Tailwind CSS, Bootstrap, ReactJs, NextJS
        </p>
        <p className="">
          <span className="font-semibold mr-2">Tools: </span>
          GitHub, Git, Vscode
        </p>

        {/* <p className="text-xs">Created an E-learning website (Rik Academy)</p>

        <p className="text-xs">
          {" "}
          I have created websites of Rikeza, P2P Softwares, Tradebull .
        </p>
        <p className="text-xs">
          {" "}
          Developed{" "}
          <span className="font-semibold">User-friendly, Responsive pages </span>
          i.e. Landing Page from scratch.
        </p> */}
      </div>
      {/* <div className="text-white flex flex-col gap-2 ">
        <h1 className="text-xl font-medium">App - Development </h1>
        <p className="text-xs">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.{" "}
        </p>
      </div>
      <div className="text-white flex flex-col gap-2 ">
        <h1 className="text-xl font-medium">
          Accounting Software - Development{" "}
        </h1>
        <p className="text-xs">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.{" "}
        </p>
      </div> */}
    </div>
  );
};

export default Skills;
