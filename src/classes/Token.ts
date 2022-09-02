class Token{
	private line: number;
	private word: (string|RegExp);

	constructor(word: (string|RegExp), line: number){
		this.word = word;
		this.line = line;
	}

	get getLine(): number{
		return this.line;
	}

	get getWord(): (string|RegExp){
		return this.word;
	}

	public toString(): string{
		return `"${this.word}" from line ${this.line}`;
	}
}

export default Token;