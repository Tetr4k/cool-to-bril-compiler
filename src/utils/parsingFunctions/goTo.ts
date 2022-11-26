import { transitions, symbols } from "../../cool/transitions";
import Reducible from "../../classes/Reducible";
import Node from "../../classes/Node";
import Rule from "../../classes/Rule";

function goTo(reducibleStack: Array<Reducible>, stateStack: Array<number>, rule: Rule, nodes: Array<Reducible>){
	const goToState = stateStack.pop();
	stateStack.push(goToState);

	const action = transitions[goToState][symbols.get(rule.nonTerminal)][1];

	reducibleStack.push(new Node(rule.type, nodes));
	stateStack.push(action);
}

export default goTo;