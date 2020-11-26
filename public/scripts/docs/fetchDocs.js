import fetch from "node-fetch";
import parseClass from "./parse/class/main";
import parseFunction from "./parse/function";
import parseInterface from "./parse/interface";
import parseTypeAlias from "./parse/typeAlias";
import getTarget from "./getTarget";

const fetchDocs = async () => {

    // Fetch docs
    let fetchedDocs = await fetch("https://raw.githubusercontent.com/APixelVisuals/illustra/master/docs/docs.json");
    fetchedDocs = await fetchedDocs.json();

    // Define data
    const data = {
        classes: [],
        functions: [],
        interfaces: [],
        typeAliases: []
    };

    // Get `index.ts`
    const index = fetchedDocs.children.find(m => m.name === `"index"`);

    // Loop through exported modules
    index.children.forEach(m => {

        // Get target module
        const targetModule = getTarget(fetchedDocs, m);

        // Parse
        if (targetModule.kindString === "Class") data.classes.push(parseClass(targetModule));
        else if (targetModule.kindString === "Function") data.functions.push(parseFunction(targetModule));
        else if (targetModule.kindString === "Interface") data.interfaces.push(parseInterface(targetModule));
        else if (targetModule.kindString === "Type alias") data.typeAliases.push(parseTypeAlias(targetModule));
    });

    // Return
    return data;
};

export default fetchDocs;