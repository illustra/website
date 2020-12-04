import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import Head from "../components/Head";
import NavBar from "../components/NavBar";
import DocsSidebar from "../components/DocsSidebar";
import TypeIcon from "../components/TypeIcon";
import fetchDocs from "../public/scripts/docs/fetchDocs";
import "./docs.scss";

const Docs = () => {

    // Docs
    const [docs, setDocs] = useState();
    const [docsData, setDocsData] = useState();
    const [docsType, setDocsType] = useState();
    const [jumpTo, setJumpTo] = useState();

    // Set path
    const setPath = (path, parsedDocs = docs) => {

        // Set url
        window.history.pushState(null, null, `/docs${path}`);

        // Get docs type
        let thisDocsType;
        if (path.startsWith("/classes/")) thisDocsType = "class";
        else if (path.startsWith("/functions/")) thisDocsType = "function";
        else if (path.startsWith("/interfaces/")) thisDocsType = "interface";
        else if (path.startsWith("/typeAliases/")) thisDocsType = "typeAlias";

        // Get docs data
        let thisDocsData;
        const parsedPath = path.split("/")[2].split("#")[0];
        if (thisDocsType === "class") thisDocsData = parsedDocs.classes.find(c => c.name === parsedPath);
        else if (thisDocsType === "function") thisDocsData = parsedDocs.functions.find(i => i.name === parsedPath);
        else if (thisDocsType === "interface") thisDocsData = parsedDocs.interfaces.find(i => i.name === parsedPath);
        else if (thisDocsType === "typeAlias") thisDocsData = parsedDocs.typeAliases.find(i => i.name === parsedPath);

        console.log(thisDocsData);

        // Set docs data
        setDocsData(thisDocsData);
        setDocsType(thisDocsType);
        setJumpTo(path.split("#")[1]);
    };

    // Set jump
    const setJump = jump => {

        // Get path
        const path = (window.location.href.split("/docs")[1] || "/").split("#")[0];

        // Set path
        setPath(`${path}#${jump}`);
    };

    // Type link
    const typeLink = type => {

        // Built in type
        if (type === "string") return <a className="type-link" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String" target="_blank">string</a>;
        else if (type === "number") return <a className="type-link" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number" target="_blank">number</a>;
        else if (type === "boolean") return <a className="type-link" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean" target="_blank">boolean</a>;
        else if (type === "undefined") return <a className="type-link" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined" target="_blank">undefined</a>;
        else if (type === "Array") return <a className="type-link" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" target="_blank">Array</a>;
        else if (type === "Promise") return <a className="type-link" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">Promise</a>;

        // Custom type
        if (docs.classes.find(c => c.name === type)) return <p className="type-link" onClick={() => setPath(`/classes/${type}`)}>{type}</p>;
        else if (docs.interfaces.find(c => c.name === type)) return <p className="type-link" onClick={() => setPath(`/interface/${type}`)}>{type}</p>;
        else if (docs.typeAliases.find(c => c.name === type)) return <p className="type-link" onClick={() => setPath(`/typeAlias/${type}`)}>{type}</p>;
    };

    // Type string
    const typeString = type => {

        // Parse
        if (!type.type) return typeLink(type.data);
        else if (type.type === "union") return <p className="type-group">{type.data.map(t => typeString(t)).reduce((e, acc) => [e, " | ", acc])}</p>;
        else if (type.type === "reference") return <p className="type-group">{type.arguments ? <span>{typeLink(type.data)}&lt;{type.arguments.map(t => typeString(t)).reduce((e, acc) => [e, ", ", acc])}&gt;</span> : typeLink(type.data)}</p>;
        else if (type.type === "typeParameter") return <p className="type-group">{typeLink(type.data)}</p>;
        else if (type.type === "stringLiteral") return type.data;
        else if (type.type === "booleanLiteral") return type.data;
    };

    // On load
    useEffect(() => {
        (async () => {

            // Fetch docs
            const fetchedDocs = await fetchDocs();

            console.log(fetchedDocs);

            // Set docs
            setDocs(fetchedDocs);

            // Set path
            setPath(window.location.href.split("/docs")[1] || "/", fetchedDocs);
        })();
    }, []);

    return (
        <div id="docs">

            <Head
                title="Docs - Illustra"
                description="Illustra, the object-oriented, document based, Node.js image processing toolkit"
            />
            <NavBar />

            <DocsSidebar docs={docs} setPath={setPath} />

            {(docsData && docsType) && (
                <div className="content">

                    <div className="title">

                        <TypeIcon letter={docsType.charAt(0).toUpperCase()} large={true} />

                        <div className="title-text">

                            <h2 className="text">{docsData.name}</h2>

                            {docsData.extends && (
                                <p className="extends"><span>Extends</span> {typeString(docsData.extends)}</p>
                            )}

                        </div>

                    </div>

                    <div className="divider" />

                    {docsType === "class" && (
                        <>

                            <div className="table-of-contents">

                                <div className="section">

                                    <div className="name" onClick={() => setJump("properties")}><p className="text">Properties</p></div>

                                    <div className="section-content">
                                        {docsData.properties.filter(p => !p.private).map(p => (
                                            <p className="section-item" onClick={() => setJump(p.name)}>{p.name}</p>
                                        ))}
                                    </div>

                                </div>

                                <div className="section">

                                    <div className="name" onClick={() => setJump("methods")}><p className="text">Methods</p></div>

                                    <div className="section-content">
                                        {docsData.methods.filter(m => !m.private).map(m => (
                                            <p className="section-item" onClick={() => setJump(m.name)}>{m.name}</p>
                                        ))}
                                    </div>

                                </div>

                            </div>

                            <div className="class-section">

                                <p className="name">Properties</p>

                                {docsData.properties.filter(p => !p.private).map(p => (
                                    <div className="property">

                                        <div className="property-name">
                                            <p className="section-item-name" onClick={() => setJump(p.name)}><span>{docsData.name}</span>.{p.name}</p>
                                            <p className="type">{typeString(p.type)}</p>
                                        </div>

                                        <div className="section-content">
                                            <ReactMarkdown source={p.comment} className="comment" />
                                        </div>

                                    </div>
                                ))}

                            </div>

                            <div className="class-section">

                                <p className="name">Methods</p>

                                {docsData.methods.filter(m => !m.private).map(m => (
                                    <div className="method">

                                        <p className="section-item-name" onClick={() => setJump(m.name)}><span>{docsData.name}</span>.{m.name}({m.parameters.length ? m.parameters.map(p => <span className="name-parameter">{p.name}</span>).reduce((e, acc) => [e, ", ", acc]) : null})</p>

                                        <div className="section-content">

                                            <ReactMarkdown source={m.comment} className="comment" />

                                            <div className="parameters">
                                                {m.parameters.map(p => (
                                                    <div className="parameter">
                                                        <div className="parameter-title">
                                                            <p className="parameter-name">{p.name} </p>
                                                            <p className="type">{typeString(p.type)} </p>
                                                        </div>
                                                        <ReactMarkdown source={p.comment} className="comment small" />
                                                    </div>
                                                ))}
                                            </div>

                                            {m.returnType && (
                                                <>
                                                    <p className="returns"><span className="highlight">Returns</span> {typeString(m.returnType)}</p>
                                                    <ReactMarkdown source={m.returnComment} className="comment small" />
                                                </>
                                            )}

                                        </div>

                                    </div>
                                ))}

                            </div>

                        </>
                    )}

                </div>
            )}

        </div>
    );
};

export default Docs;