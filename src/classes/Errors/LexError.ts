import Token from "../Token";
import CompilationError from "./CompilationError";

class LexError extends CompilationError{
	private character: string;
	constructor(character: string, line: number){
		super(line);
		this.character = character;
	}

	public toString(): string {
		return `Lexical Error: \"${this.character}\" not recognized ${super.toString()}!`;
	}
}

export default LexError;