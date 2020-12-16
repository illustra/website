import React from "react";
import Sidebar from "./Sidebar";
import TypeIcon from "./TypeIcon";

const DocsSidebar = props => (
    <Sidebar
        title="Documentation"
        content={props.docs && (
            <>

                <p className="sidebar-section-title">Classes</p>

                {props.docs.classes.map(c => (
                    <button onClick={() => props.setPath(`/classes/${c.name}`)}><div className="sidebar-item">
                        <TypeIcon letter="C" />
                        <p className="name">{c.name}</p>
                    </div></button>
                ))}

                <p className="sidebar-section-title">Functions</p>

                <button onClick={() => props.setPath("/functions")}><div className="sidebar-item">
                    <TypeIcon letter="F" />
                    <p className="name">Functions</p>
                </div></button>

                <p className="sidebar-section-title">Interfaces</p>

                {props.docs.interfaces.map(i => (
                    <button onClick={() => props.setPath(`/interfaces/${i.name}`)}><div className="sidebar-item">
                        <TypeIcon letter="I" />
                        <p className="name">{i.name}</p>
                    </div></button>
                ))}

                <p className="sidebar-section-title">Type Aliases</p>

                <button onClick={() => props.setPath("/typeAliases")}><div className="sidebar-item">
                    <TypeIcon letter="T" />
                    <p className="name">Type Aliases</p>
                </div></button>

            </>
        )}
    />
);

export default DocsSidebar;