import 'antd/dist/antd.css';
import LoginPopup from '../features/Membership/LoginPopup';
import AccountDrawer from '../features/Membership/AccountDrawer';
import { Route, Link , Switch } from 'react-router-dom';
import { Breadcrumb, Menu } from 'antd';
import {
  HomeOutlined,
  EditOutlined,
  UsergroupDeleteOutlined,
  UserOutlined,
} from '@ant-design/icons';


const HeaderLink = () => {
    const menu = (
        <Menu>
          <Menu.Item>
            <AccountDrawer />
          </Menu.Item>
          <Menu.Item>
            <EditOutlined />회원정보수정
          </Menu.Item>
          <Menu.Item>
            <UsergroupDeleteOutlined />회원탈퇴
          </Menu.Item>
        </Menu>
      );
    return (
    <>
    <Breadcrumb>
        <Breadcrumb.Item>
            <Link to="/MainHome"><HomeOutlined /></Link>
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
    </>
    )
}

export default HeaderLink;
