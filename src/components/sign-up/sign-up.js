import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import classes from "./sign-up.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signUp } from "../../store/actions/auth-action";
import ServiceFile from "../../service/service-file";

const SignUp = () => {
  const serviceFile = new ServiceFile();
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const onFinish = (formValues) => {
    serviceFile
      .createAcc(formValues)
      .then((res) => {
        console.log(res.user);
        setTimeout(() => navigate("/sign-in"), 1000);
        dispatch(signUp(res.user));
      })
      .catch((err) => {
        console.log(err.message);
        if (err.message === "422") {
          console.log("email or user is already exist");
        }
      });
  };
  const navigate = useNavigate();
  return (
    <>
      <Form
        className={classes["form"]}
        form={form}
        layout={"vertical"}
        name="register"
        onFinish={onFinish}
        scrollToFirstError
      >
        <h5> Create a new account</h5>
        <Form.Item
          name="nickname"
          label="Username"
          tooltip="What do you want others to call you?"
          rules={[
            () => ({
              validator(_, value) {
                if (value.length > 3 && value.length < 20) {
                  return Promise.resolve();
                } else if (!value) {
                  return Promise.reject(new Error("Please input Username!"));
                } else
                  return Promise.reject(
                    new Error(
                      "Username must be longer than 3 and shortest than 20 letters"
                    )
                  );
              },
            }),
          ]}
        >
          <Input placeholder="Username" />
        </Form.Item>

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
            () => ({
              validator(_, value) {
                if (value.length > 6 && value.length < 40) {
                  return Promise.resolve();
                } else if (!value) {
                  return Promise.reject(
                    new Error("Please input your password!")
                  );
                } else
                  return Promise.reject(
                    new Error(
                      "Password must be longer than 6 and shortest than 40 letters"
                    )
                  );
              },
            }),
          ]}
          hasFeedback
        >
          <Input.Password placeholder="Password" />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Repeat Password"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The two passwords that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password placeholder="Password" className={classes.input} />
        </Form.Item>

        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(new Error("Should accept agreement")),
            },
          ]}
        >
          <Checkbox className={classes["check-box--content"]}>
            I agree to the processing of my personal information
          </Checkbox>
        </Form.Item>

        <Form.Item>
          <Button className={classes.button} type="primary" htmlType="submit">
            Create Account
          </Button>
          <span className={classes.span}>
            Already have an account? <Link to="/sign-in">Sign In</Link>{" "}
          </span>
        </Form.Item>
      </Form>
    </>
  );
};
export default SignUp;
