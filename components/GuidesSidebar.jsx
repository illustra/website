import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";

const SidebarItem = props => (
    <a href={`/guide/${props.data.slug}`}><div className="sidebar-item">
        <img src={`/assets/guides/${props.data.icon}.svg`} className="icon" />
        <p className="name">{props.data.title}</p>
    </div></a>
);

const GuidesSidebar = props => {

    // Guides Data
    const [guidesData, setGuidesData] = useState();

    // On load
    useEffect(() => {
        (async () => {

            // Fetch guides
            let fetchedGuidesData = await fetch("https://raw.githubusercontent.com/APixelVisuals/illustra/master/guides/guides.json");
            fetchedGuidesData = await fetchedGuidesData.json();

            // Set guides data
            setGuidesData(fetchedGuidesData);
            if (props.setGuidesData) props.setGuidesData(fetchedGuidesData);
        })();
    }, []);

    return (
        <Sidebar
            title="Guides"
            content={guidesData && guidesData.map(d => (
                <>

                    <p className="sidebar-section-title">{d.name}</p>

                    {d.guides.map(g => <SidebarItem data={g} />)}

                </>
            ))}
        />
    );
};

export default GuidesSidebar;