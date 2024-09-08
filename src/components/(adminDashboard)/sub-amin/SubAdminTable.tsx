"use client";
import { TableProps } from "antd";
import { MdOutlineErrorOutline } from "react-icons/md";
import { useState } from "react";
import DataTable from "@/utils/DataTable";

type TDataType = {
  key?: string;
  name: string;
  email: string;
  date: string;
  phone?: string;
};
const data: TDataType[] = [
  {
    key: "1",
    name: "James Tracy",
    email: "james1234@gmail.comm",
    phone: "12345678",
    date: "11 Oct, 2024",
  },
  {
    key: "1",
    name: "James Tracy",
    email: "james1234@gmail.comm",
    phone: "12345678",
    date: "11 Oct, 2024",
  },
  {
    key: "1",
    name: "James Tracy",
    email: "james1234@gmail.comm",
    phone: "12345678",
    date: "11 Oct, 2024",
  },
  {
    key: "1",
    name: "James Tracy",
    email: "james1234@gmail.comm",
    phone: "12345678",
    date: "11 Oct, 2024",
  },
  {
    key: "1",
    name: "James Tracy",
    email: "james1234@gmail.comm",
    phone: "12345678",
    date: "11 Oct, 2024",
  },
  {
    key: "1",
    name: "James Tracy",
    email: "james1234@gmail.comm",
    phone: "12345678",
    date: "11 Oct, 2024",
  },
  {
    key: "1",
    name: "James Tracy",
    email: "james1234@gmail.comm",
    phone: "12345678",
    date: "11 Oct, 2024",
  },
  {
    key: "1",
    name: "James Tracy",
    email: "james1234@gmail.comm",
    phone: "12345678",
    date: "11 Oct, 2024",
  },
];



const SubAdminTable = () => {
    const [open, setOpen] = useState(false);

    const columns: TableProps<TDataType>["columns"] = [
        {
          title: "#SI",
          dataIndex: "key",
          render: (value) => value,
        },
        {
          title: "Sub Admin Name",
          dataIndex: "name",
        },
        {
          title: "Email",
          dataIndex: "email",
        },
      
        {
          title: "Phone number",
          dataIndex: "phone",
        },
        {
          title: " Join Date",
          dataIndex: "date",
        },
        {
          title:"Action",
          dataIndex: "action",
          render: ()=>(
              <div>
                  <MdOutlineErrorOutline size={20} color="#CD0335" onClick={()=>setOpen(!open)} />
              </div>
          )
        }
      ];

  return (
    <div>
      <DataTable columns={columns} data={data} pageSize={10}></DataTable>
    </div>
  );
};

export default SubAdminTable;
