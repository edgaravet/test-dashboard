import React from 'react'
import {Button, Checkbox, Form, Input, Modal, Radio, Select} from "antd";
import {connect} from 'react-redux'
import {hideModal} from "../redux/actions";

const {Option} = Select;
const {TextArea} = Input;


class EditModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    handleOk = () => {
        this.props.dispatch(hideModal())

    };

    handleCancel = () => {
        this.props.dispatch(hideModal())
    };


    render() {
        const {showModal} = this.props;
        return (
            <Modal centered width={400} className={'edit_modal'} title="Edit" visible={showModal} onOk={this.handleOk} onCancel={this.handleCancel}>

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
                            <Checkbox  defaultChecked={true}>Deposit</Checkbox>
                            <Checkbox >Withdrawal</Checkbox>

                        </Radio.Group>
                    </Form.Item>


                    <Form.Item label={'Description'}>
                        <TextArea rows={4}/>
                    </Form.Item>

                    <Form.Item className={'modal_buttons'}>

                        <Button htmlType="button" onClick={this.handleCancel}>
                            Cancel
                        </Button>


                        <Button type="primary" onClick={this.handleOk}>
                            Save
                        </Button>

                    </Form.Item>

                </Form>


            </Modal>
        )
    }
}


function mapStateToProps(state) {
    return {
        showModal: state.appReducer.showModal
    }

}


export default connect(mapStateToProps, null)(EditModal)