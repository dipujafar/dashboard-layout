import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

const links = [
    {
        lable: "Personal Information",
        path: "personalInformation"
    },
    {
        lable: "Change Password",
        path: "changePassword"
    },
    {
        lable: "Terms & Condition",
        path: "termsCondition"
    },
    {
        lable: "Privacy Policy",
        path: "privacyPolicy"
    },
    {
        lable: "About Us",
        path: "/"
    },
]

const SettingsPage = () => {
    return (
        <div className="grid grid-cols-1 gap-5">
            {
                links?.map(link=> <Link href={ `/${link.path}`}>
                    <div className="bg-[#F8D9E1] p-5 rounded flex justify-between items-center">
                        <h4 className="text-black font-medium text-lg">{link?.lable}</h4>
                        <IoIosArrowForward size={18} color="black"/>
                    </div>
                    </Link>)
            }
           
        </div>
    );
};

export default SettingsPage;