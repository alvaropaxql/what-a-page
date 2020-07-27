import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCompass,
    faMapMarker,
    faUser,
    faEnvelope
} from "@fortawesome/free-solid-svg-icons";

const navButtons = [
    {
        label: "Explore",
        path: "/explore",
        icon: <FontAwesomeIcon icon={faCompass} />
    },
    {
        label: "Find Me",
        path: "/findme",
        icon: <FontAwesomeIcon icon={faMapMarker} />
    },
    {
        label: "About Me",
        path: "/aboutme",
        icon: <FontAwesomeIcon icon={faUser} />
    },
    {
        label: "Contact Me",
        path: "/contact",
        icon: <FontAwesomeIcon icon={faEnvelope} />
    }
];

export default navButtons;