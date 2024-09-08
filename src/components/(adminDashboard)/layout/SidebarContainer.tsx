
import { ConfigProvider, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logoWhite.png";
import { navLinks } from "@/utils/navLinks";


const SidebarContainer = ({ collapsed }: { collapsed: boolean }) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            itemSelectedColor: "rgb(205,3,53)",
            itemSelectedBg: "rgb(253,253,253)",
          },
        },
      }}
    >
      <Sider
        width={320}
        theme="light"
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{
          paddingInline: `${collapsed ? "10px" : "26px"}`,
          backgroundColor: "#CD0335",
          maxHeight: "100vh",
          overflow: "auto",
        }}
      >
        <div className="demo-logo-vertical" />
        {/* logo  */}
        <div className="mt-10 mb-5 flex flex-col justify-center items-center gap-y-5">
          <Link href={"/"}>
            <Image src={logo} alt="logo_Image" />
          </Link>
          <h1 className={`${collapsed ? "text-sm":"text-xl"}   font-extrabold text-white`}>YUMQUICK</h1>
        </div>
        <Menu
          defaultSelectedKeys={["dashboard"]}
          mode="inline"
          className="sidebar-menu text-lg bg-mainColor"
          items={navLinks}
        />
      </Sider>
    </ConfigProvider>
  );
};

export default SidebarContainer;
