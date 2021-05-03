import React, {useEffect, useState} from 'react';
import {Row,Col} from 'antd';
import {fetchUrl} from "../config";



const TotalCounts = () => {
    const [data,setData] = useState([]);



    const handleGetData = () => {
        fetch(fetchUrl)
            .then(response => response.json())
            .then(json => setData(json))
            .catch(err => console.log('fetch data failed', err))
    }

    useEffect(() => {
        handleGetData();

    },[])



    return(

        <Row gutter={[16,16]}>
            {data.map((item,key) => {

                return(

             <React.Fragment key = {key}>


            <Col md={12} xxl={6} xs = {24} >

                    <div className={`counts_content count${item.id}`}>
                        <Row>
                            <Col span={'12'}>
                                <h5>{item.title.length > 50 ? item.title.substring(50,item.title.length) : item.title}</h5>

                            </Col>

                            <Col span={'12'} >
                                <div className={'count_total'}><span>{item.id * 100}</span></div>
                            </Col>
                        </Row>


                    </div>

            </Col>

             </React.Fragment>
                )
            })}
        </Row>
    )
}


export default TotalCounts;