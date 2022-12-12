import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import classes from './sign-up.module.scss'


const SignUp = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Form
    labelCol ={ {offset:12}}

      className={classes['sign-up--form']}
      form={form}
      layout={"vertical"}
      name="register"
      onFinish={onFinish}
      scrollToFirstError
    >
      <h5> Create a new account</h5>

<Form.Item
    labelCol ={ {span: 12, offset:12}}
        name="nickname"
        label="Username"
        tooltip="What do you want others to call you?"
        rules={[
          {
            required: true,
            message: "Please input your nickname!",
            whitespace: true,
          },
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
        <Input placeholder="Email address"/>
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
        <Input.Password placeholder="Password"/>
      </Form.Item>

      <Form.Item
    labelCol ={ {span: 12, offset:12}}

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
        <Input.Password placeholder="Password" className={classes.input}/>
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
        <Checkbox>
          I have read the <a href="/">agreement</a>
        </Checkbox>
      </Form.Item>

      <Form.Item >
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};
export default SignUp;
