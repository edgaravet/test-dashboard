import React from 'react';
import { Pie } from '@ant-design/charts';

const DemoPie: React.FC = () => {
    var data = [
        {
            type: 'Failed',
            value: 60,
        },
        {
            type: 'Approved',
            value: 15,
        },

        {
            type: 'Pending',
            value: 25,
        },


    ];
    var config = {
        appendPadding: 10,
        data: data,
        legend:false,
        angleField: 'value',
        colorField: 'type',
        radius: 0.6,
        label: {
            type: 'spider',
            labelHeight: 28,
            content: '{name}\n{percentage}',
        },
        color:['#D987DE','#7C61C5','#7FD0D7'],
        interactions: [{ type: 'element-selected' }, { type: 'element-active' }],
        state: {
            active: {
                style: {
                    lineWidth: 0,
                    fillOpacity: 0.7,

                },
            },
        }
    };
    return <Pie {...config} />;
};

export default DemoPie;