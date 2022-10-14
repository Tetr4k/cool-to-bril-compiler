import Token from "../Token";
import CompilationError from "./CompilationError";

class LexError extends CompilationError{
	constructor(token: Token){
		super(token.getLine, token.getWord);
	}

	public toString(): string {
		return `Lexical Error: ${super.toString()} not recognized!`;
	}
}

export default LexError;