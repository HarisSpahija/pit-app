import React from "react";
import "./App.css";
import ParkingCard from "./components/ParkingCard";
import "bootstrap/dist/css/bootstrap.min.css";
import Lambo from "./static/lambo.png";
import Bentley from "./static/bentley.png";
import Porsche from "./static/porsche.png";
import Logistics from "./static/logistics.png";
import Academy from "./static/academy.png";
import Bezoekers from "./static/bezoekers.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavigatePage from "./components/NavigatePage";
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
                crossorigin="anonymous"
            />
            <header className="App-header">
                <Router>
                    <Switch>
                        <Route path="/navigate/:id">
                            <NavigatePage test="hey"/>
                        </Route>
                        <Route path="/">
                            <div
                                class="row"
                                style={{
                                    height: "10vh",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}
                            >
                                <h1>Selecteer uw bestemming</h1>
                            </div>
                            <div class="row" style={{ height: "45vh" }}>
                                <ParkingCard
                                    status="full"
                                    parkingLot="1"
                                    parkingLotText="Porsche, Lamborghini, Bentley"
                                    logos={logosCard1}
                                    spotsAvailable={0}
                                />
                                <ParkingCard
                                    status="almost"
                                    parkingLot="2"
                                    parkingLotText="Logistics"
                                    logos={logosCard2}
                                    spotsAvailable={3}
                                />
                            </div>
                            <div class="row" style={{ height: "45vh" }}>
                                <ParkingCard
                                    status="free"
                                    parkingLot="3"
                                    parkingLotText="Academy"
                                    logos={logosCard3}
                                    spotsAvailable={13}
                                />
                                <ParkingCard
                                    status="free"
                                    parkingLot="4"
                                    parkingLotText="Bezoekers"
                                    logos={logosCard4}
                                    spotsAvailable={9}
                                />
                            </div>
                        </Route>
                    </Switch>
                </Router>
            </header>
        </div>
    );
}

export default App;
