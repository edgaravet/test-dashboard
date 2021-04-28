import React from 'react';
import {Row,Col} from 'antd';



const TotalCounts = () => {
    return(

        <Row>

            <Col span={6}>

                    <div className={'counts_content'}>
                        <h5>Merchant count</h5>
                        <span>3500</span>
                    </div>

            </Col>

            <Col span={6}>

                <div className={'counts_content count2'}>
                    <h5>Sites the payment system is added to</h5>
                    <span>3500</span>
                </div>
            </Col>


            <Col span={6}>

                <div className={'counts_content count3'}>
                    <h5>Total deposit count</h5>
                    <span>3500</span>
                </div>
            </Col>


            <Col span={6}>

                <div className={'counts_content count4'}>
                    <h5>Total withdrawal count</h5>
                    <span>3500</span>
                </div>
            </Col>

        </Row>
    )
}


export default TotalCounts;