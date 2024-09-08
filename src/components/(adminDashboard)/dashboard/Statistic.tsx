import Image from "next/image";
import vendorsIcon from "@/assets/icons/statisticVendors.png"


const Statistic = () => {
    return (
        <div className="flex justify-between gap-14">
            <div className="flex items-center  gap-6 h-[165px] w-full p-4 bg-[#F8D9E1] rounded-xl">
                <Image src={vendorsIcon} alt="vendorsIcon"></Image>
                <div className="space-y-2">
                    <h3 className="text-xl">Total Vendors</h3>
                    <p className="text-3xl font-medium text-mainColor">2,566</p>
                </div>
            </div>
            <div className="flex items-center gap-6 h-[165px] w-full  p-4 bg-[#F8D9E1] rounded-xl">
                <Image src={vendorsIcon} alt="vendorsIcon"></Image>
                <div className="space-y-2">
                    <h3 className="text-xl">Total Users</h3>
                    <p className="text-3xl font-medium text-mainColor">6,037</p>
                </div>
            </div>
            <div className="flex items-center gap-6 h-[165px] w-full  p-4 bg-[#F8D9E1] rounded-xl">
                <Image src={vendorsIcon} alt="vendorsIcon"></Image>
                <div className="space-y-2">
                    <h3 className="text-xl">Total Visitors</h3>
                    <p className="text-3xl font-medium text-mainColor">9,482</p>
                </div>
            </div>

        </div>
    );
};

export default Statistic;