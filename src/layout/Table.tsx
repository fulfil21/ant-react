import { Table, Badge, Menu, Dropdown, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import Sample from './sample.json';

const menu = (
  <Menu>
    <Menu.Item>Action 1</Menu.Item>
    <Menu.Item>Action 2</Menu.Item>
  </Menu>
);
const productData = Sample.content
console.log(productData)

function NestedTable() {
  const expandedRowRender = () => {
    const columns = [
      { title: '등록일자', dataIndex: 'date', key: 'date' },
      { title: '옵션번호', dataIndex: 'name', key: 'name' },
      {
        title: '상태',
        key: 'state',
        render: () => (
          <span>
            <Badge status="success" />
            Finished
          </span>
        ),
      },
      { title: '재고', dataIndex: 'upgradeNum', key: 'upgradeNum' },
      {
        title: 'Action',
        dataIndex: 'operation',
        key: 'operation',
        render: () => (
          <Space size="middle">
            <a>Pause</a>
            <a>Stop</a>
            <Dropdown overlay={menu}>
              <a>
                More <DownOutlined />
              </a>
            </Dropdown>
          </Space>
        ),
      },
    ];

    const data = [];
    for (let i = 0; i < 3; ++i) {
      data.push({
        key: i,
        date: '2014-12-24 23:12:00',
        name: 'This is production name',
        upgradeNum: 'Upgraded: 56',
      });
    }
    return <Table columns={columns} dataSource={data} pagination={false} />;
  };

  const columns = [
    { title: '상품코드', dataIndex: 'productId', key: 'productId' },
    { title: '스토어', dataIndex: 'mallName', key: 'mallName' },
    { title: '판매자관리코드', dataIndex: 'sellerProductCode', key: 'sellerProductCode' },
    { title: '제품명', dataIndex: 'productName', key: 'productName' },
    { title: '재고', dataIndex: 'stock', key: 'stock' },
    { title: '결과', dataIndex: 'regDate', key: 'regDate' },
    { title: 'Action', key: 'operation', render: () => <a>Publish</a> },
  ];

    const data:any = []; 
    for (let i = 0; i < productData.length; ++i) {
    data.push({
        key: i,
        productId: productData[i].productId,
        mallName: productData[i].mallName,
        sellerProductCode: productData[i].sellerProductCode,
        productName: productData[i].productName,
        stock: productData[i].stock,
        regDate: productData[i].regDate,
        });
    }

const rowSelection = {

};

  return (
    <Table
        rowSelection={rowSelection}
        className="components-table-demo-nested"
        columns={columns}
        expandable={{ expandedRowRender }}
        dataSource={data}
    />
  );
}

export default NestedTable;