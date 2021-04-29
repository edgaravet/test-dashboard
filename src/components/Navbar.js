import React from 'react'
import {Avatar, Col,Layout, Row, Space} from "antd";
import {UserOutlined,ExportOutlined} from "@ant-design/icons";

const { Header } = Layout;
const Navbar = () => {
    return(
        <Header className="header">

            <Row>
                <Col  span={8}>



                    <div className="logo">
                        <img src={require('../assets/img/Logo.png').default} alt={'logo'}/>
                    </div>
                </Col>



                <Col span={16} className={'navbar_right_side'}>
                        <Space >


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

                </Col>
            </Row>

        </Header>

    )
}


export default Navbar;