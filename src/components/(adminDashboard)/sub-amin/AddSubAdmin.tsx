import { Divider, Modal } from "antd";

type TPropsType = {
  open: boolean;
  setOpen: (collapsed: boolean) => void;
};

const AddSubAdmin = ({ open, setOpen }: TPropsType) => {
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
        <h4 className="text-center text-2xl font-medium" >Add Sub Admin</h4>
      </div>
    </Modal>
  );
};

export default AddSubAdmin;