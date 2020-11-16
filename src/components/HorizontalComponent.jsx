import React from "react";
import "./horizontalComponent.scss";

export default props => (
    <div id="horizontal-component" className={props.reflected && "reflected"}>

        <div className="half">{props.left}</div>
        <div className="half">{props.right}</div>

    </div>
);