import React from "react";
import { Link } from "react-router-dom";

export default function ChooseElectricPage() {
    return (
        <div>
            <div style={{ height: "20vh", display: "flex", justifyContent: "center", alignItems: "center" }}>Rijdt u een elektrische auto?</div>
            <div
                style={{
                    height: "80vh",
                    display: "flex",
                    justifyContent: "center"
                }}
            >
                <Link
                    style={{
                        border: "1px solid black",
                        width: "50%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "black", 
                        textDecoration: "none",
                        fontSize: "80px"
                    }}
                >
                    Nee
                </Link>
                <Link
                    style={{
                        border: "1px solid black",
                        width: "50%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "black", 
                        textDecoration: "none",
                        fontSize: "80px"
                    }}
                >
                    Ja
                </Link>
            </div>
        </div>
    );
}
