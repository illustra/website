import React, { useEffect, useState } from "react";
import Head from "../components/Head";
import NavBar from "../components/NavBar";
import DocsSidebar from "../components/DocsSidebar";
import "./docs.scss";

const Docs = () => {

    // Path
    const [path, setPath] = useState();

    // On load
    useEffect(() => {

        // Set path
        setPath(window.location.href.split("/docs")[1] || "/");
    }, []);

    return (
        <div id="docs">

            <Head
                title="Docs - Illustra"
                description="Illustra, the object-oriented, document based, Node.js image processing toolkit"
            />
            <NavBar />

            <DocsSidebar setPath={setPath} />

        </div>
    );
};

export default Docs;