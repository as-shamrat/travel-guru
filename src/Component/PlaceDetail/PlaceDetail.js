import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Header from '../Header/Header';
import data from '../../Data/Data.json';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const PlaceDetail = () => {



    const { placeName } = useParams();
    console.log(placeName);
    const place = data.find(pc => pc.item === placeName);
    console.log(place);
    let history = useHistory();
    const handleSubmit = (e) => {
        history.push("/room");
        e.preventDefault();
       
    };
    return (
        <div className="home-page">
            <Header></Header>
            <Container style={{ marginTop: '70px' }}>
                <Row>
                    <Col>
                        <h1 style={{ fontSize: '50px' }} className="text-white font-weight-bold">{place.item}</h1>
                        <p className="text-white font-weight-bold">{place.description}</p>
                    </Col>
                    <Col>
                        <Form onSubmit={handleSubmit} className="bg-white p-4">
                            <Form.Group>
                                <Form.Label>Origin</Form.Label>
                                <Form.Control type="text" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Destination</Form.Label>
                                <Form.Control type="text" placeholder="Enter email" />
                            </Form.Group>
                            <Row>
                                <Col>
                                    <Form.Label>From</Form.Label>
                                    <br/>
                                    <DatePicker
                                        name="startDate"
                                        dateFormat="MM/dd/yyyy"
                                    />
                                </Col>
                                <Col>
                                    <Form.Label>To</Form.Label>
                                    <br/>
                                    <DatePicker
                                        
                                        name="startDate"
                                        dateFormat="MM/dd/yyyy"
                                    />
                                </Col>
                            </Row>
                            <Button className="my-2" variant="warning" type="submit" size="lg" block>
                                Start booking
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default PlaceDetail;