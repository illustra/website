import React, { useEffect, useState } from "react";
import DocsSidebarIcon from "./DocsSidebarIcon";
import fetchDocs from "../public/scripts/docs/fetchDocs";
import "./docsSidebar.scss";

const DocsSidebar = props => {

    // Docs
    const [docs, setDocs] = useState();

    // On load
    useEffect(() => {
        (async () => {

            // Fetch docs
            const docsData = await fetchDocs();

            console.log(docsData);

            // Set docs
            setDocs(docsData);
        })();
    }, []);

    return (
        <div id="docs-sidebar">

            <p className="sidebar-title">Documentation</p>

            <div className="divider" />

            <div className="search">
                <p className="search-title">Search</p>
                <input type="text" className="search-bar" onInput={e => search(e.target.value)} />
            </div>

            {docs && (
                <div className="pages">

                    <p className="pages-title">Classes</p>

                    {docs.classes.map(c => (
                        <button onClick={() => props.setPath(`/classes/${c.name}`)}><div className="page">
                            <DocsSidebarIcon letter="C" />
                            <p className="name">{c.name}</p>
                            <img src="/assets/expand.svg" className="expand" />
                        </div></button>
                    ))}

                    <p className="pages-title">Functions</p>

                    {docs.functions.map(f => (
                        <button onClick={() => props.setPath(`/functions/${f.name}`)}><div className="page">
                            <DocsSidebarIcon letter="F" />
                            <p className="name">{f.name}</p>
                        </div></button>
                    ))}

                    <p className="pages-title">Interfaces</p>

                    {docs.interfaces.map(i => (
                        <button onClick={() => props.setPath(`/interfaces/${i.name}`)}><div className="page">
                            <DocsSidebarIcon letter="I" />
                            <p className="name">{i.name}</p>
                        </div></button>
                    ))}

                    <p className="pages-title">Type Aliases</p>

                    {docs.typeAliases.map(ta => (
                        <button onClick={() => props.setPath(`/typeAliases/${ta.name}`)}><div className="page">
                            <DocsSidebarIcon letter="T" />
                            <p className="name">{ta.name}</p>
                        </div></button>
                    ))}

                </div>
            )}

        </div>
    );
};

const search = input => {

    //
};

export default DocsSidebar;