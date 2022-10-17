import Token from "../../classes/Token";
import { getSymbol } from "../functions";

//Shift function
function shift(stack: Array<[string, Token]>, token: Token, state: string){
	stack.push([getSymbol(token), token]);
	stack.push([state, undefined]);
	return stack;
}

export default shift;