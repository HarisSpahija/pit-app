import React from "react";
import { useParams, Link } from "react-router-dom";

export const NavigatePage = props => {
    const { id } = useParams();

    return (
        <div>
            <Link to={`/`}>{id}</Link>
        </div>
    );
};

export default NavigatePage;
