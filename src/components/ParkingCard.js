import React from "react";
import Card from 'react-bootstrap/Card';

export default function ParkingCard() {
    return (
        <Card style={{ width: "50vw", height: "50vh" }}>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                </Card.Text>
            </Card.Body>
        </Card>
    );
}
