import grammar from  "../../cool/grammar";
import goTo from "./goTo";
import TokenType from "../../types/TokenType";
import Reducible from "../../classes/Reducible";

//Shift function
function reduce(reducibleStack: Array<Reducible>, stateStack: Array<number>, rule: number){
	let nodes = new Array<Reducible>();
	for(let i = 0; i < grammar[rule-1].length; i++){
		const nextReducible = reducibleStack.pop();
		if (nextReducible.type != TokenType.KEYWORD && nextReducible.type != TokenType.SYMBOL)
			nodes.push(nextReducible);
		stateStack.pop();
	}

	goTo(reducibleStack, stateStack, grammar[rule-1], nodes);//, nodes
}

export default reduce;