import React,{useState} from 'react'
import {Breadcrumb, Col, DatePicker, Radio, Row} from "antd";
import DemoPie from "./DemoPie";

const { RangePicker } = DatePicker;
const RightChar = () => {
    const [value,setValue] = useState(1);
    const  handleChange = (e) =>  {
        setValue(e.target.value)
    }
    return(
        <div>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Date</Breadcrumb.Item>
                <Breadcrumb.Item>Time Range</Breadcrumb.Item>

            </Breadcrumb>

            <Row>
                <Col span={'12'}>
                    <div>
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

            <DemoPie/>

        </div>
    )
}


export default RightChar;