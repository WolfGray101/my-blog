import React from "react";
import { Button, Form, Input } from "antd";
import classes from "../sign-up/sign-up.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ServiceFile from "../../service/service-file";
import { signIn } from "../../store/actions/auth-action";

const serviceFile = new ServiceFile()

const Login = () => {

  const navigate = useNavigate()
  const [form] = Form.useForm();

  const dispatch = useDispatch()

  const {token}  = useSelector( (state) => state.createAcc)

  const onFinish = (formValues) => {
    serviceFile.login(formValues)
    .then(res => {
      console.log(res.user);
      setTimeout(( ) => navigate('/'), 1000 )  
      localStorage.setItem('token', res.user.token)
        dispatch(signIn(res.user))
      })
    .catch(err => {
      if (err.message === '422') {
        console.log(err.message, "email or user is incorrect")
      }
    })
  };
  const succes = token? " acc is created success. login plz" : null
  return (
    <>
    {succes}

    <Form
      className={classes["form"]}
      form={form}
      layout={"vertical"}
      name="register"
      onFinish={onFinish}
      scrollToFirstError
    >
      <h5> Sign In</h5>

      <Form.Item
        name="email"
        label="E-mail address"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
      >
        <Input placeholder="Email address" />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
        hasFeedback
      >
        <Input.Password placeholder="Password" />
      </Form.Item>

      <Form.Item>
        <Button className={classes.button} type="primary" htmlType="submit">
          Login
        </Button>
        <span className={classes.span}>
          Don`t` have an account? <Link to="/sign-up">Sign Up</Link>{" "}
        </span>
      </Form.Item>
    </Form>
    </>
  );
};
export default Login;
