import { Button, Form, Input, InputNumber } from "antd";
import style from "./Contact.module.scss";
export default function Contact() {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 32 },
  };

  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
    },
  };

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <div className={style.body}>
      <div className={style.title}>
        <h1>Contact</h1>
      </div>
      <div className={style.form}>
        <Form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          style={{ width: 600 }}
          validateMessages={validateMessages}
        >
          <Form.Item
            name={["user", "name"]}
            label="Name"
            rules={[{ required: true }]}
            validateTrigger={["onBlur", "onChange"]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["user", "email"]}
            label="Email"
            rules={[{ required: true }, { type: "email" }]}
            validateTrigger={["onBlur", "onChange"]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["user", "message"]}
            label="Message"
            rules={[{ required: true }]}
            validateTrigger={["onBlur", "onChange"]}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
