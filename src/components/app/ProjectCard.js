import React from "react";

const ProjectCard = (props) => {
  return (
    <div className="     mx-auto w-full lg:w-[1080px] lg:max-w-11/12">
      {" "}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4  my-9">
        {props.AllProjectData.map((item) => (
          <div
            key={item.id}
            className=" rounded-md p-3 flex flex-col gap-2 text-white text-start hover:scale-105 transition-all duration-200"
          >
            <img src={item.img} alt="" className="w-full h-48 rounded" />
            <h2 className="text-lg ">{item.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
