import React, { useEffect } from "react";
import classes from "./Header.module.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { signIn, logOut } from "../../store/actions/auth-action";

const Header = () => {
  const { username, image, isLoginned } = useSelector(
    (state) => state.createAcc
  );

  const dispatch = useDispatch();

  useEffect(() => {  
        dispatch(signIn(localStorage));
  }, [dispatch]);


  const onUnloginedUser = () => (
    <>
      <div className={classes["button--group"]}>
        <Link to="sign-in">
          <button className={classes["button--group__sign-in"]}>Sign In</button>
        </Link>
        <Link to="sign-up">
          <button className={classes["button--group__sign-up"]}>Sign Up</button>
        </Link>
      </div>
    </>
  );
  const onLoginedUser = () => (
    <>
      <div className={classes["button--group"]}>
        <Link to="new-article">
          <button className={classes["button--group__create--article"]}>
            Create article
          </button>
        </Link>
        <Link to="profile">
          <h6> {username}</h6>
        </Link>
        <Link to="profile">
          <Avatar size={64} src={`${image}`} icon={<UserOutlined />} />
        </Link>
        <button className={classes["button--group__logout"]}
        onClick={() => {localStorage.clear()
        dispatch(logOut())}}>Log Out</button>
      </div>
    </>
  );

  const logginedUser = onLoginedUser();
  const unlogginedUser = onUnloginedUser();
  const loginGroup = isLoginned ? logginedUser : unlogginedUser;
  return (
    <div className={classes.header}>
      <div className={classes.logo}>
        <h6>
          <Link to="/"> Realworld Blog </Link>
        </h6>
      </div>
      {loginGroup}
    </div>
  );
};

export default Header;
