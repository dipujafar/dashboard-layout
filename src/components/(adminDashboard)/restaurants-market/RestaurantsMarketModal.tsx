import {
  Button,
  ConfigProvider,
  Form,
  FormProps,
  Input,
  Modal,
  Upload,
} from "antd";
import Image, { StaticImageData } from "next/image";
import menu1 from "@/assets/image/menu1.png";
import menu2 from "@/assets/image/manu2.png";
import { UploadOutlined } from "@ant-design/icons";

type TPropsType = {
  open: boolean;
  setOpen: (collapsed: boolean) => void;
};

type TMenuItems = {
  key: number;
  iamge: StaticImageData;
  itemName: string;
  manuName: string;
}[];

const menuItems: TMenuItems = [
  {
    key: 1,
    iamge: menu1,
    itemName: "Grilled Beef Steak",
    manuName: "Main Manu",
  },
  {
    key: 2,
    iamge: menu2,
    itemName: "Avocado Crispy Bread",
    manuName: "Sneaks",
  },
];

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const handleSubmit: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const RestaurantsMarketModal = ({ open, setOpen }: TPropsType) => {
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
        style={{
          minWidth: "max-content",
          position: "relative",
        }}
      >
        <div className="w-12 h-12 bg-mainColor  absolute top-0 right-0 rounded-xl rounded-tr-none"></div>
        <div className="flex justify-between gap-10 lg:w-[900px] pt-16 pb-40">
          <div className="flex-1">
            <h1 className="text-lg">Menu Item</h1>
            <div className="grid grid-cols-1 gap-6">
              {menuItems?.map((item) => (
                <div
                  key={item?.key}
                  className="mt-3 flex items-center gap-4 bg-lightPink px-4 py-3 rounded"
                >
                  <Image src={item?.iamge} alt="menuImage"></Image>
                  <div>
                    <h5 className="font-medium text-primaryBlack">
                      {item?.itemName}
                    </h5>
                    <p className="text-primaryGray">{item?.manuName}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* madal form for upload menu */}
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
                name="image"
                valuePropName="fileList"
                getValueFromEvent={(e) =>
                  Array.isArray(e) ? e : e && e.fileList
                }
                rules={[{ required: true}]}
                style={{
                  textAlign: "center",
                  border: "2px dashed #D9D9D9",
                  paddingBlock: "20px",
                  borderRadius: "10px",
                }}
              >
                <Upload
                  name="image"
                  listType="picture"
                  beforeUpload={() => false}
                >
                  <Button icon={<UploadOutlined />}>Upload Menu Image</Button>
                </Upload>
              </Form.Item>
              {/*  input  email */}
              <Form.Item
                label="Menu Name"
                name="menuName"
                rules={[{ required: true, message: "Please enter menu name" }]}
              >
                <Input size="large" placeholder="Enter menu name "></Input>
              </Form.Item>

              {/* input  phone number  */}
              <Form.Item
                label="Item Name"
                name="itemName"
                rules={[{ required: true, message: "Please enter Item Name" }]}
              >
                <Input
                  size="large"
                  placeholder="Please enter item name"
                ></Input>
              </Form.Item>

              <Button htmlType="submit" size="large" block>
                Upload
              </Button>
            </Form>
          </div>
        </div>
      </Modal>
    </ConfigProvider>
  );
};

export default RestaurantsMarketModal;
