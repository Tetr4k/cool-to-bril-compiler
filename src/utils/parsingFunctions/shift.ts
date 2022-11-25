import Token from "../../classes/Token";
import { getSymbol } from "../functions";

//Shift function
function shift(tokenStack: Array<Token>, stateStack: Array<number>, token: Token, state: number): [Array<Token>, Array<number>]{
	tokenStack.push(token);
	stateStack.push(state);
	return [tokenStack, stateStack];
}

export default shift;