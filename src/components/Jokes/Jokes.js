import React, { Fragment } from 'react';
import { Container,Row,Col,Card } from "react-bootstrap";

export default function Jokes ({jokes}) {
    console.log(jokes);
    return (
        <Fragment>
            <Container>
                {jokes.map(e => {
                    return (
                        <Row>
                            <Col md="12" className="text-center mb-3">
                                <Card className="shadow">
                                    <Card.Body>
                                        {e.joke}
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    );
                })}
            </Container>
        </Fragment>
    )
}

