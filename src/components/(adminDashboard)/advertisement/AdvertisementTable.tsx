"use client";
import { TableProps } from "antd";
import { MdOutlineErrorOutline } from "react-icons/md";
import { useState } from "react";
import DataTable from "@/utils/DataTable";

import Image, { StaticImageData } from "next/image";
import bannerImage from "@/assets/image/bannerImage.png"
import UploadAdvertiseModal from "./UploadAdvertiseModal";

type TDataType = {
  key?: string;
  banner: StaticImageData;
  shopName: string;
  expDate: string;
};
const data: TDataType[] = Array.from({length: 50}).map(() => {    
    return {
        key: "1",
        banner: bannerImage,
        shopName: "Star Restaurant",
        expDate: "15-7-2024",
      
      }
})
  



const AdvertisementTable = () => {
  const [open, setOpen] = useState(false);

  const columns: TableProps<TDataType>["columns"] = [
    {
      title: "Banner",
      dataIndex: "banner",
      render: (value)=>(
        <Image src={value} alt="bannerImage" width={92} height={40} className="rounded"></Image>
      )
    },
    {
      title: "Restaurant/Shop Name",
      dataIndex: "shopName",
    },
    {
      title: "Exp Date",
      dataIndex: "expDate",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: () => (
          <MdOutlineErrorOutline
            size={20}
            color="#CD0335"
            onClick={() => setOpen(!open)}
          />  
      ),
    },
  ];

  return (
    <div>
      <DataTable columns={columns} data={data}  pageSize={15}></DataTable>
      <UploadAdvertiseModal open={open} setOpen={setOpen}></UploadAdvertiseModal>
    </div>
  );
};

export default AdvertisementTable;
