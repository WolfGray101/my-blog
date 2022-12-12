import React from "react";
import { Button, Form, Input } from "antd";
import classes from "./login.module.scss";

const Login = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Form
      className={classes["login--form"]}
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
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};
export default Login;
