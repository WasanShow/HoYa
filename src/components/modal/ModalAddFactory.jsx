import { Modal, Form, Input, Divider, Row, Col } from "antd";
import { Factory, Plus } from "lucide-react";

const ModalAddFactory = ({ isModalOpen, setIsModalOpen }) => {
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

  const renderFormItem = (label, name, placeholder, rules) => (
    <Form.Item label={label} name={name} rules={rules}>
      <Input placeholder={placeholder} />
    </Form.Item>
  );

  const styleForm = {
    overflowY: "auto",
    maxHeight: "400px",
    padding: "0 20px",
    scrollBehavior: "smooth",
    scrollbarWidth: "thin",
    scrollbarColor: "#909090 #fff",
  };

  return (
    <Modal
      centered
      title={
        <>
          <Factory size={16} /> New Factory
        </>
      }
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      okText={
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <Plus size={16} /> Add a new factory
        </div>
      }
      width={600}
      destroyOnClose={false}
    >
      <Divider />
      <div style={styleForm}>
        <Form
          form={form}
          layout="vertical"
          initialValues={{
            Password: "123456",
            Role: "Admin",
          }}
        >
          <Row gutter={[16]}>
            <Col span={8}>
              {renderFormItem("Company ID", "CompanyID", "AIT01", [
                { required: true, message: "Please input the Company ID!" },
              ])}
            </Col>
            <Col span={16}>
              {renderFormItem(
                "Company Branch",
                "CompanyBranch",
                "Pathumthani",
                [
                  {
                    required: true,
                    message: "Please input the Company Branch!",
                  },
                ]
              )}
            </Col>
          </Row>
          {renderFormItem(
            "Company Name",
            "CompanyName",
            "A.I. TECHNOLOGY CO., LTD.",
            [{ required: true, message: "Please input the Company Name!" }]
          )}
          <Row gutter={[16]}>
            <Col span={8}>
              {renderFormItem("Factory ID", "FactoryID", "AIT01", [
                { required: true, message: "Please input the Factory ID!" },
              ])}
            </Col>
            <Col span={16}>
              {renderFormItem(
                "Factory Branch",
                "FactoryBranch",
                "Pathumthani",
                [
                  {
                    required: true,
                    message: "Please input the Factory Branch!",
                  },
                ]
              )}
            </Col>
          </Row>
          {renderFormItem(
            "Factory Name",
            "FactoryName",
            "A.I. TECHNOLOGY CO., LTD.",
            [{ required: true, message: "Please input the Factory Name!" }]
          )}
          {renderFormItem(
            "Address",
            "Address",
            "56 Moo 9 Ladlumkaew-Pathumthani Rd.",
            [{ required: true, message: "Please input the Address!" }]
          )}
          <Row gutter={[16]}>
            <Col span={12}>
              {renderFormItem("Sub District", "SubDistrict", "Kubangluang", [
                { required: true, message: "Please input the Sub District!" },
              ])}
            </Col>
            <Col span={12}>
              {renderFormItem("District", "District", "Ladlumkaew", [
                { required: true, message: "Please input the District!" },
              ])}
            </Col>
          </Row>
          <Row gutter={[16]}>
            <Col span={12}>
              {renderFormItem("Province", "Province", "Pathumthani", [
                { required: true, message: "Please input the Province!" },
              ])}
            </Col>
            <Col span={12}>
              {renderFormItem("Postcode", "Postcode", "12140", [
                { required: true, message: "Please input the Postcode!" },
              ])}
            </Col>
          </Row>
          <Row gutter={[16]}>
            <Col span={12}>
              {renderFormItem("Tel", "Tel", "02-999-9999", [
                { required: true, message: "Please input the Tel!" },
              ])}
            </Col>
            <Col span={12}>
              {renderFormItem("Email", "Email", "info@aitech.co.th", [
                { required: true, message: "Please input the Email!" },
                { type: "email", message: "Please input the valid Email!" },
              ])}
            </Col>
          </Row>
        </Form>
      </div>
      <Divider />
    </Modal>
  );
};

export default ModalAddFactory;
