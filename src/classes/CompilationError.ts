class CompilationError{
	private message: string;
	private line: number;

	constructor(message: string, line: number){
		this.message = message;
		this.line = line;
	}

	get getMessage(): string{
		return this.message;
	}

	get getLine(): number{
		return this.line;
	}
}

export default CompilationError;