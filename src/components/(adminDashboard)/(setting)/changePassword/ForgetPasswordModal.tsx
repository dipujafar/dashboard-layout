import { Button, Form, Input, Modal, Space } from "antd";
import { RiCloseLargeLine } from "react-icons/ri";

type TPropsType = {
  open: boolean;
  setOpen: (collapsed: boolean) => void;
};

const ForgetPasswordModal = ({ open, setOpen }: TPropsType) => {
  const [form] = Form.useForm();

  // @ts-ignore
  const handleSubmit = (values) => {
    console.log("Success:", values);
    setOpen(false);
  };
  return (
    <Modal
      open={open}
      footer={null}
      centered={true}
      onCancel={() => setOpen(false)}
      closeIcon={false}
      style={{
        minWidth: "max-content",
      }}
    >
      <div className="py-14">
        <div
          className="w-12 h-12 bg-mainColor  absolute top-0 right-0 rounded-bl-3xl cursor-pointer"
          onClick={() => setOpen(false)}
        >
          <RiCloseLargeLine
            size={18}
            color="#fff"
            className="absolute top-1/3 left-1/3"
          />
        </div>

        {/* header */}
        <div>
          <h4 className=" text-2xl font-medium text-center">Forgot Password</h4>
          <p className="mt-1 text-center">
            Please enter your email address to reset your password.
          </p>
        </div>

        {/* form */}
        <Form
          form={form}
          onFinish={handleSubmit}
          layout="vertical"
          style={{
            maxWidth: 500,
            marginTop: "25px",
          }}
        >
          {/*  input  email */}
          <Form.Item
            label="Email"
            name="email"
            rules={[{ type: "email", required: true }]}
          >
            <Input size="large" placeholder="Enter Your Email "></Input>
          </Form.Item>

          <Button htmlType="submit" size="large" block>
            Send OPT
          </Button>
        </Form>
      </div>
    </Modal>
  );
};

export default ForgetPasswordModal;
