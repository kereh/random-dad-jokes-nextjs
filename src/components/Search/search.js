import React, { Fragment, useState } from 'react';
import { Row,Col } from "react-bootstrap";
import TextInput from "../Shared/TextInput";

export default function Search (props) {

    const {text, onTextChange} = props;

    return (
        <Fragment>
            <Row>
                <Col md="12" className="text-center mt-3 mb-3">
                    <TextInput
                        placeHolder="Search Dad Jokes"
                        value={text}
                        onChange={e => onTextChange(e)}
                    />
                </Col>
            </Row>
        </Fragment>
    );
}
