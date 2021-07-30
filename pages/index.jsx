import React from "react";
import { Codeblock } from "@apixelvisuals/typedoc-frontend";
import Head from "../components/Head";
import NavBar from "../components/NavBar";
import HorizontalComponent from "../components/HorizontalComponent";
import styles from "./index.module.scss";

const Index = () => {

    return (
        <div className={styles.index}>

            <Head
                title="Illustra"
                description="Illustra, the object-oriented, document based, Node.js image processing toolkit"
            />
            <NavBar />

            <div className={styles.intro_wrapper}>
                <HorizontalComponent
                    left={(
                        <div className={styles.intro}>

                            <p className={styles.title}>Illustra</p>

                            <p className={styles.description}>Illustra is an object-oriented, document based Node.js image processing toolkit, complete with utility functions to make development a breeze.</p>

                            <div className={styles.buttons}>

                                <button className={styles.button} onClick={() => window.scrollTo({
                                    top: document.querySelector(".features").getBoundingClientRect().top + window.pageYOffset,
                                    behavior: "smooth"
                                })}>Features</button>
                                <a href="/docs" className={styles.main_button}>Documentation</a>
                                <a href="/github" className={styles.button} target="_blank">GitHub</a>

                            </div>

                        </div>
                    )}
                    right={(
                        <Codeblock
                            path="src/generate/banner.js"
                            width="85%"
                            height="60vh"
                            content={`import { Document } from "illustra";\n\nexport default async function banner() {\n\n    // Create document\n    const document = new Document({\n        name: "Banner",\n        width: 1500,\n        height: 500\n    });\n\n    // Add background\n    const bg = await document.createLayer({\n        name: "background",\n        file: "src/assets/background.png"\n    });\n\n    // Add logo\n    const logo = await document.createLayer({\n        name: "logo",\n        file: "src/assets/logo.png",\n        top: 150,\n        left: 300\n    });\n\n    // Align logo to center\n    logo.align();\n\n    // Export\n    await document.exportTo("png", "file", "out/banner.png");\n}`}
                            colors={{
                                background: "#252550",
                                backgroundDark: "#171731",
                                primary: "#574ae2",
                                accent: "#f63e70",
                                text: "#7c72eb",
                                textLight: "#978fee",
                                textLighter: "#ada9e4",
                                codeblockBackground: "#7c72eb45"
                            }}
                        />
                    )}
                />
            </div>

            <div className={styles.features}>

                <div className={styles.feature_wrapper}>
                    <HorizontalComponent
                        left={(
                            <div className={styles.feature}>

                                <p className={styles.title}>Document Based</p>

                                <p className={styles.description}>Illustra is modeled similar to Adobe's Photoshop. This provides a familiar structure that's easy to work with. Illustra uses the concept of <a href="/docs/classes/Document">Documents</a> and <a href="/docs/classes/BaseLayer">Layers</a> to let you organize your canvas however you need.</p>

                                <div className={styles.learn_more}>
                                    <p className={styles.text}>Learn more</p>
                                    <a href="/guide/documents-and-layers" className={styles.button}>Documents and Layers</a>
                                </div>

                            </div>
                        )}
                        right={(
                            <img src="/assets/document-based.svg" alt="Document based" className={styles.image} />
                        )}
                    />
                </div>

                <div className={styles.feature_wrapper}>
                    <HorizontalComponent
                        left={(
                            <div className={styles.feature}>

                                <p className={styles.title}>High Level</p>

                                <p className={styles.description}>Illustra comes with plenty of utility functions and high level APIs, like the <a href="/docs/classes/BaseLayer#align"><code>Layer.align()</code></a> method to make development easy. Illustra also takes care of simple yet important things, like automatic overflow when overlaying images - something some image processing libraries leave out.</p>

                                <div className={styles.learn_more}>
                                    <p className={styles.text}>Learn more</p>
                                    <a href="/docs" className={styles.button}>Documentation</a>
                                </div>

                            </div>
                        )}
                        right={(
                            <img src="/assets/high-level.svg" alt="High level" className={styles.image} />
                        )}
                        reflected={true}
                    />
                </div>

                <div className={styles.feature_wrapper}>
                    <HorizontalComponent
                        left={(
                            <div className={styles.feature}>

                                <p className={styles.title}>Clipping Masks</p>

                                <p className={styles.description}>Illustra supports Clipping Masks, allowing you to create a mask to use on another layer. Clipping Masks work the same way they do in Photoshop and can be used to hide parts of another layer.</p>
                                <p className={styles.description}>Illustra also provides utility methods that use Clipping Masks internally, such as the <a href="/docs/classes/BaseLayer#circularMask"><code>BaseLayer.circularMask()</code></a> method.</p>

                                <div className={styles.learn_more}>
                                    <p className={styles.text}>Learn more</p>
                                    <a href="/guide/clipping-masks" className={styles.button}>Clipping Masks</a>
                                </div>

                            </div>
                        )}
                        right={(
                            <img src="/assets/clipping-masks.svg" alt="Clipping masks" className={styles.image} />
                        )}
                    />
                </div>

            </div>

            <img src="/assets/wave.svg" className={styles.wave} />
            <div className={styles.bottom_links}>
                <a href="/docs" className={styles.button}>Documentation</a>
                <a href="/github" className={styles.link} target="_blank">GitHub</a>
            </div>

        </div>
    );
};

export default Index;