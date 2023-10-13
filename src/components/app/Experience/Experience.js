import React from "react";

const Experience = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* <div className="text-white  flex flex-col gap-2">
        <h1 className="text-xl font-medium">Backend Developer-Microsoft</h1>
        <p className="text-xs">2021-Current</p>
      </div> */}
      <div className="text-white flex flex-col gap-2 ">
        <h1 className="text-xl font-medium">
          Frontend Developer - P2P Softwares Pvt. Ltd{" "}
        </h1>
        <p className="text-xs">1 October 2022- Current</p>
        <p className="">Created an E-learning website (Rik Academy)</p>

        <p className="">
          {" "}
          I have created websites of Rikeza, P2P Softwares, Tradebull ,
          Natural-Indian-Coffee , web3 .
        </p>
        <p className="">
          {" "}
          Developed{" "}
          <span className="font-semibold">
            User-friendly, Responsive pages{" "}
          </span>
          i.e. Landing Page from scratch.
        </p>
      </div>
      {/* <div className="text-white flex flex-col gap-2 ">
        <h1 className="text-xl font-medium">Software Engineer- KiwiTech</h1>
        <p className="text-xs">2017-2019</p>
      </div> */}
    </div>
  );
};

export default Experience;
