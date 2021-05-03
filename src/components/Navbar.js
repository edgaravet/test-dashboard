import React, {useEffect} from 'react'
import { Col,Layout, Row, Space,Menu, Dropdown, Button} from "antd";
import {connect, useDispatch} from "react-redux";
import {getUserData, logOut} from "../redux/actions";


const { Header } = Layout;


const menu = (
    <Menu>
        <Menu.Item>
            <div className={'header_right_exit'}>
                <div>
                    <span>Admin</span>
                </div>
                <img src={require('../assets/img/icon_pay_logout.png').default} alt={'pay_icon'}/>
            </div>
        </Menu.Item>
    </Menu>
);

const Navbar = (props) => {

    const {user} = props;
    const dispatch = useDispatch();

    useEffect(() => {
       props.dispatch(getUserData())
    },[])


    return(

        <Header className="header">

            <Row>
                <Col xs = {12} md = {12}  xxl={8} >



                    <div className="logo">
                        <img src={require('../assets/img/Logo.png').default} alt={'logo'}/>
                    </div>
                </Col>



                <Col xs = {12} md = {12}  xxl={16}  className={'navbar_right_side'}>
                    <Dropdown overlay={menu} placement="bottomLeft" arrow >
                        <Button className={'mobile_dropdown'}><img src={require('../assets/img/Path 41706.png').default} alt={'avatar'}/><span>Name Surname</span></Button>
                    </Dropdown>
                        <Space >


                            <div className={'header_right_name'}>
                                <span>Platform</span>
                            </div>
                            <div className={'header_right_user_info'}>
                                <img src={user ? user.avatar : require('../assets/img/Path 41706.png').default} alt={'avatar'}/>
                                <span>{user ? user.first_name : 'Name'}</span>
                                <span>{user ? user.last_name : 'Surname'}</span>
                            </div>

                            <div className={'header_right_exit mobile_exit'}>
                                <div>
                                    <span>{user ? 'Team lead' : 'Admin'}</span>
                                </div>
                                <img className={'curs_pointer'} onClick={() => dispatch(logOut())} src={require('../assets/img/icon_pay_logout.png').default} alt={'pay_icon'}/>
                            </div>
                        </Space>

                </Col>
            </Row>



        </Header>

    )
}


function mapStateToProps(state){
    return{
        user:state.appReducer.user
    }
}


export default connect(mapStateToProps,null)(Navbar);