import React from "react";

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

            const lotFreeSpaces1 = lots[0].freeSpaces.length;
            const lotFreeSpaces2 = lots[1].freeSpaces.length;
            const lotFreeSpaces3 = lots[2].freeSpaces.length;
            const lotFreeSpaces4 = lots[3].freeSpaces.length;

            const lotSpaces1 = lots[0].totalSpaces;
            const lotSpaces2 = lots[1].totalSpaces;
            const lotSpaces3 = lots[2].totalSpaces;
            const lotSpaces4 = lots[3].totalSpaces;

            let lot1Color = "free", lot2Color = "free", lot3Color = "free", lot4Color = "free";
            if (((100 * lotFreeSpaces1) / lotSpaces1) < 10 && ((100 * lotFreeSpaces1) / lotSpaces1) > 5) {
                lot1Color = "almost";
            } else if (((100 * lotFreeSpaces1) / lotSpaces1) < 2) {
                lot1Color = "full";
            }

            if (((100 * lotFreeSpaces2) / lotSpaces2) < 10 && ((100 * lotFreeSpaces2) / lotSpaces2) > 5) {
                lot2Color = "almost";
            } else if (((100 * lotFreeSpaces2) / lotSpaces2) < 10) {
                lot2Color = "full";
            }

            if (((100 * lotFreeSpaces3) / lotSpaces3) < 10 && ((100 * lotFreeSpaces3) / lotSpaces3) > 5) {
                lot3Color = "almost";
            } else if (((100 * lotFreeSpaces3) / lotSpaces3) < 5) {
                lot3Color = "full";
            }

            if (((100 * lotFreeSpaces4) / lotSpaces4) < 10 && ((100 * lotFreeSpaces4) / lotSpaces4) > 5) {
                lot4Color = "almost";
            } else if (((100 * lotFreeSpaces4) / lotSpaces4) < 5) {
                lot4Color = "full";
            }

            return (
                <div>

                    <div class="row" style={{ height: "45vh" }}>
                        <ParkingCard
                            status={lot1Color}
                            parkingLot={lots[0].id}
                            parkingLotText={lots[0].name}
                            logos={logosCard1}
                            spotsAvailable={lotFreeSpaces1}
                        />
                        <ParkingCard
                            status={lot2Color}
                            parkingLot={lots[1].id}
                            parkingLotText={lots[1].name}
                            logos={logosCard2}
                            spotsAvailable={lotFreeSpaces2}
                        />
                    </div>
                    <div class="row" style={{ height: "45vh" }}>
                        <ParkingCard
                            status={lot3Color}
                            parkingLot={lots[2].id}
                            parkingLotText={lots[2].name}
                            logos={logosCard3}
                            spotsAvailable={lotFreeSpaces3}
                        />
                        <ParkingCard
                            status={lot4Color}
                            parkingLot={lots[3].name}
                            parkingLotText={lots[3].name}
                            logos={logosCard4}
                            spotsAvailable={lotFreeSpaces4}
                        />
                    </div>
                </div>
            );
        }
    }
}

