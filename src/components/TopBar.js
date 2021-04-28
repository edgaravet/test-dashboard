import React from 'react';
import {Layout, Row,Col,Space} from "antd";

const  TopBar = () => {
    return(
      <>

        <Layout>
            <Row>
                <Col span = '4'>
                    <div className={'top_bar_left_side'}>
                     <img src={require('../assets/img/Path 48709.png').default}/>
                    </div>
                </Col>

                <Col span = '20'>
                  <div className={'top_bar_right_side'}>
                      <h2>Skrill</h2>
                    <Row>
                        <Col span = '12' >
                            <div className={'info_process'}>
                                <Space>
                                    <span>Processing Type Name</span>


                                    <span>Deposit / Withdrawal</span>

                                    <span>Payment System Description Will Be Here...</span>
                                </Space>
                            </div>
                        </Col>
                    </Row>
                      <div className={'info_process info_creator'}>
                          <Space>
                              <span>ID: 254896</span>


                              <span>System Type: Online</span>

                              <span>Market: Asia</span>
                              <span>Created Date: 14.07.2012</span>
                              <span>Created By: John Smith</span>
                              <span>fdsfdsf</span>
                              <span>Updated By: John Smith</span>

                          </Space>
                      </div>
                  </div>
                </Col>

            </Row>
        </Layout>


          </>
    )
}

export default TopBar;