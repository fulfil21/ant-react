import React from 'react';
import { Route, Link, BrowserRouter, Switch } from "react-router-dom";
import 'antd/dist/antd.css';
import MainHome from '../features/main/MainHome'
import StockPage from '../features/StockManagement/StockPage';
import { Layout, Row, Col, Typography } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  CrownOutlined
} from '@ant-design/icons';
import SiteHeader from './SiteHeader';
import Linkmenu from './Linkmenu';

const { Header, Sider, Content, Footer } = Layout;
const { Title } = Typography;

class SelluvLayout extends React.Component {
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
          <Linkmenu />
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
          <Row justify="space-between">
            <Col span={1} >
              {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                  className: 'trigger',
                  onClick: this.toggle,
                })}
            </Col>
            <Col span={8} offset={1} style={{ paddingTop: 5}}>
              <Link to="/MainHome">
              <Title level={1}><CrownOutlined rotate={340}/> Selluv</Title>
              </Link>
            </Col>
            <Col span={7} offset={1}>
              <Switch>
                {/* <Route exact path="/" />
                <Route path="/StockPage" component={SiteHeader} /> */}
              </Switch>
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
            <Switch>
              <Route path="/StockPage" component={StockPage} />
              <Route path="/MainHome" component={MainHome} />
            </Switch>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Selluv ©2021 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default SelluvLayout;