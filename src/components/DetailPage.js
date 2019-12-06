import React, { Component } from "react";
import { withRouter } from "react-router";
import Iframe from "react-iframe";
import * as _lodash from "lodash";
import rn from "random-number";

class DetailPage extends Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.history.push("/");
        }, 8000);
    }

    render() {
        const { id, ev, lots } = this.props.match.params;

        const lotElectricSpaces = _lodash.filter(lots[id].spaces, (s) => { return s.whitCharger === true });
        const lotNormalSpaces = _lodash.filter(lots[id].spaces, (s) => { return s.whitCharger === false });
        let assignedSpace;

        if (ev) {
            const freeSpaces = _lodash.filter(lotElectricSpaces, (s) => { return s.free === true });
            var options = {
                min: 0
                , max: freeSpaces.length - 1
                , integer: true
            }
            const int = rn(options);
            assignedSpace = freeSpaces[int];
        } else {
            const freeSpaces = _lodash.filter(lotNormalSpaces, (s) => { return s.free === true });
            var options = {
                min: 0
                , max: freeSpaces.length - 1
                , integer: true
            }
            const int = rn(options);
            assignedSpace = freeSpaces[int];
        }

        let src = "";
        switch (id) {
            case "1": // Bezoekers
                src =
                    "https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d1569.915897462168!2d5.416276724208587!3d52.122658526364106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e0!4m3!3m2!1d52.1235232!2d5.4150785!4m3!3m2!1d52.122968!2d5.4143019!5e1!3m2!1snl!2snl!4v1575635999829!5m2!1snl!2snl";
                break;
            case "2": // Porsche
                src = "https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d1569.6819195452201!2d5.4171032259137455!3d52.12271693804941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e0!4m3!3m2!1d52.1235232!2d5.4150785!4m3!3m2!1d52.1232389!2d5.4163869!5e1!3m2!1snl!2snl!4v1575635948405!5m2!1snl!2snl";
                break;
            case "3": // Logistics --- Broken
                src = "https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d1107.5631696823227!2d5.41562897164949!3d52.12219171556043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e0!4m3!3m2!1d52.1235232!2d5.4150785!4m3!3m2!1d52.121911999999995!2d5.416506399999999!5e1!3m2!1snl!2snl!4v1575636156798!5m2!1snl!2snl";
                break;
            case "4": // Modiforce
                src = "https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d2382.769670340234!2d5.416785145582821!3d52.121671509396656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e0!4m3!3m2!1d52.1235232!2d5.4150785!4m3!3m2!1d52.1204368!2d5.419832899999999!5e1!3m2!1snl!2snl!4v1575634053343!5m2!1snl!2snl";
                break;
            case "5": // Lamborghini --- Broken
                src = "https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d1107.5631696823227!2d5.41562897164949!3d52.12219171556043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e0!4m3!3m2!1d52.1235232!2d5.4150785!4m3!3m2!1d52.121911999999995!2d5.416506399999999!5e1!3m2!1snl!2snl!4v1575636156798!5m2a!1snl!2snl";
                break;
            case "6": // Bentley
                src = "https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d1569.915897462168!2d5.416276724208587!3d52.122658526364106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e0!4m3!3m2!1d52.1235232!2d5.4150785!4m3!3m2!1d52.122392!2d5.417097399999999!5e1!3m2!1snl!2snl!4v1575636095849!5m2!1snl!2snl";
                break;
            default:
                src = "";
                break;
        }

        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingBottom: 100,
                    flexDirection: "column"
                }}
            >
                <h1>Rijd naar parkeerplek: {assignedSpace.name}</h1>
                <Iframe
                    src={src}
                    width="800"
                    height="650"
                    frameborder="0"
                    allowfullscreen={true}
                    styles={{ height: "100%", width: "100%" }}
                ></Iframe>
            </div>
        );
    }
}

export default withRouter(DetailPage);
