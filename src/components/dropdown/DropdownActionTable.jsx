import React from "react";
import {
  EllipsisOutlined,
  DeleteOutlined,
  EditOutlined,
  AlignLeftOutlined,
} from "@ant-design/icons";
import { Dropdown, Space } from "antd";
const items = [
  {
    label: (
      <a style={{ display: "flex", alignItems: "center", gap: "14px" }}>
        <AlignLeftOutlined /> <span>Detail</span>
      </a>
    ),
    key: "0",
  },
  {
    type: "divider",
  },
  {
    label: (
      <a style={{ display: "flex", alignItems: "center", gap: "14px" }}>
        <EditOutlined /> <span>Edit</span>
      </a>
    ),
    key: "1",
  },
  {
    label: (
      <a
        style={{
          display: "flex",
          alignItems: "center",
          gap: "14px",
          color: "#DA251C",
        }}
      >
        <DeleteOutlined /> <span>Delete</span>
      </a>
    ),
    key: "3",
  },
];
const DropdownActionTable = () => (
  <Dropdown
    menu={{
      items,
    }}
    trigger={["click"]}
  >
    <a onClick={(e) => e.preventDefault()} style={{ color: "#000" }}>
      <Space>
        <EllipsisOutlined style={{ fontSize: "20px" }} />
      </Space>
    </a>
  </Dropdown>
);
export default DropdownActionTable;
