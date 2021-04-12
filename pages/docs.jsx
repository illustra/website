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

        <Docs url="https://raw.githubusercontent.com/APixelVisuals/illustra/master/docs/docs.json" />

    </div>
);

export default DocsPage;