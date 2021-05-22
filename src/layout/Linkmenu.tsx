import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Menu } from 'antd';
import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
  } from '@ant-design/icons';

const Linkmenu = withRouter(props => {
  const { location } = props;
  return (
    <Menu theme="dark" mode="inline" defaultSelectedKeys={['StockPage']} selectedKeys={[location.pathname]}>
      <Menu.Item key="MainHome" icon={<UserOutlined />}>
        <Link to="/MainHome">main </Link>
      </Menu.Item>
      <Menu.Item key="StockPage" icon={<VideoCameraOutlined />}>
        <Link to="/StockPage">품절관리</Link>
      </Menu.Item>
      <Menu.Item key="Purchase" icon={<UploadOutlined />}>
        <Link to="/Purchase">구매대행</Link>
      </Menu.Item>
    </Menu>
  );
});

export default Linkmenu;