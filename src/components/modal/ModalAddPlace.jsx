import {
  Modal,
  Form,
  Input,
  Divider,
  Space,
  Button,
  Select,
  InputNumber,
  Row,
  Col,
} from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { MapPinned, Plus } from "lucide-react";
import MessageApi from "../MessageApi";

const ModalAddPlace = ({ isModalOpen, setIsModalOpen }) => {
  const [form] = Form.useForm();
  const { contextHolder, success } = MessageApi("Place added successfully");

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        console.log("Form Values:", values);
        setIsModalOpen(false);
        form.resetFields();
        success();
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
  };

  const styleForm = {
    overflowY: "auto",
    maxHeight: "400px",
    padding: "0 20px",
    scrollBehavior: "smooth",
    scrollbarWidth: "thin",
    scrollbarColor: "#909090 #fff",
  };

  return (
    <>
      {contextHolder}
      <Modal
        centered
        title={
          <>
            <MapPinned size={16} /> New Place
          </>
        }
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText={
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <Plus size={16} /> Add a new place
          </div>
        }
        width={600}
        destroyOnClose={false}
      >
        <Divider />
        <div style={styleForm}>
          <Form
            name="addPlace_dynamic_form"
            form={form}
            onFinish={handleOk}
            layout="vertical"
          >
            <strong
              style={{
                display: "flex",
                justifyContent: "start",
                marginBottom: "12px",
              }}
            >
              Warehouse Information
            </strong>
            {/* <Divider style={{ margin: "6px 0 12px 0" }} /> */}
            <Row gutter={16}>
              <Col span={6}>
                <Form.Item
                  // label="Warehouse ID"
                  name="WarehouseID"
                  rules={[
                    { required: true, message: "Please select a warehouse" },
                  ]}
                >
                  <Select placeholder="Select Warehouse">
                    <Select.Option value="1">1</Select.Option>
                    <Select.Option value="2">2</Select.Option>
                    <Select.Option value="3">3</Select.Option>
                    <Select.Option value="4">4</Select.Option>
                    <Select.Option value="5">5</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={18}>
                <Form.Item
                  // label="Warehouse Name"
                  name="WarehouseName"
                >
                  <Input placeholder="Warehouse Name" disabled />
                </Form.Item>
              </Col>
            </Row>
            <Divider style={{ margin: "6px 0 12px 0" }} />
            <strong
              style={{
                display: "flex",
                justifyContent: "start",
                marginBottom: "12px",
              }}
            >
              Point Information Maintainance
            </strong>
            <Row gutter={16}>
              <Col span={6}>
                <Form.Item
                  // label="Point ID"
                  name="PointID"
                  rules={[
                    { required: true, message: "Please enter a point ID" },
                  ]}
                >
                  <InputNumber
                    placeholder="Point ID"
                    style={{ width: "100%" }}
                  />
                </Form.Item>
              </Col>
              <Col span={18}>
                <Form.Item
                  // label="Point Name"
                  name="PointName"
                  rules={[
                    { required: true, message: "Please enter a point name" },
                  ]}
                >
                  <Input placeholder="Point Name" />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </div>
        <Divider />
      </Modal>
    </>
  );
};

export default ModalAddPlace;
