"use client";
import { TableProps } from "antd";
import { MdOutlineErrorOutline } from "react-icons/md";
import UserDetails from "../../shared/UserDetails";
import { useState } from "react";
import DataTable from "@/utils/DataTable";

type TDataType = {
  key?: string;
  name: string;
  email: string;
  date: string;
  type: string;
};
const data: TDataType[] = [
  {
    key: "12345678",
    name: "James Tracy",
    email: "james1234@gmail.comm",
    type: "User",
    date: "11 Oct, 2024",
  },
  {
    key: "12345678",
    name: "James Tracy",
    email: "james1234@gmail.comm",
    type: "User",
    date: "11 Oct, 2024",
  },
  {
    key: "12345678",
    name: "James Tracy",
    email: "james1234@gmail.comm",
    type: "User",
    date: "11 Oct, 2024",
  },
  {
    key: "12345678",
    name: "James Tracy",
    email: "james1234@gmail.comm",
    type: "User",
    date: "11 Oct, 2024",
  },
  {
    key: "12345678",
    name: "James Tracy",
    email: "james1234@gmail.comm",
    type: "User",
    date: "11 Oct, 2024",
  },
  {
    key: "12345678",
    name: "James Tracy",
    email: "james1234@gmail.comm",
    type: "User",
    date: "11 Oct, 2024",
  },
  {
    key: "12345678",
    name: "James Tracy",
    email: "james1234@gmail.comm",
    type: "User",
    date: "11 Oct, 2024",
  },
  {
    key: "12345678",
    name: "James Tracy",
    email: "james1234@gmail.comm",
    type: "User",
    date: "11 Oct, 2024",
  },
  {
    key: "12345678",
    name: "James Tracy",
    email: "james1234@gmail.comm",
    type: "User",
    date: "11 Oct, 2024",
  },
  {
    key: "12345678",
    name: "James Tracy",
    email: "james1234@gmail.comm",
    type: "User",
    date: "11 Oct, 2024",
  },
  {
    key: "12345678",
    name: "James Tracy",
    email: "james1234@gmail.comm",
    type: "User",
    date: "11 Oct, 2024",
  },
];



const LatestUser = () => {
    const [open, setOpen] = useState(false);

    const columns: TableProps<TDataType>["columns"] = [
        {
          title: "#Tr.ID",
          dataIndex: "key",
          render: (value) => value,
        },
        {
          title: "Full Name",
          dataIndex: "name",
        },
        {
          title: "Email",
          dataIndex: "email",
        },
      
        {
          title: "Type",
          dataIndex: "type",
        },
        {
          title: "Date",
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
      <UserDetails open={open} setOpen={setOpen}></UserDetails>
    </div>
  );
};

export default LatestUser;
