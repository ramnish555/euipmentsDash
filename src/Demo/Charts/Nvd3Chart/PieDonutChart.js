import { arrayOf } from 'prop-types';
import React from 'react';
import NVD3Chart from 'react-nvd3';
import api_data from '../../Other/ApiData';

let cat_obj = [];
let datum = [];
let color = ["#ff8a65","#f4c22b","#04a9f5","#3ebfea","#4F5467","#1de9b6","#a389d4","#FE8A7D","ff8a56"];
api_data.map((val)=>{
    cat_obj.push(val["Category"]);
});

const arr_to_obj = arr => arr.reduce((obj, e) => {
    obj[e] = (obj[e] || 0) + 1;
    return obj;
}, {});
cat_obj = arr_to_obj(cat_obj);

for(let val in cat_obj){
    let obj = {};
    obj["key"] = val;
    obj["y"] = cat_obj[val];
    datum.push(obj);
}

class PieDonutChart extends React.Component {
    render() {
        return <NVD3Chart id="chart" height={300} type="pieChart" datum={datum} x="key" y="y" donut labelType='percent' />
    }
}

export default PieDonutChart;