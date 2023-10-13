import React from "react";
import {
  GitHub,
  LinkedIn,
  Twitter,
  Instagram,
  Facebook,
} from "@material-ui/icons";

import shivraj from "../../../assets/img/shivraj.png";
import { makeStyles, Link } from "@material-ui/core";
const useStyles = makeStyles((theme) => {
  return {
    contactIcon: {
      fontSize: "50px",
      cursor: "pointer",
      transition: "all .3s",
      "&:hover": {
        transform: "scale(1.05)",
        color: "#FF2B4F",
      },
    },
  };
});

const Footer = () => {
  const classes = useStyles();
  return (
    <section className="bg-black w-full">
      <div className="w-full lg:max-w-11/12 mx-auto lg:w-[1080px] ">
        <div className=" flex flex-col lg:flex-row gap-6 py-16">
          <div className="flex flex-col gap-6 w-full lg:w-1/3">
            {" "}
            <img src={shivraj} alt="" className="w-32" />
            <p className="text-white w-full lg:max-w-md pr-3  text-xs">
              Copyright © 2022 All rights reserved by Shivraj Portfolio. All
              rights reserved.
            </p>
          </div>
          <div className="w-4/6 flex gap-4 mt-auto mb-10 justify-start lg:justify-center">
            {" "}
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/shivraj-singh-0b4103263/"
            >
              <LinkedIn fontSize="large" className={classes.contactIcon} />
            </Link>
            <Link target="_blank" href="https://github.com/shivraj2507">
              <GitHub fontSize="large" className={classes.contactIcon} />
            </Link>
            <Link target="_blank" href="https://www.instagram.com/sam_m0725/">
              <Facebook fontSize="large" className={classes.contactIcon} />
            </Link>
            <Link target="_blank" href="https://www.instagram.com/sam_m0725/">
              <Instagram fontSize="large" className={classes.contactIcon} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
