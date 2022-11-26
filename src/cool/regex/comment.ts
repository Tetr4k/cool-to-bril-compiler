const lineComment = /^--.*(?=\n|$)/;
const multiLineComment = /^\(\*[^]*?\*\)/;

export { lineComment, multiLineComment };