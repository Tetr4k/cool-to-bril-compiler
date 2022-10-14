import Token from "../Token";
import CompilationError from "./CompilationError";

class SynError extends CompilationError{
	constructor(token: Token){
		super(token.getLine, token.getWord);
	}

	public toString(): string {
		return `Syntax Error: ${super.toString()} unexpected!`;
	}
}

export default SynError;