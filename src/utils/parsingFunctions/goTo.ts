import { GoToAction } from "../../classes/SyntaxActions";
import transitions from "../cool/transitions";

function goTo(stack: Array<string>, nonTerminal: string){
	const goToState = stack.pop();
	stack.push(goToState);

	const action = transitions
		.get(nonTerminal.toString())
		.filter(
			elem => elem.previous == parseInt(goToState)
		).at(0);
	
	stack.push(nonTerminal);

	if (action instanceof GoToAction)
		stack.push(action.next.toString());

	return stack;
}

export default goTo;