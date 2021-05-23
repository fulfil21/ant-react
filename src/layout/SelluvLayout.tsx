import React from 'react';
import { Route, Link, Switch } from "react-router-dom";
import 'antd/dist/antd.css';
import MainHome from '../features/main/MainHome'
import StockPage from '../features/StockManagement/StockPage';
import { Layout, Row, Col } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import HeaderLink from './HeaderLink';
import SideMenu from './SideMenu';
import CounselComment from '../features/Counsel/CounselComment';
import { MainTitle, SubtitleMain, SubtitleStock, SubtitlePurchase } from './HeaderTitle'

const { Header, Sider, Content, Footer } = Layout;

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
          <SideMenu />
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
          <Row justify="start">
            <Col span={1} >
              {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                  className: 'trigger',
                  onClick: this.toggle,
                })}
            </Col>
            <Col span={4} offset={0} style={{ paddingTop: 6, paddingLeft: 20}}>
              <Link to="/MainHome">
                <MainTitle />
              </Link>
            </Col>
            <Col span={1} offset={0} style={{ paddingTop:0 , marginLeft : 0}}>
              <Switch>
                <Route exact path="/MainHome" component={SubtitleMain} />
                <Route path="/StockPage" component={SubtitleStock} />
                <Route path="/Purchase" component={SubtitlePurchase} />
              </Switch>
            </Col>
            <Col span={18} style={{ paddingTop: 10 , paddingRight:20 , textAlign: 'right'}}>
              <HeaderLink />
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
              <Route exact path="/" component={StockPage}/>
              <Route path="/StockPage" component={StockPage} />
              <Route path="/MainHome" component={MainHome} />
              <Route path="/CounselComment" component={CounselComment} />
            </Switch>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Selluv ©2021 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default SelluvLayout;