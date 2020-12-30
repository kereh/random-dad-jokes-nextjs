import React, { Fragment } from 'react';
import { Row,Col } from "react-bootstrap";

export default function Header () {
    return (
        <Fragment>
            <Row>
                <Col md="12" className="text-center mt-3">
                    <h4>Random Dad Jokes</h4>
                </Col>
            </Row>
        </Fragment>
    );
}

