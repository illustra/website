import React, { useEffect, useState } from "react";
import InlineSVG from "react-inlinesvg";
import Head from "../components/Head";
import NavBar from "../components/NavBar";
import Codeblock from "../components/Codeblock";
import TextLogo from "../../static/assets/text-logo.svg";
import "./index.scss";

export default () => {

    // Text logo animated
    const [textLogoAnimated, setTextLogoAnimated] = useState(false);

    // On load
    useEffect(() => {

        // Get text logo animated
        const thisSetTextLogoAnimated = localStorage.getItem("textLogoAnimated");

        // Set text logo animated state
        setTextLogoAnimated(thisSetTextLogoAnimated);

        // Set text logo animated
        localStorage.setItem("textLogoAnimated", true);

        // Hide text logo animated
        if (!thisSetTextLogoAnimated) setTimeout(() => setTextLogoAnimated(true), 7000);
    }, []);

    return (
        <div id="index">

            <Head
                title="Illustra"
                description="Illustra, the object-oriented, document based, Node.js image processing toolkit"
            />
            <NavBar />

            {!textLogoAnimated && (
                <div className="animation">
                    <InlineSVG src={TextLogo} />
                </div>
            )}

            <div className="intro-wrapper">

                <div className="intro">
                    <div className="intro-content">

                        <p className="title">Illustra</p>

                        <p className="description">Illustra is an object-oriented, document based Node.js image processing toolkit, complete with utility functions to make development a breeze.</p>

                        <div className="buttons">

                            <button className="button">Features</button>
                            <a href="/docs" className="main-button">Documentation</a>
                            <a href="/github" className="button" target="_blank">GitHub</a>

                        </div>

                    </div>
                </div>

                <div className="code-sample">
                    <Codeblock
                        path="src/generate/banner.js"
                        width="85%"
                        height="60vh"
                        content={`import { Document } from "illustra";\n\nexport default async function banner() {\n\n    // Create document\n    const document = new Document({\n        name: "Banner",\n        width: 1500,\n        height: 500\n    });\n\n    // Add background\n    const bg = await document.createLayer({\n        name: "background",\n        file: "src/assets/background.png"\n    });\n\n    // Add logo\n    const logo = await document.createLayer({\n        name: "logo",\n        file: "src/assets/logo.png",\n        top: 150,\n        left: 300\n    });\n\n    // Align logo to center\n    logo.align();\n\n    // Export\n    await document.exportTo("png", "file", "out/banner.png");\n}`}
                    />
                </div>

            </div>

        </div>
    );
};