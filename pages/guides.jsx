import React from "react";
import { Guides } from "@apixelvisuals/typedoc-frontend";
import Head from "../components/Head";
import NavBar from "../components/NavBar";

const GuidesPage = () => (
    <div id="guides">

        <Head
            title="Guides - Illustra"
            description="Illustra, the object-oriented, document based, Node.js image processing toolkit"
        />
        <NavBar />

        <Guides
            icon="/assets/page-pink.svg"
            sections={[
                {
                    name: "Basics",
                    className: "basics",
                    guides: [
                        {
                            name: "Documents and Layers",
                            description: "Learn how to manage layers and how you can use documents to organize them",
                            icon: "/assets/guides/file.svg",
                            slug: "documents-and-layers",
                            url: "https://raw.githubusercontent.com/APixelVisuals/illustra/master/guides/documents-and-layers.md",
                            className: "main-small"
                        },
                        {
                            name: "Getting Started",
                            description: "The basics you need to know to start using Illustra",
                            icon: "/assets/guides/star.svg",
                            slug: "getting-started",
                            url: "https://raw.githubusercontent.com/APixelVisuals/illustra/master/guides/getting-started.md",
                            className: "main"
                        },
                        {
                            name: "Transformations",
                            description: "Learn how you can move, rotate, reflect, and align layers",
                            icon: "/assets/guides/transform-arrows.svg",
                            slug: "transformations",
                            url: "https://raw.githubusercontent.com/APixelVisuals/illustra/master/guides/transformations.md",
                            className: "main-small"
                        },
                        {
                            name: "Text Layers",
                            description: "Learn how to add text to your document and style it",
                            icon: "/assets/guides/text.svg",
                            slug: "text-layers",
                            url: "https://raw.githubusercontent.com/APixelVisuals/illustra/master/guides/text-layers.md",
                            className: "thin"
                        },
                        {
                            name: "Shape Layers",
                            description: "Learn how to add shapes to your document and style them",
                            icon: "/assets/guides/circle.svg",
                            slug: "shape-layers",
                            url: "https://raw.githubusercontent.com/APixelVisuals/illustra/master/guides/shape-layers.md",
                            className: "thin"
                        }
                    ]
                },
                {
                    name: "Advanced Topics",
                    className: "advanced-topics",
                    guides: [
                        {
                            name: "Clipping Masks",
                            description: "Learn how to create and use clipping masks with examples of what they can be used for",
                            icon: "/assets/guides/scissors.svg",
                            slug: "clipping-masks",
                            url: "https://raw.githubusercontent.com/APixelVisuals/illustra/master/guides/clipping-masks.md",
                            className: "main"
                        },
                        {
                            name: "Blend Modes",
                            description: "Learn about mixing colors with blend modes",
                            icon: "/assets/guides/blend.svg",
                            slug: "blend-modes",
                            url: "https://raw.githubusercontent.com/APixelVisuals/illustra/master/guides/blend-modes.md",
                            className: "main"
                        }
                    ]
                },
                {
                    name: "Contributing",
                    className: "contributing",
                    guides: [
                        {
                            name: "Best Practices",
                            description: "Get familiar with Illustra's best practices and code styling",
                            icon: "/assets/guides/thumbs-up.svg",
                            slug: "best-practices",
                            url: "https://raw.githubusercontent.com/APixelVisuals/illustra/master/guides/best-practices.md",
                            className: "main-small"
                        },
                        {
                            name: "Contributing",
                            description: "Learn how you can contribute to Illustra's development",
                            icon: "/assets/guides/heart.svg",
                            slug: "contributing",
                            url: "https://raw.githubusercontent.com/APixelVisuals/illustra/master/guides/contributing.md",
                            className: "main"
                        },
                        {
                            name: "Internal Libraries",
                            description: "Learn about the libraries Illustra uses internally",
                            icon: "/assets/guides/books.svg",
                            slug: "internal-libraries",
                            url: "https://raw.githubusercontent.com/APixelVisuals/illustra/master/guides/internal-libraries.md",
                            className: "main-small"
                        },
                        {
                            name: "Exporting Modules",
                            description: "Learn how Illustra handles exporting modules",
                            icon: "/assets/guides/export.svg",
                            slug: "exporting-modules",
                            url: "https://raw.githubusercontent.com/APixelVisuals/illustra/master/guides/exporting-modules.md",
                            className: "other"
                        },
                        {
                            name: "Async with Constructors",
                            description: "Learn how Illustra handles the need for asynchronous constructors",
                            icon: "/assets/guides/plus.svg",
                            slug: "async-with-constructors",
                            url: "https://raw.githubusercontent.com/APixelVisuals/illustra/master/guides/async-with-constructors.md",
                            className: "other"
                        },
                        {
                            name: "Testing and Docs",
                            description: "Learn how we write tests and generate documentation",
                            icon: "/assets/guides/vial.svg",
                            slug: "testing-and-docs",
                            url: "https://raw.githubusercontent.com/APixelVisuals/illustra/master/guides/testing-and-docs.md",
                            className: "other last"
                        }
                    ]
                }
            ]}
        />

    </div>
);

export default GuidesPage;