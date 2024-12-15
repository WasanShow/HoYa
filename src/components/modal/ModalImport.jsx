


import { Modal, Form, Input, Divider, Row, Col, Upload, Button } from "antd";
import { Upload as LucideUpload, FileText, CheckCircle } from "lucide-react";  
import { useState } from "react";

const ModalImport = ({ isModalOpen, setIsModalOpen }) => {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);


  const handleFileChange = ({ fileList }) => {
    console.log("Uploaded Files:", fileList);
    setFileList(fileList);
  };

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        if (fileList.length === 0) {
          message.error("Please upload a file!");
          return;
        }
        console.log("Form Values:", values);
        console.log("Uploaded File List:", fileList);
        setIsModalOpen(false);
        form.resetFields();
        setFileList([]); 
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
    setFileList([]); 
  };

  return (
    <Modal
      centered
      title={
        <>
          <LucideUpload size={16} /> Import Mold Master Data  {/* Updated icon */}
        </>
      }
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      okText={
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <CheckCircle size={16} /> Import Data
        </div>
      }
      width={600}
      destroyOnClose={false}
      footer={[
        <Button key="cancel" onClick={handleCancel}>
          Cancel
        </Button>,
        <Button
          key="submit"
          type="primary"
          onClick={handleOk}
          disabled={fileList.length === 0}
        >
          Import Data
        </Button>,
      ]}
    >
      <Divider />
      <Form form={form} layout="vertical">
        {/* Input Warehouse ID */}
        <Form.Item
          label="Warehouse ID"
          name="WarehouseID"
          rules={[{ required: true, message: "Please input Warehouse ID!" }]}
        >
          <Input placeholder="Enter Warehouse ID" />
        </Form.Item>

        {/* Input Point ID */}
        <Form.Item
          label="Point ID"
          name="PointID"
          rules={[{ required: true, message: "Please input Point ID!" }]}
        >
          <Input placeholder="Enter Point ID" />
        </Form.Item>

        {/* Upload File Excel */}
        <Form.Item
          label="Upload File"
          name="FileUpload"
          rules={[{ required: true, message: "Please upload a file!" }]}
        >
          <Upload
            beforeUpload={() => false} 
            fileList={fileList}
            onChange={handleFileChange}
            accept=".xlsx,.csv" 
            onRemove={() => setFileList([])} 
          >
            <Button icon={<FileText size={16} />}>Click to Upload</Button>
          </Upload>
        </Form.Item>
      </Form>
      <Divider />
    </Modal>
  );
};

export default ModalImport;


