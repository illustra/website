import React, { useState } from "react";
import TypeIcon from "./TypeIcon";
import "./docsSidebar.scss";

const DocsSidebar = props => {

    // Sidebar open
    const [sidebarOpen, setSidebarOpen] = useState(false);

    // Search
    const search = input => {

        //
    };

    return (
        <div id="docs-sidebar" className={sidebarOpen && "open"}>

            <p className="sidebar-title">Documentation</p>

            <div className="divider" />

            <div className="search">
                <p className="search-title">Search</p>
                <input type="text" className="search-bar" onInput={e => search(e.target.value)} />
            </div>

            {props.docs && (
                <div className="pages">

                    <p className="pages-title">Classes</p>

                    {props.docs.classes.map(c => (
                        <button onClick={() => props.setPath(`/classes/${c.name}`)}><div className="page">
                            <TypeIcon letter="C" />
                            <p className="name">{c.name}</p>
                            <img src="/assets/expand.svg" className="expand" />
                        </div></button>
                    ))}

                    <p className="pages-title">Functions</p>

                    {props.docs.functions.map(f => (
                        <button onClick={() => props.setPath(`/functions/${f.name}`)}><div className="page">
                            <TypeIcon letter="F" />
                            <p className="name">{f.name}</p>
                        </div></button>
                    ))}

                    <p className="pages-title">Interfaces</p>

                    {props.docs.interfaces.map(i => (
                        <button onClick={() => props.setPath(`/interfaces/${i.name}`)}><div className="page">
                            <TypeIcon letter="I" />
                            <p className="name">{i.name}</p>
                        </div></button>
                    ))}

                    <p className="pages-title">Type Aliases</p>

                    <button onClick={() => props.setPath("/typeAliases")}><div className="page">
                        <TypeIcon letter="T" />
                        <p className="name">Type Aliases</p>
                    </div></button>

                </div>
            )}

        </div>
    );
};

export default DocsSidebar;