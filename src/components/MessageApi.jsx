import { message } from "antd";

const MessageApi = (MessageText) => {
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content: MessageText,
      duration: 2,
    });
  };
  return { contextHolder, success };
};

export default MessageApi;
