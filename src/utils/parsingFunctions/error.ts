import { SynError } from "../../classes/Errors";
import Token from "../../classes/Token";
import { transitions, symbols } from "../cool/transitions";
import reduce from "./reduce";
import { getSymbol } from "../functions";

function searchReduce(previousState: number, tokenStack: Array<Token>, stateStack: Array<number>): [string, number]{
	const actions = [...transitions[previousState]];
	const validAction = actions.filter(elem => elem)[0];
	
	if (validAction[0]=='r')
		return validAction;

	tokenStack.push(undefined);
	stateStack.push(undefined);
	
	return searchReduce(validAction[1], tokenStack, stateStack);
}

function searchShift(previousState: number, input: Array<Token>): [string, number]{
	const nextToken = input.pop();
	const nextSymbol = getSymbol(nextToken)
	const nextAction = transitions[previousState][symbols.get(nextSymbol)];

	if (nextAction){
		input.push(nextToken);
		return nextAction;
	}

	return searchShift(previousState, input);
}

function error(errorToken: Token, previousState: number, input: Array<Token>, tokenStack: Array<Token>, stateStack: Array<number>, errors: Array<SynError>): Array<SynError>{
	errors.push(new SynError(errorToken))

	if (!input.length)
		return errors;
	
	const reduceAction = searchReduce(previousState, tokenStack, stateStack);

	[tokenStack, stateStack] = reduce(tokenStack, stateStack, reduceAction[1]);
	
	const nextState = stateStack.pop();
	stateStack.push(nextState);

	searchShift(nextState, input);
	return errors;
}

export default error;
