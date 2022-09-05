import Token from "../classes/Token";
import ErrorToken from "../classes/ErrorToken";

const regexWord = /^[0-9a-z_]+/i;

const regexNewLine = /^\n/;

const regexWhiteSpace = /^[\f\r\t\v\s]+/;

const regexSymbols = [
	[/^--/, "SYM_LNC"],
	[/^\(\*/, "SYM_MLNC_STT"],
	[/^\*\)/, "SYM_MLNC_END"],
	[/^<-/, "SYM_ATR"],
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
];

const regexKeyWords = [
	[/^case[^0-9a-z_]/i, "KW_CASE"],
	[/^class[^0-9a-z_]/i, "KW_CLASS"],
	[/^else[^0-9a-z_]/i, "KW_ELSE"],
	[/^esac[^0-9a-z_]/i, "KW_ESAC"],
	[/^fi[^0-9a-z_]/i, "KW_FI"],
	[/^if[^0-9a-z_]/i, "KW_IF"],
	[/^inherits[^0-9a-z_]/i, "KW_INHERITS"], 
	[/^isvoid[^0-9a-z_]i/, "KW_ISVOID"],
	[/^in[^0-9a-z_]i/, "KW_IN"],
	[/^let[^0-9a-z_]i/, "KW_LET"],
	[/^loop[^0-9a-z_]i/, "KW_LOOP"],
	[/^new[^0-9a-z_]i/, "KW_NEW"],
	[/^not[^0-9a-z_]i/, "KW_NOT"],
	[/^of[^0-9a-z_]i/, "KW_OF"],
	[/^pool[^0-9a-z_]i/, "KW_POOL"],
	[/^then[^0-9a-z_]i/, "KW_THEN"],
	[/^while[^0-9a-z_]i/, "KW_THEN"]
];

const regexEspecialWords = [
	[/^self/, "EW_SELF"],
	[/^SELF_TYPE/, "EW_ST"]
];

function doLexAnalysis(code: string): Array<Token>{
	let line = 1;
	let tokens = new Array<Token>();
	while (code.length > 0){
		//Remove new line
		if (code.match(regexNewLine)){
			line++;
			code = code.replace(regexNewLine, "");
			continue;
		}

		//Remove white spaces
		if (code.match(regexWhiteSpace)){
			code = code.replace(regexWhiteSpace, "");
			continue;
		}

		//Capture symbols
		let replace = regexSymbols.map(regex => {
			if (code.match(regex[0])) {
				code = code.replace(regex[0], "");
				tokens.push(new Token(regex[1], line))
				return true;
			}			
		});
		if (replace.includes(true)) continue;

		//Capture keywords
		let verifyKeyWords = regexKeyWords.map(regex => {
			if (code.match(regex[0])) {
				code = code.replace(regex[0], "");
				tokens.push(new Token(regex[1], line))
				return true;
			}			
		});
		if (verifyKeyWords.includes(true)) continue;


		//Capture especial words
		let verifyEspecialWords = regexEspecialWords.map(regex => {
			if (code.match(regex[0])) {
				code = code.replace(regex[0], "");
				tokens.push(new Token(regex[1], line))
				return true;
			}			
		});
		if (verifyEspecialWords.includes(true)) continue;

		let capturedWord = code.match(regexWord);
		if (capturedWord){
			code = code.replace(regexWord, "");
			tokens.push(new Token(capturedWord[0], line))
			continue;
		}

		//Token não identificado
		tokens.push(new ErrorToken(code.charAt(0), line));
		break;
	} 
	return tokens;
}

export default doLexAnalysis;
