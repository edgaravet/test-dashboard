import React,{useState} from 'react'
import {Breadcrumb, DatePicker, Radio,Modal, Row,Col,Select,Form,Input,Checkbox,Button} from "antd";
import DemoLine from "./DemoLine";
import {GlobalOutlined,PlusCircleOutlined} from "@ant-design/icons";



const { RangePicker } = DatePicker;
const { Option } = Select;
const { TextArea } = Input;
const LeftChar = () => {
    const [value,setValue] = useState(1);

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
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

                            <Radio.Button value={1} >3 months</Radio.Button>
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
                       <PlusCircleOutlined onClick = {showModal} />
                       <GlobalOutlined />
                   </div>

               </div>
                <DemoLine />
            </div>

            <Modal centered width={400} className={'edit_modal'}  title="Edit" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>

                <Form layout="vertical">


                    <Form.Item label="Processing Type">
                        <Select


                            placeholder="select"
                            optionFilterProp="children"
                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                            filterSort={(optionA, optionB) =>
                                optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                            }
                        >
                            <Option value="1">Not Identified</Option>
                            <Option value="2">Closed</Option>
                            <Option value="3">Communicated</Option>
                            <Option value="4">Identified</Option>
                            <Option value="5">Resolved</Option>
                            <Option value="6">Cancelled</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item name="radio-group" label="Method Type">
                        <Radio.Group>
                            <Checkbox value="D" checked={true}>Deposit</Checkbox>
                            <Checkbox value="A">Withdrawal</Checkbox>

                        </Radio.Group>
                    </Form.Item>


                    <Form.Item label={'Description'}>
                        <TextArea rows={4} />
                    </Form.Item>

                   <Form.Item className={'modal_buttons'}>

                       <Button htmlType="button" onClick={handleCancel} >
                          Cancel
                       </Button>


                       <Button type="primary" onClick={handleOk}>
                           Save
                       </Button>

                   </Form.Item>

                </Form>


            </Modal>

        </div>
    )
}


export default LeftChar;