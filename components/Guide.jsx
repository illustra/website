import React from "react";
import "./guide.scss";

const Guide = props => (
    <a id="guide-component" className={props.className} href={`/guide/${props.slug}`}>

        <div className="guide-title">
            <img className="guide-title-icon" src={`/assets/guides/${props.icon}.svg`} />
            <p className="guide-title-text">{props.title}</p>
        </div>
        <p className="guide-description">{props.description}</p>

    </a>
);

export default Guide;