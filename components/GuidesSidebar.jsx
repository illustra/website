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

    // Search query
    const [searchQuery, setSearchQuery] = useState("");

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

    // Get guides
    let guides;
    if (guidesData) {

        guides = JSON.parse(JSON.stringify(guidesData));

        guides.forEach(d => d.guides = d.guides.filter(g => {

            // Get names
            const itemName = g.title.toLowerCase().replace(/\s+/g, "");
            const searchQueryName = searchQuery.toLowerCase().replace(/\s+/g, "");

            // Return
            return itemName.includes(searchQueryName) || searchQueryName.includes(itemName);
        }));

        guides = guides.filter(d => d.guides.length);
    }

    return (
        <Sidebar
            title="Guides"
            content={guides && guides.map(d => (
                <>

                    <p className="sidebar-section-title">{d.name}</p>

                    {d.guides.map(g => <SidebarItem data={g} />)}

                </>
            ))}
            search={setSearchQuery}
        />
    );
};

export default GuidesSidebar;