import grammar from "./../cool/grammar";
import goTo from "./goTo";
import Token from "../../classes/Token";
import TokenType from "../../types/TokenType";

//Shift function
function reduce(tokenStack: Array<Token>, stateStack: Array<number>, rule: number): [Array<Token>, Array<number>]{
	const nonTerminal = grammar[rule-1][0][0];
	console.log(grammar[rule-1][0]+" -> "+grammar[rule-1][1].join(" "));

	let nodes = new Array<Token>();
	for(let i = 0; i < grammar[rule-1][1].length; i++){
		const token = tokenStack.pop();
		if (token && token.getType != TokenType.KEYWORD && token.getType != TokenType.SYMBOL)
			nodes.push(token);
		stateStack.pop();
	}

	console.log(nodes);

	[tokenStack, stateStack] = goTo(tokenStack, stateStack, nonTerminal);//, nodes
	
	return [tokenStack, stateStack];
}

export default reduce;