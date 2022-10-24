import React from "react";
import classes from "./Buttom.module.css";

const Buttom = (props) => {
  return (
    <button
      className={classes.button}
      type={props.type || "button"}
      onClick={props.children}
    >
      {props.children}
    </button>
  );
};

export default Buttom;
