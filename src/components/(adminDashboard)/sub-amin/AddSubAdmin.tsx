import type { FormProps } from "antd";
import { Button, Checkbox, ConfigProvider, Form, Input, Modal, Space } from "antd";
import { RiCloseLargeLine } from "react-icons/ri";

type TPropsType = {
  open: boolean;
  setOpen: (collapsed: boolean) => void;
};

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const handleSubmit: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const AddSubAdmin = ({ open, setOpen }: TPropsType) => {
  const [form] = Form.useForm();
  return (
    <ConfigProvider
      theme={{
        components: {
          Input: {
            colorBorder: "rgb(184,124,174)",
          },
          Form: {
            labelRequiredMarkColor: "rgb(255,255,255)",
            labelFontSize: 18,
          },
        },
      }}
    >
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
        <div>
        <div
        className="w-12 h-12 bg-mainColor  absolute top-0 right-0 rounded-bl-3xl cursor-pointer"
        onClick={() => setOpen(false)}
      >
        <RiCloseLargeLine size={18} color="#fff" className="absolute top-1/3 left-1/3" />
      </div>
          <div className="pb-10">
            <h4 className="text-center text-2xl font-medium">Add Sub Admin</h4>
          </div>

          <Form
            form={form}
            onFinish={handleSubmit}
            layout="vertical"
            style={{
              maxWidth: 500,
              marginTop: "25px",
            }}
          >
            {/*  input  name */}
            <Form.Item
              label="Full Name"
              name="name"
              rules={[{ required: true, message: "Please enter full name" }]}
            >
              <Input size="large" placeholder="Enter full name "></Input>
            </Form.Item>

            {/*  input  email */}
            <Form.Item
              label="Email"
              name="email"
              rules={[{ type: "email", required: true }]}
            >
              <Input size="large" placeholder="Enter email "></Input>
            </Form.Item>

            {/* input  phone number  */}
            <Form.Item
              label="Phone Number"
              name="phone"
              rules={[
                { required: true, message: "Please enter Phone Number" },
               
              ]}
            >
              <Space.Compact size="large" block>
                <Input style={{ width: "20%" }}  />
                <Input style={{ width: "80%" }} />
              </Space.Compact>
            </Form.Item>

            <Button htmlType="submit" size="large" block>
              Add
            </Button>
          </Form>
        </div>
      </Modal>
    </ConfigProvider>
  );
};

export default AddSubAdmin;
