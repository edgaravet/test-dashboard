import React from 'react'
import {Avatar, Col, Layout, Row, Space} from "antd";
import {UserOutlined} from "@ant-design/icons";
import {ExportOutlined} from "@ant-design/icons";

const { Header, Content, Sider } = Layout;
const Navbar = () => {
    return(
        <Header className="header">

            <Row>
                <Col xs={{span: 12}} xl = {{span:18}}>



                    <div className="logo">
                        <img src={require('../assets/img/Logo.png').default}/>
                    </div>
                </Col>
                <Col xs={{span: 12}} xl = {{span:6}}>
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
                                <div>
                                    <span>Admin</span>
                                </div>
                                <ExportOutlined />
                            </div>
                        </Space>
                    </Row>
                </Col>
            </Row>

        </Header>

    )
}


export default Navbar;