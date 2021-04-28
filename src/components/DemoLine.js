import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/charts';

const DemoLine: React.FC = () => {
    var data = [
        {
            month: 'March',
            key: 'series1',
            value: 100,
        },



        {
            month: 'March',
            key: 'series1',
            value: 350,
        },

        {
            month: 'April',
            key: 'series1',
            value: 200,
        },

        {
            month: 'April',
            key: 'series1',
            value: 400,
        },


        {
            month: 'April',
            key: 'series1',
            value: 400,
        },

        {
            month: 'April',
            key: 'series2',
            value: 150,
        },
        {
            month: 'May',
            key: 'series1',
            value: 132,
        },

    ];
    var config = {
        data: data,
        xField: 'month',
        yField: 'value',
        legend: false,
        seriesField: 'key',

        connectNulls:true

    };
    return <Line {...config} />;
};

export default DemoLine;