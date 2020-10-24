import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './PlacePreview.css';

const PlacePreview = (props) => {
    const {place} = props;
    console.log(place);
    const placeName = place.item;
    return (
        <div>
    
    <Col sm={2}>
        <Link to={"/place/"+placeName}><img className="hover-img"  style={{width: '220px'}} src={props.img} alt=""/></Link>
    </Col>
        </div>
    );
};

export default PlacePreview;