import RuleType from "../types/RuleType";

class Rule {
	readonly nonTerminal: string;
	readonly length: number;
	readonly type: RuleType;

	constructor(nonTerminal: string, lenght: number, type: RuleType){
		this.nonTerminal = nonTerminal;
		this.length = lenght;
		this.type = type;
	}
}

export default Rule;