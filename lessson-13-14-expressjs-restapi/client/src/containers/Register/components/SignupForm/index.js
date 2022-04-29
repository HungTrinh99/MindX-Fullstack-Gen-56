import React from "react";
import { Button, Form, Input } from "antd";
import css from "./SignupForm.module.css";

const SignupForm = (props) => {
  const { onSubmit, loading } = props;
  return (
    <div className={css.root}>
      <h1 className={css.title}>Signup form</h1>

      <Form
        labelCol={{
          span: 24,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onSubmit}
        autoComplete="off"
      >
        <Form.Item
          label="Fullname"
          name="fullname"
          rules={[
            {
              required: true,
              message: "Please enter your name!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please enter your email!",
            },
            {
              type: "email",
              message: "Please enter a valid email",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please enter your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Button
          loading={loading}
          type="primary"
          htmlType="submit"
          className={css.submitButton}
        >
          Sign up
        </Button>
      </Form>
    </div>
  );
};
export default SignupForm;
