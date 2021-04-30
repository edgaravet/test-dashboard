import React from "react";
import {Col, Space} from "antd";
import {EditOutlined} from "@ant-design/icons";


const TopProcessInfo = () => {
    return(
        <>
            <h2>Skrill</h2>

            <Col md={24} xxl={24}>

                <Space>
                    <div className={'info_process'}>
                        <span>Processing Type Name</span>


                        <span>Deposit / Withdrawal</span>

                        <span className={'first_info'}>Payment System Description Will Be Here...</span>
                        <EditOutlined/>
                    </div>

                </Space>

            </Col>

            </>
    )
}

export default TopProcessInfo;