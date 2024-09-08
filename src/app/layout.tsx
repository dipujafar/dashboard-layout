import type { Metadata } from "next";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import antTheme from "@/theme/antTheme";
import {Poppins} from "next/font/google"

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500","600", "700","800" ]
})



export const metadata: Metadata = {
  title: {
    default: "Admin Dashboard | YUMQUICK",
    template: "%s | YUMQUICK"
  },
  description: "This is Official Application for YUMQUICK",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="../assets/logo.png" type="image/x-icon" />
      </head>
      <body
        className={`${poppins.className}  antialiased`}
      >
       <AntdRegistry>
        <ConfigProvider theme={antTheme}>
        {children}
        </ConfigProvider>
        </AntdRegistry>
        
      </body>
    </html>
  );
}
