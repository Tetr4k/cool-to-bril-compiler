import Token from "../Token";
import CompilationError from "./CompilationError";

class SynError extends CompilationError{
	constructor(token: Token){
		super(token.type, token.word);
	}

	public toString(): string {
		return `Syntax Error: ${super.toString()} unexpected!`;
	}
}

export default SynError;