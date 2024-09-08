import dashboardIcon from "@/assets/icons/dashboard.png"
import vendorsIcon from "@/assets/icons/vendors.png"
import Image from "next/image";
export const navLinks = [
    {
      key: "dashboard",
      icon: <Image src={dashboardIcon} alt="dashboardIcon"></Image>,
      label: "Dashboard",
    },
    {
      key: "vendors",
      icon: <Image src={vendorsIcon} alt="vendorsIcon"></Image>,
      label: "Vendors",
    },
  
  ];
  