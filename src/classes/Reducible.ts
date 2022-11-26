import RuleType from "../types/RuleType";
import TokenType from "../types/TokenType";

interface Reducible{
	readonly type: TokenType | RuleType;
}

export default Reducible;