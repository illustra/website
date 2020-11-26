const type = typeData => {

    // Parse
    if (typeData.type === "intrinsic") return { data: typeData.name };
    else if (typeData.type === "union") return { type: "union", data: typeData.types.map(t => type(t)) };
    else if (typeData.type === "reference") return { type: "reference", data: typeData.name, arguments: typeData.typeArguments && typeData.typeArguments.map(t => type(t)) };
    else if (typeData.type === "stringLiteral") return { type: "literal", data: typeData.value };
};

export default type;