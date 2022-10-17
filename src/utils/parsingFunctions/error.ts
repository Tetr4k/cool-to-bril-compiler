import { SynError } from "../../classes/Errors";
import Token from "../../classes/Token";
import { transitions, symbols } from "../cool/transitions";
import reduce from "./reduce";
import { getSymbol } from "../functions";

function searchReduce(previousState: number, stack: Array<[string, Token]>): string[]{
	const actions = transitions[previousState];

	let validAction;

	while(!validAction)
		validAction = actions.pop();

	if (validAction[0]=='r')
		return validAction;

	stack.push(undefined, undefined);
	return searchReduce(parseInt(validAction[1]), stack)
}

function searchShift(previousState: number, input: Array<Token>): string[]{
	if (input.length <= 1)
		return undefined;
	const nextToken = input.pop();
	const nextSymbol = getSymbol(nextToken)
	const nextAction = transitions[previousState][symbols.get(nextSymbol)];
	if (nextAction)
		return nextAction;
	return searchShift(previousState, input);
}

function error(errorToken: Token, previousState: string, input: Array<Token>, stack: Array<[string, Token]>, errors: Array<SynError>): Array<SynError>{
	if (!input.length)
		return errors;
	errors.push(new SynError(errorToken))

	const reduceAction = searchReduce(parseInt(previousState), stack);

	stack = reduce(stack, reduceAction[1]);
	
	const nextState = stack.pop();
	stack.push(nextState);

	searchShift(parseInt(nextState[0]), input);

	return errors;
}

export default error;