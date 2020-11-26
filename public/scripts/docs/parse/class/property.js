import parseType from "../type";

const parseProperty = targetModule => {

    // Return
    return {
        name: targetModule.name,
        comment: targetModule.comment.text.trim(),
        type: parseType(targetModule.type),
        private: targetModule.name.startsWith("_")
    };
};

export default parseProperty;