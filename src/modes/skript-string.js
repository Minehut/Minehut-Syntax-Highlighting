// From https://github.com/AyhamAl-Ali/Sk-ST3/blob/master/VSC/src/syntaxes/Sk-VSC.json
module.exports = {
    defineSkriptStringMode(CodeMirror) {
        CodeMirror.defineSimpleMode("skript-string", {
            start: [
                {regex: /(\|\||%nl%|%newline%)/, token: "string-quoted-double-newline"},
                {regex: /%.*?%/, token: "string-quoted-double-variable"},
                {regex: /'/, token: "string-quoted-double-variable"},
                {regex: /\{@.*?\}/, token: "string-quoted-double-options"},
                {regex: /((&|§)0|<black>)/, token: "color-0"},
                {regex: /((&|§)1|<(blue|dark blue)>)/, token: "color-1"},
                {regex: /((&|§)2|<(green|dark green)>)/, token: "color-2"},
                {regex: /((&|§)3|<(cyan|aqua|dark cyan|dark aqua)>)/, token: "color-3"},
                {regex: /((&|§)4|<(red|dark red)>)/, token: "color-4"},
                {regex: /((&|§)5|<(purple|dark purple)>)/, token: "color-5"},
                {regex: /((&|§)6|<(orange|gold|dark yellow)>)/, token: "color-6"},
                {regex: /((&|§)7|<(grey|light grey|gray|light gray|silver)>)/, token: "color-7"},
                {regex: /((&|§)8|<(dark grey|dark gray)>)/, token: "color-8"},
                {regex: /((&|§)9|<(light blue)>)/, token: "color-9"},
                {regex: /((&|§)a|<(light green|lime|lime green)>)/, token: "color-a"},
                {regex: /((&|§)b|<(light cyan|light aqua)>)/, token: "color-b"},
                {regex: /((&|§)c|<(pink|light red)>)/, token: "color-c"},
                {regex: /((&|§)d|<(magenta|light purple)>)/, token: "color-d"},
                {regex: /((&|§)e|<(yellow|light yellow)>)/, token: "color-e"},
                {regex: /((&|§)f|<white>)/, token: "color-f"},
                {regex: /((&|§)l|<(bold|b)>)/, token: "color-l"},
                {regex: /((&|§)o|<(italics|italic|i)>)/, token: "color-o"},
                {regex: /((&|§)n|<(underlined|underline|u)>)/, token: "color-n"},
                {regex: /((&|§)m|<(strikethrough|strike|s)>)/, token: "color-m"},
                {regex: /((&|§)k|<magic>)/, token: "color-k"},
                {regex: /((&|§)r|<(reset|r)>)/, token: "color-r"},
                {regex: /\w+/, token: "string-quoted-double"},
            ],
        });
    },
};
