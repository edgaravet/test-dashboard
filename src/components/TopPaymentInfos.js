import React from "react";


const data = [
    {
        info: <div><i className="fal fa-id-badge"></i>ID:<span> 254896</span></div>,
    },
    {
        info: <div><i className="fas fa-wifi"></i>System Type:<span> Online</span></div>
    },
    {
        info: <div><i className="fas fa-file-signature"></i>Market:<span> Asia</span></div>,
    },
    {
        info: <div><i className="far fa-calendar-alt"></i> Created Date: <span> 14.07.2012</span></div>,
    },
    {
        info: <div><i className="fas fa-user"></i>Created By: <span>John Smith</span></div>
    },
    {
        info: <div><i className="far fa-calendar-alt"/>Last Updated:<span>14.07.2012</span></div>
    },
    {
        info: <div><i className="fas fa-user"></i>Updated By:<span>John Smith</span></div>
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