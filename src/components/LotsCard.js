import React from "react";
import axios from "axios";

import data from "./mock/lots";
import ParkingCard from "./ParkingCard";
import parseJson from "parse-json";

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
        if (error) {
            return <div>An error occurred!</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {



            return (
                <ul>
                    {lots.map(item => (
                        <li key={item.name}>
                            {item.name}
                        </li>
                    ))}
                </ul>
            );
        }
    }
}

