import React from "react";
import "./App.css";
import LotsCard from "./components/LotsCard";

import "bootstrap/dist/css/bootstrap.min.css";
import Lambo from "./static/lambo.png";
import Bentley from "./static/bentley.png";
import Porsche from "./static/porsche.png";
import Logistics from "./static/logistics.png";
import Academy from "./static/academy.png";
import Bezoekers from "./static/bezoekers.png";

function App() {
    const logosCard1 = [Lambo, Bentley, Porsche];
    const logosCard2 = [Logistics];
    const logosCard3 = [Academy];
    const logosCard4 = [Bezoekers];

    return (
        <div className="App">
            <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
                crossOrigin="anonymous"
            />
            <header className="App-header">
                <div class="row" style={{ height: "10vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <h1>Selecteer uw bestemming</h1>
                </div>
                <div class="row" style={{ height: "45vh" }}>
                    <ParkingCard
                        status="full"
                        parkingLot="Lot A"
                        parkingLotText="Porsche, Lamborghini, Bentley"
                        logos={logosCard1}
                        spotsAvailable={0}
                    />
                    <ParkingCard
                        status="almost"
                        parkingLot="Lot B"
                        parkingLotText="Logistics"
                        logos={logosCard2}
                        spotsAvailable={3}
                    />
                </div>
                <div class="row" style={{ height: "45vh" }}>
                    <ParkingCard
                        status="free"
                        parkingLot="Lot C"
                        parkingLotText="Academy"
                        logos={logosCard3}
                        spotsAvailable={13}
                    />
                    <ParkingCard
                        status="free"
                        parkingLot="Lot D"
                        parkingLotText="Bezoekers"
                        logos={logosCard4}
                        spotsAvailable={9}
                    />
                </div>
            </header>
        </div>
    );
}

export default App;
