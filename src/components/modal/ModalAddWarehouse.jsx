import {
  Modal,
  Form,
  Input,
  Divider,
  Space,
  Button,
  Select,
  InputNumber,
} from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Warehouse, Plus } from "lucide-react";
import MessageApi from "../MessageApi";

const ModalAddWarehouse = ({ isModalOpen, setIsModalOpen }) => {
  const [form] = Form.useForm();
  const { contextHolder, success } = MessageApi("Warehouse added successfully");

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
            <Warehouse size={16} /> New Warehouse
          </>
        }
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText={
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <Plus size={16} /> Add a new warehouse
          </div>
        }
        width={700}
        destroyOnClose={false}
      >
        <Divider />
        <div style={styleForm}>
          <Form
            name="addWarehouse_dynamic_form"
            form={form}
            onFinish={handleOk}
            layout="vertical"
          >
            <div style={{ display: "flex", gap: "10px" }}>
              <Form.Item
                label="Factory ID"
                name="FactoryID"
                style={{ width: "200px" }}
                rules={[
                  {
                    required: true,
                    message: "Missing factory ID",
                  },
                ]}
              >
                <Select placeholder="Select Factory">
                  <Select.Option value="1">1</Select.Option>
                  <Select.Option value="2">2</Select.Option>
                </Select>
              </Form.Item>

              <Form.Item
                label="Factory Name"
                name="FactoryName"
                initialValue="Factory 1"
                style={{ width: "100%" }}
              >
                <Input placeholder="Factory Name" disabled />
              </Form.Item>
            </div>
            <strong style={{ display: "flex", justifyContent: "center" }}>
              Warehouse Information
            </strong>
            <Divider style={{ margin: "6px 0 12px 0" }} />
            <Form.List
              name="warehouse"
              initialValue={[
                {
                  seqNo: "",
                  warehouseID: "",
                  warehouseName: "",
                  status: null,
                },
              ]}
            >
              {(fields, { add, remove }) => (
                <>
                  {fields.map(({ key, name, ...restField }, index) => (
                    <Space
                      key={key}
                      style={{
                        display: "flex",
                        marginBottom: 8,
                      }}
                      align="baseline"
                    >
                      <Form.Item
                        {...restField}
                        name={[name, "seqNo"]}
                        rules={[
                          {
                            required: true,
                            message: "Missing sequence number",
                          },
                        ]}
                      >
                        <InputNumber
                          style={{ width: "140px" }}
                          placeholder="Sequence Number"
                        />
                      </Form.Item>
                      <Form.Item
                        {...restField}
                        name={[name, "warehouseID"]}
                        rules={[
                          {
                            required: true,
                            message: "Missing warehouse ID",
                          },
                        ]}
                      >
                        <InputNumber
                          style={{ width: "120px" }}
                          placeholder="Warehouse ID"
                        />
                      </Form.Item>
                      <Form.Item
                        {...restField}
                        name={[name, "warehouseName"]}
                        rules={[
                          {
                            required: true,
                            message: "Missing warehouse name",
                          },
                        ]}
                      >
                        <Input
                          style={{ width: "200px" }}
                          placeholder="Warehouse Name"
                        />
                      </Form.Item>
                      <Form.Item
                        {...restField}
                        style={{ width: "100px" }}
                        name={[name, "status"]}
                        rules={[
                          {
                            required: true,
                            message: "Missing status",
                          },
                        ]}
                      >
                        <Select placeholder="Status">
                          <Select.Option value="Active">Active</Select.Option>
                          <Select.Option value="Inactive">
                            Inactive
                          </Select.Option>
                        </Select>
                      </Form.Item>
                      {index > 0 && (
                        <MinusCircleOutlined onClick={() => remove(name)} />
                      )}
                    </Space>
                  ))}
                  <Form.Item>
                    <Button
                      type="dashed"
                      onClick={() => add()}
                      block
                      icon={<PlusOutlined />}
                    >
                      Add warehouse
                    </Button>
                  </Form.Item>
                </>
              )}
            </Form.List>
          </Form>
        </div>
        <Divider />
      </Modal>
    </>
  );
};

export default ModalAddWarehouse;
