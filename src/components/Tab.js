import React from 'react'
import {Col, Row, Tabs} from 'antd';
import { AppleOutlined, AndroidOutlined } from '@ant-design/icons';
import TotalCounts from "./TotalCoaunts";
import LeftChar from "./LeftChar";
import RightChar from "./RightChar";

const { TabPane } = Tabs;


const Tab = () => {
    return(
       <div className={'tabs_content'}>


        <Tabs defaultActiveKey="1">
            <TabPane
                tab={<span><AppleOutlined /> GENERAL</span>}
                key="1"
            >
               <TotalCounts/>
                <Row>
                    <Col span={'12'}>

                        <LeftChar/>
                    </Col>


                    <Col span={'12'}>
                       <RightChar/>
                    </Col>
                </Row>
            </TabPane>

            <TabPane
                tab={
                    <span>
          <AndroidOutlined />
          Currencies & Countries
        </span>
                }
                key="2"
            >
                Currencies & Countries
            </TabPane>

            <TabPane
                tab={
                    <span>
          <AndroidOutlined />
          Settings key
        </span>
                }
                key="3"
            >
                Settings key
            </TabPane>

            <TabPane
                tab={
                    <span>
          <AndroidOutlined />
         CONFIGS
        </span>
                }
                key="4"
            >
                CONFIGS
            </TabPane>
        </Tabs>
       </div>
    )
}


export default Tab;