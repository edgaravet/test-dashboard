import React from "react";
import {ContactsOutlined, WifiOutlined} from "@ant-design/icons";


const data = [
    {
        info: <div><ContactsOutlined/>ID:<span> 254896</span></div>,
    },
    {
        info: <div><WifiOutlined/>System Type:<span> Online</span></div>
    },
    {
        info: <div><WifiOutlined/>Market:<span> Asia</span></div>,
    },
    {
        info: <div><WifiOutlined/> Created Date: <span> 14.07.2012</span></div>,
    },
    {
        info: <div><WifiOutlined/>Created By: <span>John Smith</span></div>
    },
    {
        info: <div><WifiOutlined/>Last Updated:<span>14.07.2012</span></div>
    },
    {
        info: <div><WifiOutlined/>Updated By:<span>John Smith</span></div>
    }

]


const TopPaymentInfos = () => {
    return (
        <div className={'info_creator'}>

            <div className="pipe-separated-list-container">
                <ul>
                    {data.map((item,key) => {

                        return(
                            <li key={key}>{item.info}</li>
                        )
                    })}
                </ul>
            </div>

        </div>
    )
}


export default TopPaymentInfos;