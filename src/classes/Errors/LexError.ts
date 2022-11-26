import Token from "../Token";
import CompilationError from "./CompilationError";

class LexError extends CompilationError{
	constructor(token: Token){
		super(token.line, token.word);
	}

	public toString(): string {
		return `Lexical Error: ${super.toString()} not recognized!`;
	}
}

export default LexError;