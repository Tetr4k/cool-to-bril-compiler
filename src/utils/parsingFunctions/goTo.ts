import { transitions, symbols } from "../cool/transitions";
import Token from "../../classes/Token";

function goTo(stack: Array<[string, Token]>, nonTerminal: string){
	const goToState = stack.pop();
	stack.push(goToState);
	
	const action = transitions[parseInt(goToState[0])][symbols.get(nonTerminal)][1];

	stack.push([nonTerminal, undefined]);
	stack.push([action, undefined]);

	return stack;
}

export default goTo;