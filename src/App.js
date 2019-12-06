import React from "react";
import "./App.css";
import LotsCard from "./components/LotsCard";

import "bootstrap/dist/css/bootstrap.min.css";


function App() {

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
                <LotsCard />

            </header>
        </div>
    );
}

export default App;
