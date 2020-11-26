import parseConstructor from "./constructor";
import parseProperty from "./property";
import parseMethod from "./method";

const main = targetModule => {

    // Define data
    const data = {
        name: targetModule.name,
        properties: [],
        methods: []
    };

    // Loop through children
    targetModule.children.forEach(m => {

        // Parse
        if (m.kindString === "Constructor") data.classConstructor = parseConstructor(m);
        else if (m.kindString === "Property") data.properties.push(parseProperty(m));
        else if (m.kindString === "Method") data.methods.push(parseMethod(m));
    });

    // Return
    return data;
};

export default main;