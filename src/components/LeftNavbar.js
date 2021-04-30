import React, {useState} from "react";
import {Layout, Menu} from "antd";
import {MenuUnfoldOutlined,MenuFoldOutlined} from "@ant-design/icons";

const { Sider } = Layout;
const LeftNavbar = () => {
    const [collapsed,setCollapsed] = useState(false)
    const toggle = () => {

            setCollapsed(!collapsed)
    }
    return(
        <Sider theme={'light'} trigger={null} collapsible collapsed={collapsed}  width={200} className="site-layout-background custom_side">

            <Menu
                mode="inline"
                defaultSelectedKeys={['3']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
            >

                <Menu.Item key="1" icon={<img src={require('../assets/img/dashboard.svg').default} alt={'dashboard'}/>}>Dashboard</Menu.Item>
                <Menu.Item key="2" icon={<img src={require('../assets/img/share.svg').default} alt={'merchants'}/>}>Merchants</Menu.Item>
                <Menu.Item key="3" icon={<img src={require('../assets/img/credit-card (1).svg').default} alt={'payment'}/>}>Payment System</Menu.Item>
                <Menu.Item key="4" icon={<img src={require('../assets/img/money_transfer.svg').default} alt={'transactions'}/>}>Transactions</Menu.Item>
                <Menu.Item key="5" icon={<img src={require('../assets/img/User_management24x24.svg').default} alt={'management'}/>}>User Management</Menu.Item>
                <Menu.Item key="6" icon={<img src={require('../assets/img/shield.svg').default} alt={'activity'}/>}>Activity Logs</Menu.Item>


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