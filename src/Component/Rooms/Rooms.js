import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import picOne from '../../Rectangle 26.png';
import picTwo from '../../Rectangle 27.png';
import picThree from '../../Rectangle 28.png';
import map from '../../Map-of-Coxs-Bazar-district-Bangladesh.png';
import Header from '../Header/Header';
import { MyContext } from '../../App';

const Rooms = () => {
    const [loggedInUser, setLoggedInUser] = useContext(MyContext);
    return (
        <Container>
            <Header color="black" login={false}></Header>
            <hr/>
            <Row>
                <Col sm={7}>
                    <h6>252 stays april 13-173 guests</h6>
                    <h2>stay in coxs bazar</h2>
                    <div style={{display: 'flex', marginBottom: '30px'}}>
                    
                            <img style={{width: '40%'}} src={picOne} alt=""/>

                        <div style={{textAlign: "justify", marginLeft: '15px', width: '300px'}}>
                            <h5>Light bright airy stylish apt & peace safe place</h5>
                            <h6>2 beds 2 bedrooms 4 guests 2baths</h6>
                            <h6>well air conditioning kitchen</h6>
                            <h6>cancellaiion flexibility available</h6>
                            <h6>$30/night</h6>
                        </div>
                    </div>
                    <div style={{display: 'flex', marginBottom: '30px', }}>
                    
                            <img style={{width: '40%'}} src={picTwo} alt=""/>

                        <div style={{textAlign: "justify", marginLeft: '15px', width: '300px'}}>
                            <h5>Light bright airy stylish apt & peace safe place</h5>
                            <h6>2 beds 2 bedrooms 4 guests 2baths</h6>
                            <h6>well air conditioning kitchen</h6>
                            <h6>cancellaiion flexibility available</h6>
                            <h6>$30/night</h6>
                        </div>
                    </div>
                    <div style={{display: 'flex', marginBottom: '30px'}}>
                    
                            <img style={{width: '40%'}} src={picThree} alt=""/>

                        <div style={{textAlign: "justify", marginLeft: '15px', width: '300px'}}>
                            <h5>Light bright airy stylish apt & peace safe place</h5>
                            <h6>2 beds 2 bedrooms 4 guests 2baths</h6>
                            <h6>well air conditioning kitchen</h6>
                            <h6>cancellaiion flexibility available</h6>
                            <h6>$30/night</h6>
                        </div>
                    </div>
                </Col>
                <Col sm={5}>
                    <img style={{width: '95%', height: 'auto', borderRadius: '10px'}} src={map} alt=""/>
                </Col>
            </Row>

        </Container>
    );
};

export default Rooms;