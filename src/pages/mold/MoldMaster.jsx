// import React from "react";
// import Tables from "../../components/Tables";
// import DropdownActionTable from "../../components/dropdown/DropdownActionTable";
// import { Button, Input } from "antd";
// import { Plus } from "lucide-react";
// import ModalAddFactory from "../../components/modal/ModalAddMoldMaster";
// import "../../styles/global.css";
// import { useState } from "react";

// const MolsMaster = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [searchText, setSearchText] = useState("");
//   const showModal = () => {
//     setIsModalOpen(true);
//   };

//   const handleSearch = (e) => {
//     setSearchText(e.target.value);
//   };

//   const columns = [
//     {
//       title: "ID",
//       dataIndex: "id",
//       width: "100px",
//     },
//     {
//       title: "Warehouse ID",
//       dataIndex: "warehouseID",
//     },
//     {
//       title: "Point ID",
//       dataIndex: "pointId",
//     },
//     {
//       title: "Mold Code",
//       dataIndex: "moldCode",
//     },
//     {
//       title: "Mold Name",
//       dataIndex: "moldName",
//     },
//     {
//       title: "Mold Status",
//       dataIndex: "moldStatus",
//     },
//     {
//       title: "More",
//       dataIndex: "action",
//       width: "100px",
//     },
//   ];
//   const dataSource = Array.from({ length: 500 }, (_, index) => ({
//     key: index.toString(),
//     id: index.toString(),
//     companyName: `Company ${index + 1}`,
//     factoryId: `FACTORY${index + 1}`,
//     factoryName: `Factory ${index + 1}`,
//     factoryBranch: `Branch ${index + 1}`,
//     createdAt: "2024-11-27",
//     action: <DropdownActionTable />,
//   }));

//   const filteredDataSource = dataSource.filter((item) =>
//     Object.values(item).some((value) =>
//       value.toString().toLowerCase().includes(searchText.toLowerCase())
//     )
//   );

//   return (
//     <>
//       <div className="table-container">
//         <div className="table-header">
//           <Input
//             placeholder="Search"
//             style={{ width: "300px" }}
//             value={searchText}
//             onChange={handleSearch}
//           />
//           <Button
//             type="primary"
//             icon={<Plus size={16} />}
//             onClick={showModal}
//             style={{ display: "flex", alignItems: "center", gap: "6px" }}
//           >
//             New Mold
//           </Button>
//           <ModalAddFactory
//             isModalOpen={isModalOpen}
//             setIsModalOpen={setIsModalOpen}
//           />
//         </div>
//         <div className="table-content">
//           <Tables columns={columns} dataSource={filteredDataSource} />
//         </div>
//       </div>
//     </>
//   );
// };

// export default MolsMaster;


import React, { useState } from "react";
import Tables from "../../components/Tables";
import DropdownActionTable from "../../components/dropdown/DropdownActionTable";
import { Button, Input } from "antd";
import { Plus, Upload } from "lucide-react";
import ModalAddFactory from "../../components/modal/ModalAddMoldMaster";
import ModalImport from "../../components/modal/ModalImport"; // Import ใหม่
import "../../styles/global.css";

const MolsMaster = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isImportModalOpen, setIsImportModalOpen] = useState(false); // State สำหรับ Import Modal
  const [searchText, setSearchText] = useState("");

  const showModal = () => setIsModalOpen(true);
  const showImportModal = () => setIsImportModalOpen(true);

  const handleSearch = (e) => setSearchText(e.target.value);

  const columns = [
    { title: "ID", dataIndex: "id", width: "100px" },
    { title: "Warehouse ID", dataIndex: "warehouseID" },
    { title: "Point ID", dataIndex: "pointId" },
    { title: "Mold Code", dataIndex: "moldCode" },
    { title: "Mold Name", dataIndex: "moldName" },
    { title: "Mold Status", dataIndex: "moldStatus" },
    { title: "More", dataIndex: "action", width: "100px" },
  ];

  const dataSource = Array.from({ length: 500 }, (_, index) => ({
    key: index.toString(),
    id: index.toString(),
    warehouseID: `WH${index + 1}`,
    pointId: `P${index + 1}`,
    moldCode: `Mold-${index + 1}`,
    moldName: `Name-${index + 1}`,
    moldStatus: "Active",
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
          <div style={{ display: "flex", gap: "10px" }}>
            <Button
              type="primary"
              icon={<Plus size={16} />}
              onClick={showModal}
            >
              New Mold
            </Button>
            <Button
              style={{
                backgroundColor: "#28a745",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                border: "none",
              }}
              icon={<Upload size={16} />}
              onClick={showImportModal}
            >
              Import
            </Button>
          </div>
          <ModalAddFactory
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />
          <ModalImport
            isModalOpen={isImportModalOpen}
            setIsModalOpen={setIsImportModalOpen}
          />
        </div>
        <div className="table-content">
          <Tables columns={columns} dataSource={filteredDataSource} />
        </div>
      </div>
    </>
  );
};

export default MolsMaster;
