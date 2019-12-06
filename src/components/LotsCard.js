import React from "react";
import * as _lodash from "lodash"

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

        const logosCard0 = [Bezoekers];
        const logosCard1 = [Porsche];
        const logosCard2 = [Logistics];
        const logosCard3 = [Lambo];
        const logosCard4 = [Academy];
        const logosCard5 = [Bentley];

        if (error) {
            return <div>An error occurred!</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {

            const lotFreeSpaces1 = _lodash.filter(lots[0].spaces, (s) => { return s.free === true }).length;
            const lotFreeSpaces2 = _lodash.filter(lots[1].spaces, (s) => { return s.free === true }).length;
            const lotFreeSpaces3 = _lodash.filter(lots[2].spaces, (s) => { return s.free === true }).length;
            const lotFreeSpaces4 = _lodash.filter(lots[3].spaces, (s) => { return s.free === true }).length;
            const lotFreeSpaces5 = _lodash.filter(lots[4].spaces, (s) => { return s.free === true }).length;
            const lotFreeSpaces6 = _lodash.filter(lots[5].spaces, (s) => { return s.free === true }).length;

            const lotSpaces1 = lots[0].totalSpaces;
            const lotSpaces2 = lots[1].totalSpaces;
            const lotSpaces3 = lots[2].totalSpaces;
            const lotSpaces4 = lots[3].totalSpaces;
            const lotSpaces5 = lots[4].totalSpaces;
            const lotSpaces6 = lots[5].totalSpaces;

            let lot1Color = "free", lot2Color = "free", lot3Color = "free", lot4Color = "free", lot5Color = "free", lot6Color = "free";
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

            if (((100 * lotFreeSpaces5) / lotSpaces5) < 10 && ((100 * lotFreeSpaces5) / lotSpaces5) > 5) {
                lot5Color = "almost";
            } else if (((100 * lotFreeSpaces5) / lotSpaces5) < 5) {
                lot5Color = "full";
            }

            if (((100 * lotFreeSpaces6) / lotSpaces6) < 10 && ((100 * lotFreeSpaces6) / lotSpaces6) > 5) {
                lot6Color = "almost";
            } else if (((100 * lotFreeSpaces6) / lotSpaces6) < 5) {
                lot6Color = "full";
            }

            return (
                <div>
                    <div class="row" style={{ height: "30vh" }}>
                        <ParkingCard
                            status={lot1Color}
                            parkingLot={lots[0].id}
                            parkingLotText={lots[0].name}
                            spotsAvailable={lotFreeSpaces1}
                            logos={logosCard0}
                        />
                        <ParkingCard
                            status={lot2Color}
                            parkingLot={lots[1].id}
                            parkingLotText={lots[1].name}
                            spotsAvailable={lotFreeSpaces2}
                            logos={logosCard1}
                        />
                    </div>
                    <div class="row" style={{ height: "30vh" }}>
                        <ParkingCard
                            status={lot3Color}
                            parkingLot={lots[2].id}
                            parkingLotText={lots[2].name}
                            logos={logosCard2}
                            spotsAvailable={lotFreeSpaces3}
                        />
                        <ParkingCard
                            status={lot4Color}
                            parkingLot={lots[3].name}
                            parkingLotText={lots[3].name}
                            logos={logosCard3}
                            spotsAvailable={lotFreeSpaces4}
                        />
                    </div>
                    <div class="row" style={{ height: "30vh" }}>
                        <ParkingCard
                            status={lot5Color}
                            parkingLot={lots[4].id}
                            parkingLotText={lots[4].name}
                            logos={logosCard4}
                            spotsAvailable={lotFreeSpaces5}
                        />
                        <ParkingCard
                            status={lot6Color}
                            parkingLot={lots[5].id}
                            parkingLotText={lots[5].name}
                            logos={logosCard5}
                            spotsAvailable={lotFreeSpaces6}
                        />
                    </div>
                </div>
            );
        }
    }
}
