import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Menu } from 'antd';
import Icon from '@ant-design/icons';
import { ReactComponent as OutofStockSvg } from '../icon/out-of-stock.svg';
import { ReactComponent as OnlineShoppingSvg } from '../icon/online-shopping.svg';
import {
    HomeOutlined,
    ShoppingOutlined,
  } from '@ant-design/icons';

const SideMenu = withRouter(props => {
  const { location } = props;
  return (
    <Menu theme="dark" mode="inline" defaultSelectedKeys={['StockPage']} selectedKeys={[location.pathname]}>
      <Menu.Item key="MainHome" icon={<HomeOutlined />}>
        <Link to="/MainHome">Main </Link>
      </Menu.Item>
      <Menu.Item key="StockPage" icon={<Icon component={OutofStockSvg} />}>
        <Link to="/StockPage">품절관리</Link>
      </Menu.Item>
      <Menu.Item key="Purchase" icon={<Icon component={OnlineShoppingSvg}/>}>
        <Link to="/Purchase">구매대행</Link>
      </Menu.Item>
      <Menu.Item key="CounselComment" icon={<ShoppingOutlined />}>
        <Link to="/CounselComment">문의하기</Link>
      </Menu.Item>
    </Menu>
  );
});

export default SideMenu;