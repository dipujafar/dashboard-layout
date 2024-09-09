import { Button, DatePicker, DatePickerProps, Form, Input, Modal, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";

type TPropsType = {
  open: boolean;
  setOpen: (collapsed: boolean) => void;
};



const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
  };

//@ts-ignore
const handleSubmit = (values) => {
    console.log("Success:", values);
  };



const UploadAdvertiseModal = ({ open, setOpen }: TPropsType) => {
    const [form] = Form.useForm();
  return (
    <Modal
      open={open}
      footer={null}
      centered={true}
      onCancel={() => setOpen(false)}
      style={{
        minWidth: "max-content",
        position: "relative"
      }}
    >
        <div className="w-12 h-12 bg-mainColor  absolute top-0 right-0 rounded-xl rounded-tr-none"></div>
      <div className="pb-20">
        <h4 className="text-center text-2xl font-medium" >User  Details</h4>
        {/* madal form for upload advertisement*/}
        <div className="flex-1">
            <Form
              form={form}
              onFinish={handleSubmit}
              layout="vertical"
              style={{
                maxWidth: 500,
                marginTop: "25px",
              }}
            >
              {/* image upload  */}
              <Form.Item
                name="bannerImage"
                valuePropName="fileList"
                getValueFromEvent={(e) =>
                  Array.isArray(e) ? e : e && e.fileList
                }
                rules={[{ required: true}]}
                style={{
                  textAlign: "center",
                  border: "2px dashed #B87CAE",
                  paddingBlock: "20px",
                  borderRadius: "10px",
                }}
              >
                <Upload
                  name="imageBanner"
                  listType="picture"
                  beforeUpload={() => false}
                >
                  <Button icon={<UploadOutlined />}>Upload Banner Image</Button>
                </Upload>
              </Form.Item>
              {/*  input  restaurant market name*/}
              <Form.Item
                label="Restaurant/Market"
                name="menuName"
                rules={[{ required: true, message: "Please enter restaurant market name" }]}
              >
                <Input size="large" placeholder="Enter restaurant market name "></Input>
              </Form.Item>

              {/* input  Exp Date */}
              <Form.Item
                label="Exp Date"
                name="expDate"
              >
                 <DatePicker onChange={onChange} style={{width: "100%"}} size="large" />
              </Form.Item>

              <Button htmlType="submit" size="large" block>
                Upload
              </Button>
            </Form>
          </div>
      </div>
    </Modal>
  );
};

export default UploadAdvertiseModal;
