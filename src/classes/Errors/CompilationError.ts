import Token from "../Token";

class CompilationError{
	private line: number;
	private word: string;

	constructor(line: number, word: string){
		this.line = line;
		this.word = word;
	}

	get getLine(): number{
		return this.line;
	}

	public toString(): string {
		return this.word+" in line "+this.line;
	}

}

export default CompilationError;