import { Metadata } from "next";
import Image from "next/image";
import logo from "@/assets/logo.png"
import LoginForm from "@/components/(auth)/login/LoginForm";


export const metadata: Metadata = {
  title: "Admin Login",
  description: "Admin login for YUMQUICK. Access the secure portal to manage healthcare services, oversee patient records, and administer YUMQUICK medicine and care operations."
};

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-mainColor ">
      <div className="flex justify-center items-center   mx-auto border-2  md:px-12 px-11 py-10 rounded-[40px] bg-[#FFF9FA] ">
        <div>
          <div className="mb-6   flex flex-col justify-center items-center gap-y-4">
            <div>
            <Image src={logo} alt="logImage"></Image>
            <h1 className=" mt-3 font-extrabold text-mainColor">YUMQUICK</h1>
            </div>
            <h2 className="text-2xl  font-bold  ">
              Sign In
            </h2>
          </div>
          <LoginForm></LoginForm>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
