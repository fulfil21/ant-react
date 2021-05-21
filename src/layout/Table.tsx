import { Table, Badge, Menu, Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import Sample from "./sample.json";

const productData = Sample.content;
console.log(productData);

function NestedTable() {
  const columns = [
    { title: "상품(옵션)코드", dataIndex: "id", key: "id" },
    { title: "스토어", dataIndex: "mallName", key: "mallName" },
    { title: "판매자관리코드", dataIndex: "sellerProductCode", key: "sellerProductCode" },
    { title: "제품(옵션)명", dataIndex: "name", key: "name" },
    { title: "상품(옵션)재고", dataIndex: "stock", key: "stock" },
    { title: "결과", dataIndex: "regDate", key: "regDate" },
  ];

  const rowSelection = {};

  return (
    <Table
      rowSelection={rowSelection}
      className="components-table-demo-nested"
      columns={columns}
      dataSource={productData}
      childrenColumnName='options'
    />
  );
}

export default NestedTable;
