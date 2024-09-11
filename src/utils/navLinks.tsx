import { RiDashboardHorizontalFill } from "react-icons/ri";
import { GoPeople } from "react-icons/go";
import { IoPeopleCircle } from "react-icons/io5";
import { GrRestaurant } from "react-icons/gr";
import { TbAlignBoxLeftMiddle } from "react-icons/tb";
import { LuMessageSquarePlus } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import Link from "next/link";

export const navLinks = [
    {
      key: "dashboard",
      icon: <RiDashboardHorizontalFill size={18} />,
      label: <Link href={"/dashboard"}>Dashboard</Link>,
    },
    {
      key: "subAdmin",
      icon: <IoPeopleCircle  size={18} />,
      label: <Link href={"/sub-admin"}>Sub Admin</Link>
    },

    {
      key: "restaurantsMarket",
      icon: <GrRestaurant size={18} />,
      label: <Link href={"/restaurants-market"}>Restaurants & Market</Link>,
    },
    {
      key: "advertisement",
      icon: <TbAlignBoxLeftMiddle  size={18} />,
      label: <Link href={"/advertisement"}>Advertisement</Link>,
    },
    {
      key: "vendors",
      icon: <GoPeople size={18} />,
      label: <Link href={"/vendors"}>Vendors</Link>,
    },
    {
      key: "users",
      icon: <GoPeople size={18} />,
      label: <Link href={"/user"}>Users</Link>,
    },
    {
      key: "passwordResetRequest",
      icon: <LuMessageSquarePlus size={18} />,
      label: <Link href={"/resetPasswordRequest"}>Password Reset Request</Link>,
    },
    {
      key: "settings",
      icon: <IoSettingsOutline  size={18} />,
      label: <Link href={"/settings"}>Settings</Link>,
    },
  ];
  