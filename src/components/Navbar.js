import React from 'react'
import { Col,Layout, Row, Space,Menu, Dropdown, Button} from "antd";
import {ExportOutlined} from "@ant-design/icons";

const { Header } = Layout;

const menu = (
    <Menu>
        <Menu.Item>
            <div className={'header_right_exit'}>
                <div>
                    <span>Admin</span>
                </div>
                <img src={require('../assets/img/icon_pay_logout.png').default}/>
            </div>
        </Menu.Item>
    </Menu>
);

const Navbar = () => {


    return(

        <Header className="header">

            <Row>
                <Col xs = {12} md = {12}  xxl={8} >



                    <div className="logo">
                        <img src={require('../assets/img/Logo.png').default} alt={'logo'}/>
                    </div>
                </Col>



                <Col xs = {12} md = {12}  xxl={16}  className={'navbar_right_side'}>
                    <Dropdown overlay={menu} placement="bottomLeft" arrow >
                        <Button className={'mobile_dropdown'}><img src={require('../assets/img/Path 41706.png').default} alt={'avatar'}/><span>Name Surname</span></Button>
                    </Dropdown>
                        <Space >


                            <div className={'header_right_name'}>
                                <span>Platform</span>
                            </div>
                            <div className={'header_right_user_info'}>
                                <img src={require('../assets/img/Path 41706.png').default} alt={'avatar'}/>
                                <span>Name</span>
                                <span>Surname</span>
                            </div>

                            <div className={'header_right_exit mobile_exit'}>
                                <div>
                                    <span>Admin</span>
                                </div>
                                <img src={require('../assets/img/icon_pay_logout.png').default}/>
                            </div>
                        </Space>

                </Col>
            </Row>



        </Header>

    )
}


export default Navbar;