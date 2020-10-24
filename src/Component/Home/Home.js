import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import data from '../../Data/Data.json';
import Header from '../Header/Header';
import PlacePreview from '../PlacePreview/PlacePreview';
import './Home.css';
import left from '../../arrow-left-solid.svg';
import right from '../../arrow-circle-right-solid.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignLeft, faArrowAltCircleRight, faArrowCircleLeft, faCoffee } from '@fortawesome/free-solid-svg-icons';


const Home = () => {
    console.log(data);
    const [activePlace, setActivePlace] = useState('Sundorban');
    let presentActive = data.find(dt => dt.item === activePlace);
    console.log(presentActive);
    return (
        <div className="home-page .bg-transparent">
            <Header color="white" login={true}></Header>
            <Row style={{marginTop: '120px'}}>
                <Col sm={6} style={{padding: '10px 60px'}}>
                    <h1 className="text-white text-center font-weight-bold">{presentActive.item}</h1>
                    <p className="text-white text-justify font-weight-bold">{presentActive.description}</p>
                </Col>
                {data.map(dt => <PlacePreview place={dt} img={dt.picture}></PlacePreview>)}
                <div style={{margin: '50px auto', textAlign: 'center'}}>
                    <button style={{borderRadius: '50%'}}><i className="arrow left"></i></button>
                    <button style={{borderRadius: '50%'}}><i className="arrow right"></i></button>
                </div>
            </Row>
        </div>
    );
};

export default Home;