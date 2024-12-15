import React, { Children } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu } from "antd";
import { DashboardOutlined, UserOutlined } from "@ant-design/icons";
import {
  Factory,
  MapPin,
  ChartGantt,
  RotateCcw,
  Warehouse,
  CircleDot,
  ServerCog,
  Blocks,
  FileChartLine,
} from "lucide-react";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuAdmin = [
    {
      key: "1",
      icon: <DashboardOutlined />,
      label: "Dashboard",
      onClick: () => navigate("/dashboard"),
    },
    {
      key: "2",
      icon: <Factory size={16} />,
      label: "Company Info",
      onClick: () => navigate("/company-info"),
    },
    {
      key: "3",
      icon: <MapPin size={16} />,
      label: "Location",
      onClick: () => navigate("/location"),
    },
    {
      key: "4",
      icon: <ChartGantt size={16} />,
      label: "Production Plan",
      onClick: () => navigate("/product-plan"),
    },
    {
      key: "5",
      icon: <CircleDot size={16} />,
      label: "Mold Master",
      onClick: () => navigate("/mold-master"),
    },
    {
      key: "6",
      icon: <ServerCog size={16} />,
      label: "Auto Storage",
      onClick: () => navigate("/auto-storage"),
    },
    {
      key: "7",
      icon: <Blocks size={16} />,
      label: "Mobile Shelf",
      onClick: () => navigate("/mobile-shelf"),
    },
    {
      key: "8",
      icon: <CircleDot size={16} />,
      label: "Mold Management",
      onClick: () => navigate("/management"),
    },
    {
      key: "9",
      icon: <RotateCcw size={16} />,
      label: "Relocate",
      onClick: () => navigate("/relocate"),
    },
    {
      key: "10",
      icon: <FileChartLine size={16} />,
      label: "Report",
      onClick: () => navigate("/report"),
    },
    {
      key: "11",
      icon: <UserOutlined />,
      label: "User",
      onClick: () => navigate("/user"),
    },
  ];

  const getSelectedKey = () => {
    const pathToKeyMap = {
      "/": "1",
      "/company-info": "2",
      "/company-info/warehouse": "2",
      "/company-info/place": "2",
      "/location": "3",
      "/location/location": "3",
      "/product-plan": "4",
      "/mold-master": "5",
      "/auto-storage": "6",
      "/auto-storage/monitor": "6",
      "/auto-storage/inbound": "6",
      "/auto-storage/outbound": "6",
      "/auto-storage/cycle-count": "6",
      "/auto-storage/adjust-stock": "6",
      "/auto-storage/refill": "6",
      "/mobile-shelf": "7",
      "/management": "8",
      "/relocate": "9",
      "/report": "10",
      "/user": "11",
    };
    return pathToKeyMap[location.pathname] || "1";
  };

  return (
    <>
      <Menu
        theme="dark"
        mode="vertical"
        selectedKeys={[getSelectedKey()]}
        items={menuAdmin}
      />
    </>
  );
};

export default Sidebar;
