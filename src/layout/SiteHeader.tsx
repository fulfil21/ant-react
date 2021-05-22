import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import LoginPopup from './LoginPopup';
import AccountDrawer from './AccountDrawer';
import { Route, Link ,BrowserRouter, Switch } from 'react-router-dom';
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
            <AccountDrawer />
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
    <BrowserRouter>
        <Breadcrumb>
            <Breadcrumb.Item href="">
                <HomeOutlined />
            </Breadcrumb.Item>
            <Breadcrumb.Item overlay={menu}>
                <UserOutlined />
                <span>회원정보</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                <Switch>
                    <Route path="/LoginPopup" component={LoginPopup}/>
                    {/* <Route path="/Logout" component={Logout}/> */}
                    <LoginPopup />
                </Switch>
            </Breadcrumb.Item>
        </Breadcrumb>
    </BrowserRouter>
    </>
    )
}

export default SiteHeader;
