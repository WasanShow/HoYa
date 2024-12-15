import { useState } from "react";
import { Table } from "antd";
import { createStyles } from "antd-style";

const useStyle = createStyles(({ css, token }) => {
  const { antCls } = token;
  return {
    customTable: css`
      ${antCls}-table {
        ${antCls}-table-container {
          ${antCls}-table-body,
          ${antCls}-table-content {
            scrollbar-width: thin;
            scrollbar-color: #eaeaea transparent;
            scrollbar-gutter: stable;
          }
        }
      }
    `,
  };
});

const Tables = ({ columns, dataSource }) => {
  const { styles } = useStyle();
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [Table.SELECTION_ALL, Table.SELECTION_NONE],
  };

  return (
    <Table
      className={styles.customTable}
      rowSelection={rowSelection}
      columns={columns}
      dataSource={dataSource}
      pagination={{
        showSizeChanger: true,
        showQuickJumper: true,
        pageSizeOptions: ["5", "10", "20", "50", "100"],
        showTotal: (total, range) =>
          `Showing ${range[0]}-${range[1]} of ${total} items`,
      }}
      scroll={{
        y: window.innerHeight * 0.5,
      }}
    />
  );
};
export default Tables;
