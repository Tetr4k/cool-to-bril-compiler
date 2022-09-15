import TokenType from "../types/TokenType";

class Token{
	private line: number;
	private word: string;
	private tokenType: TokenType;

	constructor(word: string, line: number, tokenType: TokenType){
		this.word = word;
		this.line = line;
		this.tokenType = tokenType;
	}

	get getLine(): number{
		return this.line;
	}

	get getWord(): string{
		return this.word;
	}

	get getType(): string{
		return this.tokenType.toString();
	}

	public toString(): string{
		return `${this.tokenType} ${this.word} from line ${this.line}`;
	}
}

export default Token;