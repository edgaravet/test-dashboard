import React from 'react';
import {Row,Col} from 'antd';



const TotalCounts = () => {
    return(

        <Row gutter={[16,16]}>

            <Col md={12} xxl={6} >

                    <div className={'counts_content'}>
                        <Row>
                            <Col span={'12'}>
                                <h5>Merchant count</h5>
                            </Col>

                            <Col span={'12'} >
                                <div className={'count_total'}><span>3500</span></div>
                            </Col>
                        </Row>


                    </div>

            </Col>

            <Col md={12} xxl={6} >

                <div className={'counts_content count2'}>
                    <Row>
                        <Col span={'12'}>
                            <h5>Sites the payment system is added to</h5>
                        </Col>

                        <Col span={'12'}>
                            <div className={'count_total'}><span>3500</span></div>
                        </Col>
                    </Row>
                </div>
            </Col>


            <Col md={12} xxl={6}>

                <div className={'counts_content count3'}>
                    <Row>
                        <Col span={'12'}>
                            <h5>Merchant count</h5>
                        </Col>

                        <Col span={'12'}>
                            <div className={'count_total'}><span>3500</span></div>
                        </Col>
                    </Row>
                </div>
            </Col>


            <Col md={12} xxl={6}>

                <div className={'counts_content count4'}>
                    <Row>
                        <Col span={'12'}>
                            <h5>Merchant count</h5>
                        </Col>

                        <Col span={'12'}>
                            <div className={'count_total'}><span>3500</span></div>
                        </Col>
                    </Row>
                </div>
            </Col>

        </Row>
    )
}


export default TotalCounts;