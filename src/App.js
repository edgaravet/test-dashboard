import React from "react";
import './App.css';
import 'antd/dist/antd.css';
import {Layout, Menu, Breadcrumb, Row,Col,Avatar,Space} from 'antd';
import { UserOutlined, } from '@ant-design/icons';
import TopBar from "./components/TopBar";
import Tabs from './components/Tab';
import { AppleOutlined, AndroidOutlined } from '@ant-design/icons';
import LeftChar from "./components/LeftChar";



const { Header, Content, Sider } = Layout;



function App() {
  return (
      <Layout>
          <Header className="header">

          <Row>
              <Col span = '19'>
                  <div className="logo">
                      <img src={require('../src/assets/img/Logo.png').default}/>
                  </div>
              </Col>
              <Col span= '5'>
               <Row>
                   <Space>


                   <div className={'header_right_name'}>
                       <span>Platform</span>
                   </div>
                   <div className={'header_right_user_info'}>
                       <Avatar icon={<UserOutlined />} />
                       <span>Name</span>
                       <span>Surname</span>
                   </div>

                   <div className={'header_right_exit'}>
                       <span>Admin</span>
                        <img src={require('../src/assets/img/Rectangle 8639.png').default}/>
                   </div>
                   </Space>
               </Row>
              </Col>
          </Row>

          </Header>


          <Layout>
              <Sider width={200} className="site-layout-background">
                  <Menu
                      mode="inline"
                      defaultSelectedKeys={['1']}
                      defaultOpenKeys={['sub1']}
                      style={{ height: '100%', borderRight: 0 }}
                  >

                          <Menu.Item key="1" icon={<AppleOutlined />}>Dashboard</Menu.Item>
                          <Menu.Item key="2" icon={<AppleOutlined />}>Merchants</Menu.Item>
                          <Menu.Item key="3" icon={<AppleOutlined />}>Payment System</Menu.Item>
                          <Menu.Item key="4" icon={<AppleOutlined />}>Transactions</Menu.Item>
                          <Menu.Item key="5" icon={<AppleOutlined />}>User Management</Menu.Item>
                          <Menu.Item key="6" icon={<AppleOutlined />}>Activity Logs</Menu.Item>


                  </Menu>
              </Sider>
              <Layout style={{ padding: '0 24px 24px' }}>
                  <Breadcrumb style={{ margin: '16px 0' }}>
                      <Breadcrumb.Item>Home</Breadcrumb.Item>
                      <Breadcrumb.Item>Payment Sistem</Breadcrumb.Item>
                      <Breadcrumb.Item>Skrill</Breadcrumb.Item>
                  </Breadcrumb>
                  <Content
                      className="site-layout-background"
                      style={{
                          padding: 24,
                          margin: 0,
                          minHeight: 280,
                      }}
                  >
                      <TopBar/>
                      <div className={'body_content'}>
                          <Tabs/>

                      </div>
                  </Content>
              </Layout>
          </Layout>
      </Layout>
  );
}

export default App;
