import React,{useState} from 'react'
import {Breadcrumb, DatePicker, Radio, Tooltip, Button , Row,Col,} from "antd";
import DemoLine from "./DemoLine";
import EditModal from "./EditModal";
import {connect} from "react-redux";
import {showModal} from "../redux/actions";




const { RangePicker } = DatePicker;

const LeftChar = (props) => {
    const [value,setValue] = useState(1);

   const  handleChange = (e) =>  {
        setValue(e.target.value)
    }


    const handleOpenModal = () => {
    props.dispatch(showModal())
    }

    return(
        <div className={'char_date'}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Date</Breadcrumb.Item>
                <Breadcrumb.Item>Time Range</Breadcrumb.Item>

            </Breadcrumb>
            <Row>
                <Col  xs={24} xl={12}>
                    <div className={'date_range'}>
                        <RangePicker />
                    </div>
                </Col>

                <Col xs={24} xl={12}>
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
                       <Tooltip overlayInnerStyle={{borderRadius:7}} placement="top" title={'Compare'} className={'process_tooltip'}>
                           <Button><i className="fal fa-plus-circle curs_pointer" onClick = {handleOpenModal} /></Button>
                       </Tooltip>

                       <Tooltip overlayInnerStyle={{borderRadius:7}} placement="top" title={'Export'} className={'process_tooltip'}>
                           <Button><i className="fas fa-share-square"/></Button>
                       </Tooltip>


                   </div>

               </div>
                <DemoLine />
            </div>

           <EditModal/>

        </div>
    )
}

export default connect(null,null)(LeftChar)
