import Token from "../Token";
import CompilationError from "./CompilationError";

class SynError extends CompilationError{
	private word: string;
	constructor(line: number, word: string){
		super(line);
		this.word = word;
	}

	public toString(): string {
		return `Syntax Error: \"${this.word}\" expected ${super.toString()}!`;
	}
}

export default SynError;