import Token from "./Token";

class ErrorToken extends Token{
	constructor(word: string, line: number){
		super(word, line);
	}

	public toString(): string {
		return `Error: ${super.toString()} is not recognized!`;
	}
}

export default ErrorToken;