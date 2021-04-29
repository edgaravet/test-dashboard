import React,{useState} from 'react'
import {Breadcrumb, Col, DatePicker, Radio, Row} from "antd";
import DemoPie from "./DemoPie";
import {GlobalOutlined, PlusCircleOutlined} from "@ant-design/icons";

const { RangePicker } = DatePicker;
const RightChar = () => {
    const [value,setValue] = useState(1);
    const  handleChange = (e) =>  {
        setValue(e.target.value)
    }
    return(
        <div className={'char_date'}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Date</Breadcrumb.Item>
                <Breadcrumb.Item>Time Range</Breadcrumb.Item>

            </Breadcrumb>

            <Row>
                <Col span={'12'}>
                    <div className={'date_range'}>
                        <RangePicker />
                    </div>
                </Col>

                <Col span={'12'}>
                    <div className={'chars_radios'}>
                        <Radio.Group  onChange={handleChange} value={value}  >

                            <Radio.Button value={1}>24 hours</Radio.Button>
                            <Radio.Button value={2}>30 days</Radio.Button>
                            <Radio.Button value={3}>2 months</Radio.Button>
                        </Radio.Group>
                    </div>
                </Col>


            </Row>

            <div className={'char_content'}>
                <div className={'char_title'}>
                    <h4>Transactions Statuses Of Deposit And Withdrawal</h4>
                    <div className={'char_title_icons'}>
                        <PlusCircleOutlined />
                        <GlobalOutlined />
                    </div>

                </div>
                <DemoPie/>
            </div>

        </div>
    )
}


export default RightChar;