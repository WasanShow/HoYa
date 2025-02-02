import { useState } from "react";
import "../styles/admin.css";
import Logo from "../assets/img/logo.jpg";
import Menu from "../components/Menu";
import TabsPage from "../components/TabsPage";
import DropdownActionProfile from "../components/dropdown/DropdownActionProfile";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout, theme, ConfigProvider } from "antd";
const { Header, Sider, Content } = Layout;

const AdminLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <ConfigProvider
      theme={{
        token: { colorBgContainer, borderRadiusLG, colorPrimary: "#DA251C" },
      }}
    >
      <div className="admin-layout">
        <Layout style={{ height: "100%" }}>
          <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="logo-sidebar">
              <img src={Logo} alt="logo" />
            </div>
            <Menu style={{ zIndex: 10 }} />
          </Sider>
          <Layout>
            <Header
              style={{
                background: colorBgContainer,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 24px 0 0",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  gap: "16px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Button
                    type="text"
                    icon={
                      collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
                    }
                    onClick={() => setCollapsed(!collapsed)}
                    style={{
                      fontSize: "16px",
                      width: 64,
                      height: 64,
                    }}
                  />
                </div>
                <TabsPage />
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <DropdownActionProfile />
              </div>
            </Header>
            <Content
              style={{
                margin: "24px 16px",
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
      </div>
    </ConfigProvider>
  );
};

export default AdminLayout;
