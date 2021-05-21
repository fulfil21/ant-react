import React from 'react';
import ReactDOM  from 'react-dom';
import 'antd/dist/antd.css';
import SearchInput from './SearchInput'
import NestedTable from './Table';
import { Layout, Menu, PageHeader, Row, Col } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import SiteHeader from './SiteHeader';

const { Header, Sider, Content, Footer } = Layout;

class SiderDemo extends React.Component {
  state = {
    collapsed: true,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              nav 1
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              nav 2
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              nav 3
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
          <Row justify="space-between">
            <Col span={1}>
              {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                  className: 'trigger',
                  onClick: this.toggle,
                })}
              </Col>
            <Col span={6} style={{ paddingTop: 10 , paddingRight: 40 , textAlign: 'right'}}>
              <SiteHeader />
            </Col>
          </Row> 
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 520,
            }}
          >
            <SearchInput />
            <NestedTable  />
          </Content>
          <Footer>footer</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default SiderDemo;