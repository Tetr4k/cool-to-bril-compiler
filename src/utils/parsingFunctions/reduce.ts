import { ReduceAction } from "../../classes/SyntaxActions";
import grammar from "./../cool/grammar";
import goTo from "./goTo";

//Shift function
function reduce(stack: Array<string>, action: ReduceAction): Array<string>{
	const rule = action.getRule;
	const nonTerminal = grammar[rule][0][0];

	console.log(grammar[rule][0]+" -> "+grammar[rule][1].join(" "));

	for(let i = 0; i < grammar[rule][1].length*2; i++)
		stack.pop();

	stack = goTo(stack, nonTerminal);

	return stack;
}

export default reduce;