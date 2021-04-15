import React from "react";
import { Docs } from "@apixelvisuals/typedoc-frontend";
import Head from "../components/Head";
import NavBar from "../components/NavBar";

const DocsPage = () => (
    <div id="docs">

        <Head
            title="Docs - Illustra"
            description="Illustra, the object-oriented, document based, Node.js image processing toolkit"
        />
        <NavBar />

        <Docs
            url="https://raw.githubusercontent.com/APixelVisuals/illustra/master/docs/docs.json"
            defaultPath="/classes/Document"
            colors={{
                background: "#252550",
                backgroundDark: "#171731",
                primary: "#574ae2",
                accent: "#f63e70",
                text: "#7c72eb",
                textLight: "#978fee",
                textLighter: "#ada9e4",
                codeblockBackground: "#7c72eb45"
            }}
        />

    </div>
);

export default DocsPage;