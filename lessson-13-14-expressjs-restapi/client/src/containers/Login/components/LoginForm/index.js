import React from "react";
import { Form, Input, Checkbox, Button } from "antd";

import css from "./LoginForm.module.css";

const LoginForm = (props) => {
  const { onLogin, loading } = props;

  return (
    <div className={css.root}>
      <h1 className={css.title}>Login form</h1>

      <Form
        labelCol={{
          span: 24,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onLogin}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
            {
              type: "email",
              message: "Please input a valid email",
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
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Button
          loading={loading}
          type="primary"
          htmlType="submit"
          className={css.submitButton}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default LoginForm;
