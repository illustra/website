import React, { useEffect, useState } from "react";
import Head from "../components/Head";
import InlineSVG from "react-inlinesvg";
import TextLogo from "../../static/assets/text-logo.svg";
import "./index.scss";

export default () => {

    // Text logo animated
    const [textLogoAnimated, setTextLogoAnimated] = useState(false);

    // On load
    useEffect(() => {

        // Get text logo animated
        const thisSetTextLogoAnimated = sessionStorage.getItem("textLogoAnimated");

        // Set text logo animated state
        setTextLogoAnimated(thisSetTextLogoAnimated);

        // Set text logo animated
        sessionStorage.setItem("textLogoAnimated", true);
    }, []);

    return (
        <div id="index">

            <Head
                title="Illustra"
                description="Illustra, the object-oriented, document based, Node.js image processing toolkit"
            />

            <div className="intro">

                <InlineSVG src={TextLogo} className={textLogoAnimated && "no-animation"} />

                <p className={`description ${textLogoAnimated && "no-animation"}`}>Object-Oriented. <span>Document Based.</span> Node.js Image Processing Toolkit.</p>

            </div>

        </div>
    );
};