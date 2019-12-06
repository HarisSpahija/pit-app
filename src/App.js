import React from "react";
import "./App.css";
import ParkingCard from "./components/ParkingCard";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <div className="App">
            <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
                crossorigin="anonymous"
            />
            <header className="App-header">
                <div class="row">
                    <ParkingCard parkingLot="Lot A" />
                    <ParkingCard parkingLot="Lot B" />
                </div>
                <div class="row">
                    <ParkingCard parkingLot="Lot C" />
                    <ParkingCard parkingLot="Lot D" />
                </div>
            </header>
        </div>
    );
}

export default App;
