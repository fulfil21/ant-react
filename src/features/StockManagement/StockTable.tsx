import React, { useState } from 'react';
import { Table, BackTop, Input, Button, Space } from "antd";
import { SearchOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";
import Sample from "./sample.json";

const productData = Sample.content;
console.log(productData);
interface Props {
  dataIndex: string;
  setSelectedKeys: any;
  selectedKeys: any;
  confirm: any;
  clearFilters: any;
}
const StockTable = () => {
 
  const [searchText, setsearchText] = useState('');
  const [searchedColumn, setsearchedColumn] = useState('');

  const getColumnSearchProps = (dataIndex: string) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }: Props) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setsearchText(selectedKeys[0]);
              setsearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: any) => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value: string, record: { [x: string]: { toString: () => string; }; }) =>
      record[dataIndex]
        ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
        : '',
  });

  const handleSearch = (selectedKeys: React.SetStateAction<string>[], confirm: () => void, dataIndex: React.SetStateAction<string>) => {
    confirm();
    setsearchText(selectedKeys[0]);
    setsearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setsearchText('');
  };
  
  const columns: any = [
    { title: "상품(옵션)코드", dataIndex: "id", key: "id", ...getColumnSearchProps("id") },
    { title: "스토어", dataIndex: "mallName", key: "mallName", ...getColumnSearchProps("mallName") },
    { title: "판매자관리코드", dataIndex: "sellerProductCode", key: "sellerProductCode", ...getColumnSearchProps("sellerProductCode") },
    { title: "제품(옵션)명", dataIndex: "name", key: "name", ...getColumnSearchProps("name") },
    { title: "상품(옵션)재고", dataIndex: "stock", key: "stock", ...getColumnSearchProps("stock") },
    { title: "결과", dataIndex: "regDate", key: "regDate", ...getColumnSearchProps("regDate") },
  ];

  const rowSelection = {};
  const itemTotal: any = productData.length
  return (
    <>
    <BackTop />
    <Table
      rowKey='id'
      rowSelection={rowSelection}
      className="components-table-demo-nested"
      columns={columns}
      dataSource={productData}
      childrenColumnName='options'
      style={{ paddingTop: 20 }}
      pagination={{ 
        total: itemTotal , 
        showTotal: total => `Total ${total} items`,
        pageSizeOptions: ['10', '20', '50', '100', itemTotal],
        showSizeChanger : true, 
      }}
    />
    </>
  );
}

export default StockTable;
