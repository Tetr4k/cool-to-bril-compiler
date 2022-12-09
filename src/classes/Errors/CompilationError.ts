import Token from "../Token";

class CompilationError{
	private line: number;

	constructor(line: number){
		this.line = line;
	}

	get getLine(): number{
		return this.line;
	}

	public toString(): string {
		return " in line "+this.line;
	}

}

export default CompilationError;