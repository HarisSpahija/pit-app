import React from "react";
import axios from "axios";

import data from "../mock/lots";
import ParkingCard from "./ParkingCard";
import Lambo from "../static/lambo.png";
import Bentley from "../static/bentley.png";
import Porsche from "../static/porsche.png";
import Logistics from "../static/logistics.png";
import Academy from "../static/academy.png";
import Bezoekers from "../static/bezoekers.png";

export default class LotsCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            lots: [],
            isLoaded: false,
            error: false
        };
    }

    componentDidMount() {
        this.setState({
            isLoaded: true,
            lots: data
        });
    }

    render() {
        const { error, isLoaded, lots } = this.state;

        const logosCard1 = [Lambo, Bentley, Porsche];
        const logosCard2 = [Logistics];
        const logosCard3 = [Academy];
        const logosCard4 = [Bezoekers];

        if (error) {
            return <div>An error occurred!</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {

            return (
                <div>

                    <div class="row" style={{ height: "45vh" }}>
                        <ParkingCard
                            status="full"
                            parkingLot={lots[0].id}
                            parkingLotText={lots[0].name}
                            logos={logosCard1}
                            spotsAvailable={0}
                        />
                        <ParkingCard
                            status="almost"
                            parkingLot={lots[1].id}
                            parkingLotText={lots[1].name}
                            logos={logosCard2}
                            spotsAvailable={3}
                        />
                    </div>
                    <div class="row" style={{ height: "45vh" }}>
                        <ParkingCard
                            status="free"
                            parkingLot={lots[2].id}
                            parkingLotText={lots[2].name}
                            logos={logosCard3}
                            spotsAvailable={13}
                        />
                        <ParkingCard
                            status="free"
                            parkingLot={lots[3].name}
                            parkingLotText={lots[3].name}
                            logos={logosCard4}
                            spotsAvailable={9}
                        />
                    </div>
                </div>
            );
        }
    }
}

