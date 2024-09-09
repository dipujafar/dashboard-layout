"use client"
import { useState } from "react";
import AddSubAdmin from "./AddSubAdmin";
import SubAdminTable from "./SubAdminTable";

const SubAminContainer = () => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <div className="mb-6 flex justify-between items-center">
                <h1 className="text-[#333] text-4xl font-medium">Sub Admin</h1>
                <button onClick={()=> setOpen(!open)} className="px-4 py-3 bg-gradient-to-r from-[#CD0335] to-[#E53B5D] hover:from-[#c29cb8] hover:to-[#c2445d] rounded-md text-white font-bold">Add Sub Admin</button>
            </div>
            <SubAdminTable></SubAdminTable>
            <AddSubAdmin open={open} setOpen={setOpen}></AddSubAdmin>
        </div>
    );
};

export default SubAminContainer;