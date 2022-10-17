import Token from "../../classes/Token";
import TokenType from "../../types/TokenType";

const staticTokenTypes = [TokenType.KEYWORD, TokenType.SYMBOL, TokenType.INVALID];

function getSymbol(token: Token){
	return staticTokenTypes.includes(token.getType) ? token.getWord : TokenType[token.getType];
}

export default getSymbol;
