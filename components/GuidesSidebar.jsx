import React from "react";
import Sidebar from "./Sidebar";

const SidebarItem = props => (
    <a href={`/guide/${props.guideData.slug}`}><div className="sidebar-item">
        <img src={`/assets/guides/${props.guideData.icon}.svg`} className="icon" />
        <p className="name">{props.guideData.title}</p>
    </div></a>
);

const GuidesSidebar = props => (
    <Sidebar
        title="Guides"
        content={(
            <>

                <p className="sidebar-section-title">Basics</p>

                {[
                    { title: "Getting Started", icon: "star", slug: "getting-started" },
                    { title: "Documents and Layers", icon: "file", slug: "documents-and-layers" },
                    { title: "Transformations", icon: "transform-arrows", slug: "transformations" },
                    { title: "Text Layers", icon: "text", slug: "text-layers" },
                    { title: "Shape Layers", icon: "circle", slug: "shape-layers" }
                ].map(g => <SidebarItem guideData={g} />)}

                <p className="sidebar-section-title">Advanced Topics</p>

                {[
                    { title: "Clipping Masks", icon: "scissors", slug: "clipping-masks" },
                    { title: "Blend Modes", icon: "blend", slug: "blend-modes" }
                ].map(g => <SidebarItem guideData={g} />)}

                <p className="sidebar-section-title">Contributing</p>

                {[
                    { title: "Contributing", icon: "heart", slug: "contributing" },
                    { title: "Best Practices", icon: "thumbs-up", slug: "best-practices" },
                    { title: "Internal Libraries", icon: "books", slug: "internal-libraries" },
                    { title: "Exporting Modules", icon: "export", slug: "exporting-modules" },
                    { title: "Async with Constructors", icon: "plus", slug: "async-with-constructors" },
                    { title: "Testing and Docs", icon: "vial", slug: "testing-and-docs" }
                ].map(g => <SidebarItem guideData={g} />)}

            </>
        )}
    />
);

export default GuidesSidebar;