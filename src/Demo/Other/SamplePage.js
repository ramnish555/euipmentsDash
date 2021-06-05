import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';

import Aux from "../../hoc/_Aux";
import Card from "../../App/components/MainCard";
import DataTable from 'react-data-table-component';
import api_data from './ApiData';

const data = api_data;
console.log(data);
const columns = [
  {
    name: 'ID',
    selector: 'ID',
    sortable: true,
  },
  {
    name: 'Equipment_Name',
    selector: 'Equipment_Name',
    sortable: true,
    right: true,
  },
  {
    name: 'Equipment_ID',
    selector: 'Equipment_ID',
    sortable: true,
  },
  {
    name: 'Complete_specification',
    selector: 'Complete_specification',
    sortable: true,
    right: true,
  },
  {
    name: 'Department',
    selector: 'Department',
    sortable: true,
  },
  {
    name: 'Date_Of_Purchase',
    selector: 'Date_Of_Purchase',
    sortable: true,
    right: true,
  },
  {
    name: 'Bill_Date',
    selector: 'Bill_Date',
    sortable: true,
  },
  {
    name: 'Cost_of_equipment',
    selector: 'Cost_of_equipment',
    sortable: true,
    right: true,
  },
  {
    name: 'Equip_Status',
    selector: 'Equip_Status',
    sortable: true,
    right: true,
  },
  {
    name: 'Unit_Name',
    selector: 'Unit_Name',
    sortable: true,
  },
  {
    name: 'Equip_Remarks',
    selector: 'Equip_Remarks',
    sortable: true,
    right: true,
  },
  {
    name: 'Category',
    selector: 'Category',
    sortable: true,
    right: true,
  },
];


class SamplePage extends Component {
    render() {
        return (
            <Aux>
                <Row>
                    <Col>
                        {/* <Card title='Hello Card' isOption> */}
                            <DataTable
                                columns={columns}
                                data={data}
                                pagination={true}
                            />
                        {/* </Card> */}
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default SamplePage;