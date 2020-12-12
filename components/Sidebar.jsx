import React, { useState } from "react";
import TypeIcon from "./TypeIcon";
import "./sidebar.scss";

const Sidebar = props => {

    // Sidebar open
    const [sidebarOpen, setSidebarOpen] = useState(false);

    // Search
    const search = input => {

        //
    };

    return (
        <div id="sidebar" className={sidebarOpen && "open"}>

            <p className="sidebar-title">{props.title}</p>

            <div className="divider" />

            <div className="search">
                <p className="search-title">Search</p>
                <input type="text" className="search-bar" onInput={e => search(e.target.value)} />
            </div>

            <div className="pages">
                {props.content}
            </div>

        </div>
    );
};

export default Sidebar;