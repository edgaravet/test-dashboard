import React,{useState} from 'react'
import {Breadcrumb, DatePicker, Radio, Row,Col} from "antd";
import DemoLine from "./DemoLine";
import {GlobalOutlined,PlusCircleOutlined} from "@ant-design/icons";



const { RangePicker } = DatePicker;

const LeftChar = () => {
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

                            <Radio.Button value={1}>3 months</Radio.Button>
                            <Radio.Button value={2}>6 months</Radio.Button>
                            <Radio.Button value={3}>8 months</Radio.Button>
                        </Radio.Group>
                    </div>
                </Col>
            </Row>

            <div className={'char_content'}>
               <div className={'char_title'}>
                   <h4>The Growth Rate Of Deposit And Withdrawal Transactions</h4>
                   <div className={'char_title_icons'}>
                       <PlusCircleOutlined />
                       <GlobalOutlined />
                   </div>

               </div>
                <DemoLine/>
            </div>


        </div>
    )
}


export default LeftChar;