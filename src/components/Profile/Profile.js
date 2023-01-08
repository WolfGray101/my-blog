import React from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Input } from "antd";
import classes from "./Profile.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateUser } from "../../store/actions/auth-action";

const schema = yup.object().shape({
  userName: yup.string().min(3).max(20),
  email: yup.string().email(),
  newPassword: yup
    .string()
    .min(6, "password must be longer than 6 symbols.")
    .max(40)
    .required(),
  imgUrl: yup.string().url(),
});

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token, username, email } 
  = useSelector((state) => state.createAcc);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    const user = {
      username: data.userName,
      email: data.email,
      password: data.newPassword,
      image: data.imgUrl,
    };
    console.log(user);
    dispatch(updateUser(user, token));
    reset();
    navigate("/");
  };
  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <h5> Edit Profile</h5>

      <div className={classes.item}>
        <span>Username </span>
        <Controller
          control={control}
          name="userName"
          render={({ field }) => (
            <Input {...field} defaultValue={username} placeholder="Username" />
          )}
        />
      </div>

      <div className={classes.item}>
        <span>Email address</span>
        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <Input
              {...field}
              defaultValue={email}
              placeholder="Email address"
            />
          )}
        />
      </div>
      <div className={classes.item}>
        <span>New password</span>
        <Controller
          control={control}
          name="newPassword"
          render={({ field }) => <Input {...field} placeholder="Password" />}
        />
      </div>
      <div className={classes.item}>
        <span>Avatar image (url)</span>
        <Controller
          control={control}
          name="imgUrl"
          render={({ field }) => (
            <Input {...field} placeholder=" Avatar image " />
          )}
        />
      </div>

      <input className={classes.submit} type="submit" value="Save" />
    </form>
  );
};

export default Profile;
