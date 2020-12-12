import React from "react";
import Head from "../components/Head";
import NavBar from "../components/NavBar";
import GuidesSidebar from "../components/GuidesSidebar";
import Guide from "../components/Guide";
import "./guides.scss";

const Guides = () => (
    <div id="guides">

        <Head
            title="Guides - Illustra"
            description="Illustra, the object-oriented, document based, Node.js image processing toolkit"
        />
        <NavBar />

        <GuidesSidebar />

        <div className="content">

            <div className="title">
                <img className="icon" src="/assets/page-pink.svg" />
                <p className="text">Guides</p>
            </div>

            <div className="divider" />

            <p className="guide-section-title">Basics</p>

            <div className="guide-section basics">

                <Guide
                    title="Documents and Layers"
                    description="Learn how to manage layers and how you can use documents to organize them"
                    icon="file"
                    slug="documents-and-layers"
                    className="main-small"
                />

                <Guide
                    title="Getting Started"
                    description="The basics you need to know to start using Illustra"
                    icon="star"
                    slug="getting-started"
                    className="main"
                />

                <Guide
                    title="Transformations"
                    description="Learn how you can move, rotate, reflect, and align layers"
                    icon="transform-arrows"
                    slug="transformations"
                    className="main-small"
                />

                <Guide
                    title="Text Layers"
                    description="Learn how to add text to your document and style it"
                    icon="text"
                    slug="text-layers"
                    className="thin"
                />

                <Guide
                    title="Shape Layers"
                    description="Learn how to add shapes to your document and style them"
                    icon="circle"
                    slug="shape-layers"
                    className="thin"
                />

            </div>

            <p className="guide-section-title">Advanced Topics</p>

            <div className="guide-section advanced-topics">

                <Guide
                    title="Clipping Masks"
                    description="Learn how to create and use clipping masks with examples of what they can be used for"
                    icon="scissors"
                    slug="clipping-masks"
                    className="main"
                />

                <Guide
                    title="Blend Modes"
                    description="Learn about mixing colors with blend modes"
                    icon="blend"
                    slug="blend-modes"
                    className="main"
                />

            </div>

            <p className="guide-section-title">Contributing</p>

            <div className="guide-section contributing">

                <Guide
                    title="Best Practices"
                    description="Get familiar with Illustra's best practices and code styling"
                    icon="thumbs-up"
                    slug="best-practices"
                    className="main-small"
                />

                <Guide
                    title="Contributing"
                    description="Learn how you can contribute to Illustra's development"
                    icon="heart"
                    slug="contributing"
                    className="main"
                />

                <Guide
                    title="Internal Libraries"
                    description="Learn about the libraries Illustra uses internally"
                    icon="books"
                    slug="internal-libraries"
                    className="main-small"
                />

                <Guide
                    title="Exporting Modules"
                    description="Learn how Illustra handles exporting modules"
                    icon="export"
                    slug="exporting-modules"
                    className="other"
                />

                <Guide
                    title="Async with Constructors"
                    description="Learn how Illustra handles the need for asynchronous constructors"
                    icon="plus"
                    slug="async-with-constructors"
                    className="other"
                />

                <Guide
                    title="Testing and Docs"
                    description="Learn how we write tests and generate documentation"
                    icon="vial"
                    slug="testing-and-docs"
                    className="other last"
                />

            </div>

        </div>

    </div>
);

export default Guides;