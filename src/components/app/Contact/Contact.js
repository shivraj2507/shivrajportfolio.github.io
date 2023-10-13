import React, { useEffect, useRef, useState } from "react";
import styles from "./Contact.module.css";
import contactMe from "../../../assets/img/contact-me.png";

import { Button, TextField, Typography, makeStyles } from "@material-ui/core";

import emailjs from "emailjs-com";

import Loading from "../../partials/Loading/Loading";

const useStyles = makeStyles((theme) => {
  return {
    submitBtn: {
      borderRadius: 8,

      minWidth: 89,
      maxWidth: 89,
      height: 43,
      padding: 0,
      boxShadow: "0 3px 3px rgba(0,0,0,.08)",
      "&:hover": {
        boxShadow: "0 4px 5px rgba(0,0,0,.15)",
        "& > *": {
          color: "#fff",
        },
      },
      "&:active": {
        boxShadow: "0 2px 3px rgba(0,0,0,.08)",
      },
      [theme.breakpoints.down(1000)]: {
        height: 40,
        "& > span h6": {
          fontSize: 16,
        },
      },
      [theme.breakpoints.down(800)]: {
        minWidth: 120,
        maxWidth: 120,
      },
    },
    contactIcon: {
      cursor: "pointer",
      transition: "all .3s",
      "&:hover": {
        transform: "scale(1.05)",
      },
    },
    textField: {
      "&>label": {
        color: "#ccc !important",
      },
      "&> div": {
        "& > fieldset": {
          borderColor: "#ccc !important",
        },
        "& > input": {
          color: "#ccc",
        },
        "& > textarea": {
          color: "#ccc",
        },
        "&:hover > fieldset": {
          borderColor: "#fff !important",
        },
      },
      [theme.breakpoints.down(1000)]: {
        "& > label": {
          fontSize: 18,
        },
        "& > div": {
          fontSize: 20,
        },
      },
      [theme.breakpoints.down(500)]: {
        "& > label": {
          fontSize: 16,
        },
        "& > div": {
          fontSize: 18,
        },
      },
    },
    goBackToTop: {
      minWidth: 48,
      maxWidth: 48,
      minHeight: 48,
      maxHeight: 48,
      borderRadius: "50%",
      backgroundColor: "#f9004d",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "fixed",
      right: "1%",
      bottom: "2%",
      visibility: "hidden",
      opacity: 0,
      boxShadow: "0 2px 8px #f9004d75",
      zIndex: 9999,
      "&:hover": {
        backgroundColor: "#e30147",
        "& svg": {
          transform: "scale(1.1)",
        },
      },
    },
    arrowIcon: {
      color: "#fff",
      transition: "all .3s",
    },
  };
});

const Contact = () => {
  const classes = useStyles();
  const nameInputRef = useRef < HTMLInputElement > null;
  const emailInputRef = useRef < HTMLInputElement > null;
  const messageInputRef = useRef < HTMLInputElement > null;
  const [showSentMsge, setShowSentMsge] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const name = nameInputRef.current?.value;
    const email = emailInputRef.current?.value;
    const message = messageInputRef.current?.value;

    console.log({ name: name, email: email, message: message });
    setIsLoading(true);
    emailjs
      .sendForm(
        "service_2gxei6a",
        "template_4gbjcmm",

        e.target,
        "JGf6vDkHN6QEzVIVd"
      )
      .then(
        (result) => {
          console.log(result.text);
          setShowSentMsge(true);
          setIsLoading(false);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact" className="bg-black w-full py-9">
      <div className={styles.innerContainer}>
        <div className={styles.formContainer}>
          <div className="w-full space-y-2  ">
            {" "}
            <h1
              className={` text-center lg:text-start text-4xl font-bold ${styles["gradient"]}`}
            >
              Contact Me
            </h1>
            <p className="text-center text-white lg:text-start">
              Call us Directly : +91 9773620571
            </p>
            <p className="text-white text-center lg:text-start">
              Contact Email : shivraj.singh8527@gmail.com
            </p>
          </div>
          <form className={styles.contactForm} onSubmit={formSubmitHandler}>
            <TextField
              inputRef={nameInputRef}
              id="outlined-basic"
              label="Name"
              size="small"
              name="to_name"
              fullWidth
              className={classes.textField}
              variant="outlined"
              color="primary"
              disabled={isLoading}
              required
            />
            <TextField
              inputRef={emailInputRef}
              id="outlined-basic"
              type="email"
              label={"Email"}
              size="small"
              name="from_name"
              fullWidth
              className={classes.textField}
              variant="outlined"
              color="primary"
              disabled={isLoading}
              required
            />
            <TextField
              inputRef={messageInputRef}
              variant="outlined"
              name="message"
              color="primary"
              id="outlined-multiline-static"
              label="Message"
              fullWidth
              className={classes.textField}
              multiline
              disabled={isLoading}
              rows={5}
            />

            <Button
              variant="contained"
              color="secondary"
              className={classes.submitBtn}
              type="submit"
              style={{ pointerEvents: isLoading ? "none" : "all" }}
              disableElevation
            >
              {!isLoading ? (
                <Typography className="" variant="subtitle1">
                  Send
                </Typography>
              ) : (
                <Loading />
              )}
            </Button>
          </form>
        </div>
        <div className="w-full  lg:w-3/6">
          <img
            src={contactMe}
            alt=""
            className="w-full md:w-9/12 lg:w-11/12 m-auto "
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
