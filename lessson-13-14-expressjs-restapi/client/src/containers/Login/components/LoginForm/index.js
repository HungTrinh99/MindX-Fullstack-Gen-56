import css from "./LoginForm.module.css";
import { Form, Input, Checkbox, Button } from "antd";
import { Link } from "react-router-dom";
const LoginForm = (props) => {
  const { onSubmit, loading } = props;
  return (
    <div className={css.loginFomWrapper}>
      <h1 className={css.title}>Login to your account</h1>
      <Form
        name="basic"
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        onFinish={onSubmit}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox className={css.termAndPolicy}>
            Agree <Link to="/">Terms and policy</Link>
          </Checkbox>
        </Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className={css.formSubmitButton}
          loading={loading}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default LoginForm;
