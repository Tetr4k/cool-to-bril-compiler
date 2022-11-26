import Token from "../classes/Token";
import TokenType from "../types/TokenType";
import { shift, reduce, error } from "./parsingFunctions";
import { SynError } from "../classes/Errors";
import { transitions, symbols } from "../cool/transitions";
import { getSymbol } from "./functions";
import ActionType from "../types/ActionType";
import Reducible from "../classes/Reducible";

//Step function
function step(input: Array<Token>, reducibleStack = new Array<Reducible>, stateStack = [0], errors = new Array<SynError>): [Array<Reducible>, Array<SynError>]{
	const nextToken = input.pop();
	input.push(nextToken);
	
	const previousState = stateStack.pop();
	stateStack.push(previousState);

	const nextWord = getSymbol(nextToken);
	const nextAction = transitions[previousState][symbols.get(nextWord)];

	//Error
	if (nextAction[0] == ActionType.ERROR){
		error(nextToken, previousState, input, reducibleStack, stateStack, errors);
		return step(input, reducibleStack, stateStack, errors);
	}
	//Shift
	if (nextAction[0] == ActionType.SHIFT){
		shift(input, reducibleStack, stateStack, nextAction[1]);
		return step(input, reducibleStack, stateStack, errors);
	}
	//Reduce
	if (nextAction[0] == ActionType.REDUCE){
		reduce(reducibleStack, stateStack, nextAction[1]);
		return step(input, reducibleStack, stateStack, errors);
	}
	//Accept
	if (nextAction[0] == ActionType.ACCEPT){
		console.log(reducibleStack);
		return [reducibleStack, errors];
	}
}

//doSynAnalysis function
function doSynAnalysis(input: Array<Token>): [Array<Reducible>, Array<SynError>]{
	input.push(new Token('EOF', 0, TokenType.INVALID));
	input.reverse();
	return step(input);
}

export default doSynAnalysis;