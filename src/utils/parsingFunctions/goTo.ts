import { transitions, symbols } from "../cool/transitions";
import Token from "../../classes/Token";
import TokenType from "../../types/TokenType";

function goTo(tokenStack: Array<Token>, stateStack: Array<number>, nonTerminal: string): [Array<Token>, Array<number>]{
	const goToState = stateStack.pop();
	stateStack.push(goToState);

	const action = transitions[goToState][symbols.get(nonTerminal)][1];

	tokenStack.push(new Token(nonTerminal, -1, TokenType.INVALID));
	stateStack.push(action);

	return [tokenStack, stateStack];
}

export default goTo;