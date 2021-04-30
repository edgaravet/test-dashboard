import React from "react";
import {Button, Col, Space, Tooltip} from "antd";
import {EditOutlined} from "@ant-design/icons";
import {connect} from 'react-redux'
import {showModal} from "../redux/actions";


const TopProcessInfo = (props) => {


    const handleOpenEditModal = () => {
        props.dispatch(showModal())
    }

    const title = <span className={'curs_pointer'} onClick={handleOpenEditModal}>Edit</span>
    return(
        <>
            <h2>Skrill</h2>

            <Col md={24} xxl={24}>

                <Space>
                    <div className={'info_process'}>
                        <span>Processing Type Name</span>


                        <span>Deposit / Withdrawal</span>

                        <span className={'first_info'}>Payment System Description Will Be Here...</span>

                        <Tooltip overlayInnerStyle={{paddingRight:10,paddingLeft:10,borderRadius:5}} placement="top" title={title} className={'process_tooltip'} >
                            <Button ><EditOutlined/></Button>
                        </Tooltip>
                    </div>

                </Space>

            </Col>

            </>
    )
}


export default connect(null,null)(TopProcessInfo)