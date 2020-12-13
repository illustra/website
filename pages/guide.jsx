import fetch from "node-fetch";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import Head from "../components/Head";
import NavBar from "../components/NavBar";
import GuidesSidebar from "../components/GuidesSidebar";
import Codeblock from "../components/Codeblock";
import "./guide.scss";

const Guide = () => {

    // Guide
    const [guide, setGuide] = useState();

    // On load
    useEffect(() => {
        (async () => {

            // Fetch guide
            let fetchedGuide = await fetch(`https://raw.githubusercontent.com/APixelVisuals/illustra/master/guides/${window.location.href.split("/guide")[1]}.md`);
            fetchedGuide = await fetchedGuide.text();

            // Set guide
            setGuide({
                title: fetchedGuide.split("(")[0].trim(),
                icon: fetchedGuide.split("(")[1].split(")")[0],
                content: fetchedGuide.split("\n").slice(1).join("\n")
            });
        })();
    }, []);

    return (
        <div id="guide">

            <Head
                title="Guide - Illustra"
                description="Illustra, the object-oriented, document based, Node.js image processing toolkit"
            />
            <NavBar />

            <GuidesSidebar />

            {guide && (
                <div className="content">

                    <div className="title">
                        <img className="icon" src={guide.icon} />
                        <p className="text">{guide.title}</p>
                    </div>

                    <div className="divider" />

                    <ReactMarkdown
                        source={guide.content}
                        className="guide-content"
                        linkTarget="_blank"
                        renderers={{
                            code: props => (
                                <div className="guide-codeblock">
                                    <Codeblock
                                        path="Sample Code"
                                        content={props.value}
                                    />
                                </div>
                            )
                        }}
                    />

                </div>
            )}

        </div>
    );
};

export default Guide;