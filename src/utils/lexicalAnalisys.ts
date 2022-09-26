import Token from "../classes/Token";
import ErrorToken from "../classes/ErrorToken";
import TokenType from "../types/TokenType";

const regexString = /^\"[^]*?\"/;
const regexInteger =  /^\d+/;

const regexLineComment = /^--.*(?=\n|$)/;
const regexMultiLineComment = /^\(\*[^]*?\*\)/;

const regexID = /^\w+/i;

const regexNewLine = /^\n/;
const regexNewLines = /\n/g;

const regexWhiteSpace = /^[\f\t\s\r\v]/;

const regexSymbols = [
	/^<-/,	// <-
	/^<=/,	// <=
	/^</,	// <
	/^=>/,	// =>
	/^=/,	// =
	/^\+/,	// +
	/^-/,	// -
	/^\*/,	// *
	/^\//,	// /
	/^~/,	// ~
	/^\./,	// .
	/^@/,	// @
	/^{/,	// {
	/^}/,	// }
	/^\(/,	// (
	/^\)/,	// )
	/^\:/,	// :
	/^,/,	// ,
	/^;/	// ;
];

const regexKeyWords = [
	/^case(?!\w)/i,		//case
	/^class(?!\w)/i,	//class
	/^else(?!\w)/i,		//else
	/^esac(?!\w)/i,		//esac
	/^fi(?!\w)/i,		//fi
	/^if(?=[^\w])/i,	//if
	/^inherits(?!\w)/i,	//inherits
	/^isvoid(?!\w)/i,	//isvoid
	/^in(?!\w)/i,		//in
	/^let(?!\w)/i,		//let
	/^loop(?!\w)/i,		//loop
	/^new(?!\w)/i,		//new
	/^not(?!\w)/i,		//not
	/^of(?!\w)/i,		//of
	/^pool(?!\w)/i,		//pool
	/^then(?!\w)/i,		//then
	/^while(?!\w)/i,	//while
	/^true/,			//true
	/^false/			//false
];

const regexEspecialWords = [
	/^self(?!\w)/,		//self
	/^SELF_TYPE(?!\w)/	//SELF_TYPE
];

function doLexAnalysis(code: string): Array<Token>{
	let line = 1;
	let tokens = new Array<Token>();
	while (code.length){
		//Remove line comment
		if (code.match(regexLineComment)){
			code = code.replace(regexLineComment, "");
			continue;
		}

		//Remove multi line comments
		const capturedComment = code.match(regexMultiLineComment);
		if (capturedComment) {
			const newLines = capturedComment[0].match(regexNewLines);
			if (newLines)
				line+=newLines.length;
			code = code.replace(regexMultiLineComment, "");
			continue;
		}

		//Capture strings
		const capturedString = code.match(regexString);
		if (capturedString) {
			code = code.replace(regexString, "");
			tokens.push(
				new Token(
					capturedString[0],
					line,
					TokenType.STRING
				)
			)
			const newLines = capturedString[0].match(regexNewLines);
			if (newLines)
				line+=newLines.length;
			continue;
		}
		
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
			const symbol = code.match(regex);
			if (symbol) {
				code = code.replace(regex, "");
				tokens.push(
					new Token(
						symbol[0],
						line,
						TokenType.SYMBOL
					)
				);
				return true;
			}			
		});
		if (replace.includes(true)) continue;

		//Capture keywords
		let verifyKeyWords = regexKeyWords.map(regex => {
			const keyWord = code.match(regex);
			if (keyWord) {
				code = code.replace(regex, "");
				tokens.push(
					new Token(
						keyWord[0].toLowerCase(),
						line,
						TokenType.KEYWORD
					)
				);
				return true;
			}			
		});
		if (verifyKeyWords.includes(true)) continue;


		//Capture especial words
		let verifyEspecialWords = regexEspecialWords.map(regex => {
			const especialWord = code.match(regex);
			if (especialWord) {
				code = code.replace(regex, "");
				tokens.push(
					new Token(
						especialWord[0],
						line,
						TokenType.ESPECIAL
					)
				);
				return true;
			}			
		});
		if (verifyEspecialWords.includes(true)) continue;

		//Capture integer
		let capturedInteger = code.match(regexInteger);
		if (capturedInteger){
			code = code.replace(regexID, "");
			tokens.push(
				new Token(
					capturedInteger[0],
					line,
					TokenType.INTEGER
				)
			);
			continue;
		}

		//Capture IDs and Types
		let capturedID = code.match(regexID);
		if (capturedID){
			let tokenType;
			if (code[0] == code[0].toUpperCase())
				tokenType = TokenType.TYPE;
			else
				tokenType = TokenType.ID;
			
			tokens.push(
				new Token(
					capturedID[0],
					line,
					tokenType
				)
			);
			code = code.replace(regexID, "");
			continue;
		}

		//Token não identificado
		throw new ErrorToken(`${code.charAt(0)}`, line);
	} 
	return tokens;
}

export default doLexAnalysis;