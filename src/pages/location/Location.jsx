import Tables from "../../components/Tables";
import DropdownActionTable from "../../components/dropdown/DropdownActionTable";
import { Button, Input } from "antd";
import { Plus } from "lucide-react";
import ModalAddLocation from "../../components/modal/ModalAddLocation";
import "../../styles/global.css";
import { useState } from "react";

const Location = () => {
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
      title: "Warehouse ID  ",
      dataIndex: "warehouseID",
    },
    {
      title: "Point ID",
      dataIndex: "pointID",
    },
    {
      title: "Location",
      dataIndex: "location",
    },
    {
      title: "Category",
      dataIndex: "category",
    },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "",
      dataIndex: "action",
      width: "100px",
    },
  ];
  const dataSource = Array.from({ length: 500 }, (_, index) => ({
    key: index.toString(),
    id: index.toString(),
    warehouseID: `Warehouse ${index + 1}`,
    pointID: `Point ${index + 1}`,
    location: `Location ${index + 1}`,
    category: `Category ${index + 1}`,
    status: `Status ${index + 1}`,
    action: <DropdownActionTable />,
  }));

  const filteredDataSource = dataSource.filter((item) =>
    Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(searchText.toLowerCase())
    )
  );

  return (
    <>
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
            New Location
          </Button>
          <ModalAddLocation
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />
        </div>
        <div className="table-content">
          <Tables columns={columns} dataSource={filteredDataSource} />
        </div>
      </div>
    </>
  );
};

export default Location;
