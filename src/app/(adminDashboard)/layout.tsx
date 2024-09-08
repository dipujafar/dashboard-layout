"use client"

import { ReactNode, useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import SidebarContainer from '@/components/(adminDashboard)/layout/SidebarContainer';
import HeaderContainer from '@/components/(adminDashboard)/layout/HeaderContainer';

const { Header, Sider, Content } = Layout;

const AdminLayout = ({children}: {children: ReactNode}) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ height: "100vh", overflow: "auto", }}>
        <SidebarContainer collapsed={collapsed}></SidebarContainer>
      <Layout>
       <HeaderContainer collapsed={collapsed} setCollapsed={setCollapsed}></HeaderContainer>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;