import React, {useState} from "react";
import {Layout, Menu} from "antd";
import {AppleOutlined,AppstoreOutlined,TransactionOutlined,MenuUnfoldOutlined,MenuFoldOutlined} from "@ant-design/icons";

const { Sider } = Layout;
const LeftNavbar = () => {
    const [collapsed,setCollapsed] = useState(false)
    const toggle = () => {

            setCollapsed(!collapsed)
    }
    return(
        <Sider trigger={null} collapsible collapsed={collapsed}  width={200} className="site-layout-background custom_side">

            <Menu
                mode="inline"
                defaultSelectedKeys={['3']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
            >

                <Menu.Item key="1" icon={<AppstoreOutlined />}>Dashboard</Menu.Item>
                <Menu.Item key="2" icon={<AppleOutlined />}>Merchants</Menu.Item>
                <Menu.Item key="3" icon={<AppleOutlined />}>Payment System</Menu.Item>
                <Menu.Item key="4" icon={<TransactionOutlined />}>Transactions</Menu.Item>
                <Menu.Item key="5" icon={<AppleOutlined />}>User Management</Menu.Item>
                <Menu.Item key="6" icon={<AppleOutlined />}>Activity Logs</Menu.Item>


                <div className={'side_bar_collapse_icon'}>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: toggle,
                    })}
                </div>

            </Menu>
        </Sider>
    )
}


export default LeftNavbar;