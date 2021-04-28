import React from "react";
import './App.css';
import 'antd/dist/antd.css';
import {Layout, Menu, Breadcrumb} from 'antd';
import TopBar from "./components/TopBar";
import Tabs from './components/Tab';
import { AppleOutlined } from '@ant-design/icons';
import Navbar from "./components/Navbar";
import LeftNavbar from "./components/LeftNavbar";



const { Header, Content, Sider } = Layout;



function App() {
  return (
      <Layout>
          <Navbar/>
          <Layout>
            <LeftNavbar/>
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
