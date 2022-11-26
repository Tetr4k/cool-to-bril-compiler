import TokenType from "../types/TokenType";
import Reducible from "./Reducible";

class Token implements Reducible{
	readonly line: number;
	readonly word: string;
	readonly type: TokenType;

	constructor(word: string, line: number, tokenType: TokenType){
		this.word = word;
		this.line = line;
		this.type = tokenType;
	}

	public toString(): string{
		return `${this.type} ${this.word} from line ${this.line}`;
	}
}

export default Token;