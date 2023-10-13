import React from "react";

const Education = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="text-white  flex flex-col gap-2">
        <h1 className="text-xl font-medium">
          Bachelor of Technology- Ch. Brahm Prakash Government Engineering
          College
        </h1>
        <p className="text-xs">2017-2021</p>
      </div>
      <div className="text-white flex flex-col gap-2 ">
        <h1 className="text-xl font-medium">Govt. Boys Sr. Sec. School</h1>
        <p className="text-xs">2016</p>
      </div>
      <div className="text-white flex flex-col gap-2 ">
        <h1 className="text-xl font-medium"> Govt. Boys Sec. School</h1>
        <p className="text-xs">2014</p>
      </div>
    </div>
  );
};

export default Education;
