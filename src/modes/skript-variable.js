// From https://github.com/AyhamAl-Ali/Sk-ST3/blob/master/VSC/src/syntaxes/Sk-VSC.json
module.exports = {
    defineSkriptVariableMode(CodeMirror) {
        CodeMirror.defineSimpleMode("skript-variable", {
            start: [
                {regex: /(\*|\.|::|-)/, token: "variable-parameter"},
                {regex: /%.*?%/, token: "variable-external"},
                {regex: /\w+/, token: "variable-string"},
            ],
        });
    },
};
