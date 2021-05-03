import React, {useEffect, useState} from 'react';
import { Line } from '@ant-design/charts';
import {lineChartUrl} from "../config";

const DemoLine: React.FC = () => {
    const [data,setData] = useState([]);


    useEffect(() => {
        asyncFetch()
    },[])

    const asyncFetch = () => {
        fetch(lineChartUrl)
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => {
                console.log('fetch data failed', error);
            });
    };
    var config = {
        data: data,
        padding: 'auto',
        xField: 'Date',
        yField: 'scales',
        xAxis: { tickCount: 5 },
        slider: {
            start: 0.1,
            end: 0.5,
        },

    };
    return <Line {...config} />;
};

export default DemoLine;