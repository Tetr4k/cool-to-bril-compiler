const regexWord = /^[0-9a-z_]+/i;
const regexNewLine = /^\n/;
const regexWhiteSpace = /^[\f\r\t\v\s]+/;
const regexSymbols = [
	[/^--/, "LNC"],
	[/^\(\*/, "MLNC_STT"],
	[/^\*\)/, "MLNC_END"],
	[/^<-/, "SYM_ATR"],
	[/^>=/, "OP_GE"],
	[/^<=/, "OP_SE"],
	[/^>/, "OP_GT"],
	[/^</, "OP_ST"],
	[/^=/, "SYM_EQL"],
	[/^\+/, "SYM_ADD"],
	[/^-/, "SYM_SUB"],
	[/^\*/, "SYM_MULT"],
	[/^\//, "SYM_DIV"],
	[/^~/, "SYM_NOT"],
	[/^\./, "SYM_POINT"],
	[/^@/, "SYM_AT"],
	[/^=>/, "SYM_AF"],
	[/^\[/, "SYM_SB_OP"],
	[/^\]/, "SYM_SB_CL"],
	[/^{/, "SYM_CB_OP"],
	[/^}/, "SYM_CB_CL"],
	[/^\(/, "SYM_P_OP"],
	[/^\)/, "SYM_P_CL"],
	[/^\"/, "SYM_STR"],
	[/^\:/, "SYM_DD"],
	[/^,/, "SYM_CM"],
	[/^\\/, "SYM_BARRA"],
	[/^;/, "SYM_DC"],
	[/^!/, "SYM_EX"],
	[/^'/, "SYM_COMMA"],
	[/^'/, "SYM_COMMA2"]
];

const regexKeyWords = [
	[/^case/, "KW_CASE"],
	[/^class/, "KW_CLASS"],
	[/^else/, "KW_ELSE"],
	[/^esac/, "KW_ESAC"],
	[/^fi/, "KW_FI"],
	[/^if/, "KW_IF"],
	[/^inherits/, "KW_INHERITS"], 
	[/^isvoid/, "KW_ISVOID"],
	[/^in/, "KW_IN"],
	[/^let/, "KW_LET"],
	[/^loop/, "KW_LOOP"],
	[/^new/, "KW_NEW"],
	[/^not/, "KW_NOT"],
	[/^of/, "KW_OF"],
	[/^pool/, "KW_POOL"],
	[/^then/, "KW_THEN"],
	[/^while/, "KW_THEN"]
];

const regexEspecialWords = [
	[/^self/, "EW_SELF"],
	[/^SELF_TYPE/, "EW_ST"]
];

function captureTokens(code: string): Array<any>{
	let line = 1;
	let tokens = new Array<any>();
	while (code.length > 0){
		//Remove new line
		let captureNewLine = code.match(regexNewLine);
		if (captureNewLine){
			line++;
			code = code.replace(regexNewLine, "");
			continue;
		}

		//Remove white spaces
		let captureWhiteSpace = code.match(regexWhiteSpace);
		if (captureWhiteSpace){
			code = code.replace(regexWhiteSpace, "");
			continue;
		}

		//Capture symbols
		let replace = regexSymbols.map(regex => {
			let capturedSymbol = code.match(regex[0]);
			if (capturedSymbol) {
				code = code.replace(regex[0], "");
				tokens.push([regex[1], line])
				return true;
			}			
		});
		if (replace.includes(true)) continue;

		//Capture keywords
		let verifyKeyWords = regexKeyWords.map(regex => {
			let capturedWord = code.match(regex[0]);
			if (capturedWord) {
				code = code.replace(regex[0], "");
				tokens.push([regex[1], line])
				return true;
			}			
		});
		if (verifyKeyWords.includes(true)) continue;


		//Capture especial words
		let verifyEspecialWords = regexEspecialWords.map(regex => {
			let capturedWord = code.match(regex[0]);
			if (capturedWord) {
				code = code.replace(regex[0], "");
				tokens.push([regex[1], line])
				return true;
			}			
		});
		if (verifyKeyWords.includes(true)) continue;

		let capturedWord = code.match(regexWord);
		if (capturedWord){
			code = code.replace(regexWord, "");
			tokens.push([capturedWord, line])
			continue;
		}
		return [code.charAt(0), line];
	} 
	
	return tokens;
}

export default captureTokens;