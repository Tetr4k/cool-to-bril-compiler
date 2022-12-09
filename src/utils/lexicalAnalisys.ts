import Token from "../classes/Token";
import TokenType from "../types/TokenType";
import { LexError } from "../classes/Errors";
import {
	firstChar,
	lineComment,
	multiLineComment,
	integer,
	string,
	id,
	keyWords,
	symbols,
	newLine,
	newLines,
	whiteSpace
} from "../cool/regex";


function doLexAnalysis(code: string, errors = new Array<LexError>): [Array<Token>, Array<LexError>]{
	let line = 1;
	let tokens = new Array<Token>();
	while (code.length){
		//Remove line comment
		if (code.match(lineComment)){
			code = code.replace(lineComment, "");
			continue;
		}

		//Remove multi line comments
		const capturedComment = code.match(multiLineComment);
		if (capturedComment) {
			const capturedNewLines = capturedComment[0].match(newLines);
			if (capturedNewLines)
				line+=capturedNewLines.length;
			code = code.replace(multiLineComment, "");
			continue;
		}

		//Capture strings
		const capturedString = code.match(string);
		if (capturedString) {
			code = code.replace(string, "");
			tokens.push(
				new Token(
					capturedString[0],
					line,
					TokenType.STRING
				)
			)
			const capturedNewLines = capturedString[0].match(newLines);
			if (capturedNewLines)
				line+=capturedNewLines.length;
			continue;
		}
		
		//Remove new line
		if (code.match(newLine)){
			line++;
			code = code.replace(newLine, "");
			continue;
		}

		//Remove white spaces
		if (code.match(whiteSpace)){
			code = code.replace(whiteSpace, "");
			continue;
		}

		//Capture symbols
		let replace = symbols.map(regex => {
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
		let verifyKeyWords = keyWords.map(regex => {
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

		//Capture integer
		let capturedInteger = code.match(integer);
		if (capturedInteger){
			code = code.replace(id, "");
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
		let capturedID = code.match(id);
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
			code = code.replace(id, "");
			continue;
		}

		//Token não identificado
		errors.push(new LexError(code.charAt(0), line));
		code = code.replace(firstChar, "");
	} 
	return [tokens, errors];
}

export default doLexAnalysis;