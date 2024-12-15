import React from "react";
import Tables from "../../components/Tables";
import DropdownActionTable from "../../components/dropdown/DropdownActionTable";
import { Button, Input, message } from "antd";
import { Plus } from "lucide-react";
import ModalAddPlace from "../../components/modal/ModalAddPlace";
import "../../styles/global.css";
import { useState } from "react";
import MessageApi from "../../components/MessageApi";

const Place = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      width: "100px",
    },
    {
      title: "Warehouse ID",
      dataIndex: "warehouseId",
    },
    {
      title: "Point ID",
      dataIndex: "pointId",
    },
    {
      title: "Point Name",
      dataIndex: "pointName",
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
    },
    {
      title: "",
      dataIndex: "action",
      render: (_, record) => <DropdownActionTable record={record} />,
    },
  ];

  const dataSource = Array.from({ length: 500 }, (_, index) => ({
    key: index.toString(),
    id: index.toString(),
    warehouseId: `Warehouse ${index + 1}`,
    pointId: `Point ${index + 1}`,
    pointName: `Point ${index + 1}`,
    createdAt: "2024-11-27",
    action: <DropdownActionTable />,
  }));

  const filteredDataSource = dataSource.filter((item) =>
    Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(searchText.toLowerCase())
    )
  );

  return (
    <div className="table-container">
      <div className="table-header">
        <Input
          placeholder="Search"
          style={{ width: "300px" }}
          value={searchText}
          onChange={handleSearch}
        />
        <Button
          type="primary"
          icon={<Plus size={16} />}
          onClick={showModal}
          style={{ display: "flex", alignItems: "center", gap: "6px" }}
        >
          New Place
        </Button>
        <ModalAddPlace
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      </div>
      <div className="table-content">
        <Tables columns={columns} dataSource={filteredDataSource} />
      </div>
    </div>
  );
};

export default Place;
