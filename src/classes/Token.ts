class Token{
	private line: number;
	private word: string;
	private tokenType: string;

	constructor(word: string, line: number, tokenType?: string){
		this.word = word;
		this.line = line;
		if (tokenType == undefined)
			this.tokenType = "Symbol";
		else
			this.tokenType = tokenType;
	}

	get getLine(): number{
		return this.line;
	}

	get getWord(): string{
		return this.word;
	}

	public toString(): string{
		return `${this.tokenType} ${this.word} from line ${this.line}`;
	}
}

export default Token;