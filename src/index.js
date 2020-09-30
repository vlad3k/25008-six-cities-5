import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

const PLACES = 32;

ReactDOM.render(
    <App places={PLACES}/>,
    document.querySelector(`#root`)
);
