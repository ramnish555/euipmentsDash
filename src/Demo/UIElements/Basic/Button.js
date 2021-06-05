import React from 'react';
import {
    Row,
    Col,
    Button,
    OverlayTrigger,
    Tooltip,
    ButtonToolbar,
    Dropdown,
    DropdownButton,
    SplitButton
} from 'react-bootstrap';

import Aux from "../../../hoc/_Aux";
import Card from "../../../App/components/MainCard";
import UcFirst from "../../../App/components/UcFirst";

class BasicButton extends React.Component {
    render() {

        return (
            <Aux>
                <Row>
                    <Col>
                        <Card title="Default">
                            <p>use <code>variant="*"</code> props in component <code>Button</code> to get various button</p>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default BasicButton;
