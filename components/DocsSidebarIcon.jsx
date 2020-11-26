import React from "react";
import "./docsSidebarIcon.scss";

const DocsSidebarIcon = props => (
    <div id="docs-sidebar-icon">
        <p className="letter">{props.letter}</p>
    </div>
);

export default DocsSidebarIcon;