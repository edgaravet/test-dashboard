import React from 'react';
import {Layout, Row,Col,Space} from "antd";
import {EditOutlined, SettingOutlined,ContactsOutlined,WifiOutlined,UserOutlined} from "@ant-design/icons";

const  TopBar = () => {
    return(
      <>

        <Layout>
            <Row gutter={[16,16]}>
                <Col md={24} xxl={3} className="gutter-row gutter-box">
                    <div className={'top_bar_left_side'}>
                     <img src={require('../assets/img/Path 48709.png').default} alt={'skrill'}/>
                    </div>
                </Col>

                <Col md={24} xxl={21} className="gutter-row gutter-box">
                  <div className={'top_bar_right_side'}>
                      <h2>Skrill</h2>

                        <Col  md={24} xxl={24}>

                                <Space>
                                    <div className={'info_process'}>
                                        <span>Processing Type Name</span>


                                        <span>Deposit / Withdrawal</span>

                                        <span className={'first_info'}>Payment System Description Will Be Here...</span>
                                        <EditOutlined />
                                    </div>

                                </Space>

                        </Col>

                     <Col md={24} xxl={24}>
                         <div className={'info_process info_creator'}>




                                    <Space>
                                        <WifiOutlined /><h4>System Type:<span> Online</span></h4>
                                        <SettingOutlined /><h4>Market:<span> Asia</span></h4>
                                        <SettingOutlined /><h4>Created Date:<span>14.07.2012</span></h4>
                                        <UserOutlined /><h4>Created By: <span>John Smith</span></h4>
                                        <SettingOutlined /><h4>Last Updated:  <span>14.07.2012</span></h4>
                                        <UserOutlined /><h4>Updated By:<span>John Smith</span></h4>

                                    </Space>
                         </div>
                     </Col>
                  </div>
                </Col>

            </Row>
        </Layout>


          </>
    )
}

export default TopBar;