import React from "react";
import "./BusinessNameCard.css";
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

// Business card component for List Results
const BusinessNameCard = props => (
    <div className="business-name-card">
        <a href={props.address}>
			<h2>{props.name}</h2>
		</a>
        <h3>{props.stars}</h3>
    </div>
  );

export default BusinessNameCard;