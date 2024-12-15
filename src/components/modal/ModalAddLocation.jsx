import {
  Modal,
  Form,
  Input,
  Divider,
  Row,
  Col,
  Select,
  ConfigProvider,
} from "antd";
import { MapPin, Plus } from "lucide-react";

const ModalAddLocation = ({ isModalOpen, setIsModalOpen }) => {
  const [form] = Form.useForm();

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        console.log("Form Values:", values);
        setIsModalOpen(false);
        form.resetFields();
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
  };

  const renderFormItem = (label, name, placeholder, rules, disabled) => (
    <Form.Item label={label} name={name} rules={rules}>
      <Input placeholder={placeholder} disabled={disabled} />
    </Form.Item>
  );

  const styleForm = {
    overflowY: "auto",
    maxHeight: "400px",
    padding: "20px",
    scrollBehavior: "smooth",
    scrollbarWidth: "thin",
    scrollbarColor: "#909090 #fff",
  };

  const styleGroup = {
    borderColor: "#5099FF",
    borderWidth: "1px",
    borderStyle: "solid",
    borderRadius: "5px",
    padding: "20px 16px 0 16px",
    width: "100%",
    position: "relative",
  };

  const styleTitle = {
    position: "absolute",
    marginTop: "-34px",
    backgroundColor: "#fff",
    padding: "0 10px",
    color: "#5099FF",
  };

  return (
    <Modal
      centered
      title={
        <>
          <MapPin size={16} /> New Location
        </>
      }
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      okText={
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <Plus size={16} /> Add a new location
        </div>
      }
      width={900}
      destroyOnClose={false}
    >
      {/* <Divider /> */}
      <ConfigProvider theme={{ token: { colorPrimary: "#5099FF" } }}>
        <div style={styleForm}>
          <Form form={form} layout="vertical">
            <Row gutter={[16, 16]}>
              <Row gutter={16} style={styleGroup}>
                <strong style={styleTitle}>Warehouse Information</strong>
                <Col span={5}>
                  <Form.Item label="Warehouse ID" name="WarehouseID">
                    <Select placeholder="Select ID">
                      <Select.Option value="1">1</Select.Option>
                      <Select.Option value="2">2</Select.Option>
                      <Select.Option value="3">3</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={7}>
                  {renderFormItem(
                    " ",
                    "WarehouseName",
                    "Warehouse 1",
                    [],
                    true
                  )}
                </Col>
                <Col span={5}>
                  <Form.Item label="Point ID" name="PointID">
                    <Select placeholder="Select ID">
                      <Select.Option value="1">1</Select.Option>
                      <Select.Option value="2">2</Select.Option>
                      <Select.Option value="3">3</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={7}>
                  {renderFormItem(" ", "PointName", "Point 1", [], true)}
                </Col>
              </Row>

              <Row
                gutter={[16, 16]}
                style={{
                  width: "100%",
                  display: "grid",
                  gridTemplateColumns: "1.2fr .8fr",
                  gap: "16px",
                }}
              >
                <Col span={24} style={styleGroup}>
                  <strong style={styleTitle}>Location General</strong>
                  <Row gutter={[12]}>
                    <Col span={12}>
                      <Form.Item label="Location ID" name="LocationID">
                        <Input placeholder="Location ID" />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item label="Category" name="Category">
                        <Select placeholder="Select Category">
                          <Select.Option value="1">1</Select.Option>
                          <Select.Option value="2">2</Select.Option>
                          <Select.Option value="3">3</Select.Option>
                        </Select>
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={[12]}>
                    <Col span={12}>
                      <Form.Item
                        label="Physical Description"
                        name="PhysicalDescription"
                      >
                        <Input placeholder="Physical Description" />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item label="Status" name="Status">
                        <Select placeholder="Select Status">
                          <Select.Option value="1">Active</Select.Option>
                          <Select.Option value="0">Deactive</Select.Option>
                        </Select>
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={[12]}>
                    <Col span={12}>
                      <Form.Item label="Position NO" name="PositionNO">
                        <Input placeholder="Position NO" />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item label="High" name="High">
                        <Input placeholder="High" />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={[12]}>
                    <Col span={12}>
                      <Form.Item
                        label="Max Weight for Location"
                        name="MaxWeightForLocation"
                      >
                        <Input placeholder="Max Weight for Location" />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item label="Used %" name="Used">
                        <Input placeholder="Used %" />
                      </Form.Item>
                    </Col>
                  </Row>
                </Col>

                <Col span={24} style={styleGroup}>
                  <strong style={styleTitle}>Location Control</strong>
                  <Col span={24}>
                    <Row>
                      <Form.Item
                        label="Select SEQ"
                        name="SelectSEQ"
                        style={{ width: "100%" }}
                      >
                        <Input placeholder="Select SEQ" />
                      </Form.Item>
                    </Row>
                    <Row>
                      <Form.Item
                        label="Replace SEQ"
                        name="ReplaceSEQ"
                        style={{ width: "100%" }}
                      >
                        <Input placeholder="Replace SEQ" />
                      </Form.Item>
                    </Row>
                    <Row>
                      <Form.Item
                        label="Stocker"
                        name="Stocker"
                        style={{ width: "100%" }}
                      >
                        <Select placeholder="Select Stocker">
                          <Select.Option value="1">1</Select.Option>
                          <Select.Option value="2">2</Select.Option>
                          <Select.Option value="3">3</Select.Option>
                        </Select>
                      </Form.Item>
                    </Row>
                    <Row>
                      <Form.Item
                        label="Handing Method"
                        name="HandingMethod"
                        style={{ width: "100%" }}
                      >
                        <Select placeholder="Select Handing Method">
                          <Select.Option value="1">1</Select.Option>
                          <Select.Option value="2">2</Select.Option>
                          <Select.Option value="3">3</Select.Option>
                        </Select>
                      </Form.Item>
                    </Row>
                  </Col>
                </Col>
              </Row>

              <Row
                gutter={[16, 16]}
                style={{
                  width: "100%",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  gap: "16px",
                }}
              >
                <Col span={24} style={styleGroup}>
                  <strong style={styleTitle}>Location Mapping</strong>
                  <Row>
                    <Col span={24}>
                      <Form.Item label="SQL/AISLE" name="SQLAISLE">
                        <Input placeholder="SQL/AISLE" />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={24}>
                      <Form.Item label="Column/Rack" name="ColumnRack">
                        <Input placeholder="Column/Rack" />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={24}>
                      <Form.Item label="Level/Layer" name="LevelLayer">
                        <Input placeholder="Level/Layer" />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={24}>
                      <Form.Item label="Position" name="Position">
                        <Input placeholder="Position" />
                      </Form.Item>
                    </Col>
                  </Row>
                </Col>
                <Col span={24} style={styleGroup}>
                  <strong style={styleTitle}>Location Distance</strong>
                  <Row>
                    <Col span={24}>
                      <Form.Item label="X-Coordinate" name="XCoordinate">
                        <Input placeholder="X-Coordinate" />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={24}>
                      <Form.Item label="Y-Coordinate" name="YCoordinate">
                        <Input placeholder="Y-Coordinate" />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={24}>
                      <Form.Item label="Z-Coordinate" name="ZCoordinate">
                        <Input placeholder="Z-Coordinate" />
                      </Form.Item>
                    </Col>
                  </Row>
                </Col>
                <Col span={24} style={styleGroup}>
                  <strong style={styleTitle}>Stack Dimension</strong>
                  <Row>
                    <Col span={24}>
                      <Form.Item label="Stack Depth" name="StackDepth">
                        <Input placeholder="Stack Depth" />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={24}>
                      <Form.Item label="Stack Width" name="StackWidth">
                        <Input placeholder="Stack Width" />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={24}>
                      <Form.Item label="Stack Limit" name="StackLimit">
                        <Input placeholder="Stack Limit" />
                      </Form.Item>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row
                gutter={[16, 16]}
                style={{
                  width: "100%",
                }}
              >
                <div style={styleGroup}>
                  <Form.Item label="Location URL" name="LocationURL">
                    <Input placeholder="Location URL" />
                  </Form.Item>
                </div>
              </Row>
            </Row>
          </Form>
        </div>
      </ConfigProvider>
      <Divider />
    </Modal>
  );
};

export default ModalAddLocation;
