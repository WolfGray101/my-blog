import React from "react";
import classes from "./Header.module.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.logo}>
          <h6><Link to="/"> Realworld Blog </Link></h6>       
      </div>
      <div className={classes["button--group"]}>
        <button className={classes["button--group__sign-in"]}>
          <Link to="sign-in">Sign In</Link>
        </button>
        <button className={classes[`button--group__sign-up`]}>
          <Link to="sign-up">Sign Up</Link>
        </button>
      </div>
    </div>
  );
};

export default Header;
