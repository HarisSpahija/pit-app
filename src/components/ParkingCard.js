import React from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";

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
            backgroundColor = "#00c900";
            break;
        case "full":
            backgroundColor = "#ff4444";
            break;
        case "almost":
            backgroundColor = "orange";
            break;
        default:
            backgroundColor = "white";
            break;
    }

    return (
        <Link
            to={`/navigate/${parkingLot}`}
            style={{ width: "50%", height: "100%", textDecoration: 'none', color: "black" }} 
        >
            <Card style={{height: "100%" }}>
                <Card.Body>
                    <Card.Header style={{ backgroundColor: backgroundColor }}>
                        {parkingLotText}
                    </Card.Header>
                    <Card.Text>
                        Aantal plekken beschikbaar: {spotsAvailable}
                    </Card.Text>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            flexDirection: "column",
                            alignItems: "center",
                            height: "40%"
                        }}
                    >
                        <div>
                            {logos &&
                                logos.map((image, index) => {
                                    console.log(image);
                                    return (
                                        <Image
                                            variant="top"
                                            style={{
                                                maxHeight: 150,
                                                maxWidth: 150
                                            }}
                                            src={image}
                                        />
                                    );
                                })}
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Link>
    );
}
