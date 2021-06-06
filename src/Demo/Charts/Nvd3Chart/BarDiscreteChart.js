import React from 'react';
import NVD3Chart from 'react-nvd3';
import api_data from '../../Other/ApiData';
import './barChart.css';

let cat_obj = [];
let datum = [
    {
        key: "Department",
        values: []
    }
];
api_data.map((val)=>{
    cat_obj.push(val["Department"]);
});

const arr_to_obj = arr => arr.reduce((obj, e) => {
    obj[e] = (obj[e] || 0) + 1;
    return obj;
}, {});
cat_obj = arr_to_obj(cat_obj);

for(let val in cat_obj){
    let obj = {};
    obj["label"] = val;
    obj["value"] = cat_obj[val];
    datum[0]["values"].push(obj);
}

class BarDiscreteChart extends React.Component {
    render() {
        return <div className="barChart"><NVD3Chart tooltip={{enabled: true}} type="discreteBarChart" datum={datum} x="label" y="value" height={300} showValues={false}/></div>
    }
}

export default BarDiscreteChart;