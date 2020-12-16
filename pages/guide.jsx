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
    const [guideData, setGuideData] = useState();

    // On load
    useEffect(() => {
        (async () => {

            // Fetch guide
            let fetchedGuide = await fetch(`https://raw.githubusercontent.com/APixelVisuals/illustra/master/guides/${window.location.href.split("/guide/")[1]}.md`);
            fetchedGuide = await fetchedGuide.text();

            // Invalid guide
            if (fetchedGuide === "404: Not Found") return window.location = "/guides";

            // Set guide
            setGuide(fetchedGuide);
        })();
    }, []);

    return (
        <div id="guide">

            <Head
                title="Guide - Illustra"
                description="Illustra, the object-oriented, document based, Node.js image processing toolkit"
            />
            <NavBar />

            <GuidesSidebar setGuidesData={data => setGuideData(data.map(d => d.guides).flat().find(g => g.slug === window.location.href.split("/guide/")[1]))} />

            {guide && guideData && (
                <div className="content">

                    <div className="title">
                        <img className="icon" src={`/assets/guides/${guideData.icon}.svg`} />
                        <p className="text">{guideData.title}</p>
                    </div>

                    <div className="divider" />

                    <ReactMarkdown
                        source={guide}
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