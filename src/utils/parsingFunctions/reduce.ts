import grammar from "./../cool/grammar";
import goTo from "./goTo";
import Token from "../../classes/Token";

//Shift function
function reduce(stack: Array<[string, Token]>, rule: string): Array<[string, Token]>{
	const nonTerminal = grammar[parseInt(rule)-1][0][0];

	console.log(grammar[parseInt(rule)-1][0]+" -> "+grammar[parseInt(rule)-1][1].join(" "));

	for(let i = 0; i < grammar[parseInt(rule)-1][1].length*2; i++)
		stack.pop();

	stack = goTo(stack, nonTerminal);
	
	return stack;
}

export default reduce;