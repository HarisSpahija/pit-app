import React from "react";
import "./App.css";
import LotsCard from "./components/LotsCard";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ChooseElectricPage from "./components/ChooseElectricPage";

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
                <Router>
                    <Switch>
                        <Route path="/navigate/:id">
                            <ChooseElectricPage title="1A1"/>
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
                            <LotsCard />
                        </Route>
                    </Switch>
                </Router>
            </header>
        </div>
    );
}

export default App;
