import React, { useEffect, useState } from "react";
import styles from "./Nav.module.css";
import { Typography, makeStyles, Button } from "@material-ui/core";
import { Menu } from "@material-ui/icons";

import shivraj from "../../../assets/img/shivraj.png";

const useStyles = makeStyles((theme) => {
  return {
    link: {
      cursor: "pointer",
      [theme.breakpoints.down(601)]: {
        display: "none",
      },
      textDecoration: "none",
      "&:hover": {
        textDecoration: "underline",
      },
    },
    linkText: {
      textTransform: "capitalize",
      fontWeight: 300,
    },
    drawerBtn: {
      minWidth: 140,
      maxWidth: 140,
      textAlign: "start",
    },
    menuItemBtn: {
      minWidth: 40,
      maxWidth: 40,
      height: 40,
      borderRadius: 5,
      display: "none",
      marginLeft: "auto",
      alignItems: "center",
      justifyContent: "center",

      [theme.breakpoints.down(601)]: {
        display: "flex",
      },
      [theme.breakpoints.down(501)]: {
        marginRight: 10,
      },
    },
  };
});

export default function Nav() {
  const classes = useStyles();
  const navLinks = ["home", "about", "services", "projects", "contact"];
  const [showDrawer, setShowDrawer] = useState(false);

  const goToSectionHandler = (link) => {
    if (link === "resume") return;
    console.log(link);
    document.querySelector(`#${link}`)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <React.Fragment>
      <nav className={styles.nav}>
        <div className={styles.innerContainer}>
          <div className={styles.linkContainer}>
            <img src={shivraj} alt="" className="h-12" />;
            <div className="flex gap-4">
              {" "}
              {navLinks.map((link) => (
                <Typography
                  key={link}
                  onClick={() => goToSectionHandler(link)}
                  variant="subtitle1"
                  color="primary"
                  className={`${classes.linkText} ${classes.link} `}
                  component="a"
                >
                  {link}
                </Typography>
              ))}
              {/* <Typography
                href={resumeLink}
                target="_blank"
                variant="subtitle1"
                color="primary"
                className={`${classes.linkText} ${classes.link} `}
                component="a"
              >
                resume
              </Typography> */}
              <Button
                onClick={() => {
                  setShowDrawer(!showDrawer);
                }}
                className={classes.menuItemBtn}
              >
                <Menu color="primary" fontSize="large" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {showDrawer && (
        <div id="drawer" className={styles.drawer}>
          <div className={styles.drawerInnerContainer}>
            {navLinks.map((link) => (
              <Button
                className={classes.drawerBtn}
                key={link}
                onClick={() => goToSectionHandler(link)}
              >
                <Typography
                  variant="body1"
                  color="primary"
                  className={classes.linkText}
                >
                  {link}
                </Typography>
              </Button>
            ))}
            {/* <Button
              href={resumeLink}
              target="_blank"
              className={classes.drawerBtn}
            >
              <Typography
                variant="body1"
                color="primary"
                className={classes.linkText}
              >
                resume
              </Typography>
            </Button> */}
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
