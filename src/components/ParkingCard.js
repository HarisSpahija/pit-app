import React from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

export default function ParkingCard({
    status,
    parkingLot,
    parkingLotText,
    logos,
    spotsAvailable
}) {

    let backgroundColor = "white";

    switch (status) {
        case "free":
            backgroundColor = "green"
            break;
        case "full":
            backgroundColor = "red"
            break;
        case "almost":
            backgroundColor = "orange"
            break;
        default:
            backgroundColor = "white"
            break;
    }

    return (
        <Card style={{ width: "50%", height: "100%" }}>
            <Card.Body>
                <Card.Header style={{ backgroundColor: backgroundColor }}>
                    {parkingLotText}
                </Card.Header>
                <Card.Text>Aantal plekken beschikbaar: {spotsAvailable}</Card.Text>
                <div style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", height: "80%"}}>
                <div>
                {logos &&
                    logos.map((image, index) => {
                        console.log(image);
                        return (
                            <Image
                                variant="top"
                                style={{ maxHeight: 250, maxWidth: 250 }}
                                src={image}
                            />
                        );
                    })}
                    </div>                
                </div>
            </Card.Body>
        </Card>
    );
}
