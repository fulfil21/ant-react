import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import LoginPopup from './LoginPopup';

import { Breadcrumb, Menu } from 'antd';
import {
  HomeOutlined,
  EditOutlined,
  UsergroupAddOutlined,
  UsergroupDeleteOutlined,
  UserOutlined,
} from '@ant-design/icons';


const SiteHeader = () => {
    const menu = (
        <Menu>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="">
            <UsergroupAddOutlined />회원가입
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="">
            <EditOutlined />회원정보수정
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="">
            <UsergroupDeleteOutlined />회원탈퇴
            </a>
          </Menu.Item>
        </Menu>
      );
    return (
    <>
    <Breadcrumb>
        <Breadcrumb.Item href="">
            <HomeOutlined />
        </Breadcrumb.Item>
        <Breadcrumb.Item overlay={menu}>
            <UserOutlined />
            <span>회원정보</span>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Log in</Breadcrumb.Item>
    </Breadcrumb>
     </>
    )
}

export default SiteHeader;
