import React from 'react';
import { Line } from '@ant-design/charts';

const DemoLine: React.FC = () => {
    var data = [
        {
            month: 'March',
            key: 'Deposit',
            value: 100,
        },



        {
            month: 'March',
            key: 'Deposit',
            value: 350,
        },

        {
            month: 'April',
            key: 'Deposit',
            value: 200,
        },

        {
            month: 'April',
            key: 'Deposit',
            value: 400,
        },


        {
            month: 'April',
            key: 'Deposit',
            value: 400,
        },

        {
            month: 'April',
            key: 'Withdrawal',
            value: 150,
        },

        {
            month: 'March',
            key: 'Withdrawal',
            value: 150,
        },

        {
            month: 'April',
            key: 'Withdrawal',
            value: 150,
        },

        {
            month: 'May',
            key: 'Withdrawal',
            value: 300,
        },
        {
            month: 'May',
            key: 'Deposit',
            value: 132,
        },

    ];
    var config = {
        data: data,
        xField: 'month',
        yField: 'value',
        legend: { position: 'top-right',marker: {symbol: 'square', radius: 5},},
        interactions: [{ type: 'pie-legend-active' }, { type: 'element-active' }],
        seriesField: 'key',
        height:300,
        connectNulls:true

    };
    return <Line {...config} />;
};

export default DemoLine;