import React from 'react';
import {Col, Layout, Row} from "antd";
import TopPaymentInfos from "./TopPaymentInfos";
import TopProcessInfo from "./TopProcessInfo";


const TopBar = () => {

    return (

        <Layout>
            <Row gutter={[16, 16]}>
                <Col xs={24} xxl={3} className="gutter-row gutter-box">
                    <div className={'top_bar_left_side'}>
                        <img src={require('../assets/img/Path 48709.png').default} alt={'skrill'}/>
                    </div>
                </Col>

                <Col xs={24} xxl={21} className="gutter-row gutter-box">
                    <div className={'top_bar_right_side'}>
                        <TopProcessInfo/>
                        <Col md={24} xxl={24}>

                            <TopPaymentInfos/>

                        </Col>
                    </div>
                </Col>

            </Row>
        </Layout>


    )

}

export default TopBar;
